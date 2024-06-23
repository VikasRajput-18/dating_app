"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormValidation, registerSchema } from "@/types/form-types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";

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

  const { formState } = form;

  const onSubmit = async (values: registerSchema) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });
      if (res.status === 400) {
        toast({
          variant: "destructive",
          title: "This email is already registered",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
      if (res.status === 200) {
        toast({
          title: "User registered",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
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
          <Button
            disabled={formState.isSubmitting}
            type="submit"
            className="w-full mt-5"
          >
            {formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Register"
            )}
          </Button>
          <div className="flex items-center gap-1">
            <p className="text-neutral-50">Already have an account?</p>
            <Link
              href="/login"
              className="text-primary underline font-extrabold"
            >
              Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Register;
