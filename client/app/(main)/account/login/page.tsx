"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues } from "react-hook-form";

import axios from "axios";
import { headers } from "next/headers";

// 1. Define your schema
const formSchema = z.object({
  email: z.string().min(6, {
    message: "email must be at least 6 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
});

// 2. Define a submit handler.
const onSubmit: SubmitHandler<FieldValues> = async (values) => {

  try {
    const response = await axios.post(
      "http://localhost:9000/store/auth/token",
      JSON.stringify({
        email: values.email,
        password: values.password
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status > 204) {
      return ;
    }
    // const userID = response.data.id
    const token = response.data.access_token
    // localStorage.setItem('userID', userID)
    localStorage.setItem('token', token)
    window.location.href = `/dashboard`

  } catch (error) {
  } finally {
  }

  console.log(values);
};

function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-1/3 min-w-[300px] m-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user@something.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm

