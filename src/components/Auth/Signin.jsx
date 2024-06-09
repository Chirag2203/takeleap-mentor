import React from "react";
import AuthConsole from "./AuthConsole";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <AuthConsole>
      <div className="">
        {/* <h1 className="font-medium text-secondaryDark">Signin</h1> */}
        <p className="mt-2 text-3xl font-medium">Welcome back! Signin to continue</p>
        <Card className="mx-auto w-3/4 bg-gray-950 border-none mt-12">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password " >Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full dark:bg-purple-700">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
      </div>
    </AuthConsole>
  );
};

export default Signin;
