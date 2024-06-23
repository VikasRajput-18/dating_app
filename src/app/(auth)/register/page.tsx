"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormValidation, registerSchema } from "@/types/form-types";
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

const Register = () => {
  const form = useForm<registerSchema>({
    resolver: zodResolver(registerFormValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: registerSchema) => {
    console.log(values);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 0 -translate-y-1/2 p-8 rounded-lg
        bg-primary/30 backdrop-blur-md w-full max-w-md border border-primary"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center flex-col w-full gap-2"
        >
          <div className="bg-primary w-full py-3 px-2 rounded-sm border border-dashed">
            <h2 className="text-center font-bold text-2xl text-neutral-50">
              Register Now!
            </h2>
            <p className="text-xs text-center text-neutral-50">
              Get started and be part of something amazing.
            </p>
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-slate-100">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage className="text-neutral-200 font-normal text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-slate-100">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-neutral-200 font-normal text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-slate-100">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-neutral-200 font-normal text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-slate-100">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-neutral-200 font-normal text-xs" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-5">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
