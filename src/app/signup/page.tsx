import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "@/models/userModel";
import { hash } from "bcryptjs";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

const Signup = () => {
  const signUp = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string | undefined;
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;

    if (!name || !email || !password)
      throw new Error("Please provide all fields");

    const user = await User.findOne({ email });

    if (!user) throw new Error("User already exists");

    const hashedPassword = await hash(password, 8);

    await User.create({ name, email, password: hashedPassword });
  };

  return (
    <div>
      <div className="bg-purple-100 h-60">
        <div>
          <h3 className="text-3xl text-blue-950 font-bold pt-16 ml-64">
          Create Account
          </h3>
        </div>
        <div className="mt-2 ml-64">
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Home .
          </Link>
          <Link href="#" className="text-black text-md font-medium mr-2">
            Pages .
          </Link>
          <Link href="/signup" className="text-pink-500 text-md font-medium">
          Create Account
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center h-[600px]">
        <Card className="w-[400px] shadow-lg">
          <CardHeader>
            <CardTitle className="font-bold text-center mb-4">
              Create Account
            </CardTitle>
            <CardDescription className="text-center">
              Create a New Account below
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form action="signUp" className="flex flex-col gap-4">
              <Input type="text" placeholder="Name" name="name" />
              <Input type="email" placeholder="Email Address" name="email" />
              <Input type="password" placeholder="password" name="password" />
              <Button
                type="submit"
                className="bg-pink-600 text-white hover:bg-pink-500 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <form action="">
              <Button type="submit" variant={"outline"}>
                Sign Up with Google
              </Button>
            </form>

            <Link href="/login" className="text-gray-500"> Already have an account? Login</Link>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={"/list.png"}
          alt="list"
          width={900}
          height={900}
          className="mt-6"
        />
      </div>
    </div>
  );
};

export default Signup;
