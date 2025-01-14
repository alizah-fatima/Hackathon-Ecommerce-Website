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
import Image from "next/image";

const Login = () => {
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
          <Link href="/login" className="text-pink-500 text-md font-medium">
          Create Account
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center h-[600px]">
        <Card className="w-[400px] shadow-lg">
          <CardHeader>
            <CardTitle className="font-bold text-center mb-4">Login</CardTitle>
            <CardDescription className="text-center">
              Please login using account detail below
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form action="" className="flex flex-col gap-4">
              <Input type="email" placeholder="Email Address" />
              <Input type="password" placeholder="password" />
              <Button
                type="submit"
                className="bg-pink-600 text-white hover:bg-pink-500 shadow-lg hover:shadow-xl"
              >
                Log In
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <form action="">
              <Button type="submit" variant={"outline"}>
                Login with Google
              </Button>
            </form>

            <Link href="/signup" className="text-gray-500"> Don&apos;t have an account? Create Account</Link>
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

export default Login;
