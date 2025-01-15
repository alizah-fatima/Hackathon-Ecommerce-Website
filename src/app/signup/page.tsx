"use client"

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    
    alert(`Welcome, ${name}! Your account has been created.`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        <Input type="text" placeholder="Name" name="name" className="mb-4" required />
        <Input type="email" placeholder="Email Address" name="email" className="mb-4" required />
        <Input type="password" placeholder="Password" name="password" className="mb-4" required />
        <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
