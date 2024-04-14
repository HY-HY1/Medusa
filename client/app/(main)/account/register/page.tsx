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

import Link from "next/link";

import axios from "axios";
import { headers } from "next/headers";

// 1. Define your schema
const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
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
      "http://localhost:9000/store/customers",
      JSON.stringify({
        email: values.email,
        password: values.password,
        first_name: values.firstname,
        last_name: values.surname
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
    const userID = response.data.id
    localStorage.setItem('userID', userID)
    window.location.href = `/dashboard`

  } catch (error) {
  } finally {
  }

  console.log(values);
};

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      surname: "",
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
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Surname</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Link href='/account/login'><p className="underline text-[14px] py-1">Login</p></Link>
          <Button type="submit">Submit</Button>
          
        </form>
      </Form>
    </div>
  );
}

export default ProfileForm;
