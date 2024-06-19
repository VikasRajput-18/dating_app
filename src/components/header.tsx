import React from "react";
import { ThemeColorChanger } from "./theme-color-toggle";
import { ThemeModeToggle } from "./theme-mode-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center z-10 w-full relative">
      <nav className="sm:container sm:mx-auto px-3 w-full h-16 flex items-center justify-between">
        <Link
          href="/"
          className={cn("text-3xl flex items-center gap-1 text-primary")}
        >
          <Image
            src="/assets/logo1.webp"
            width={160}
            height={60}
            alt="logo"
            className="h-10 w-full object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          <Button
            asChild
            className="bg-gradient-to-tr from-rose-500 to-purple-500"
          >
            <Link href="/register">Create Profile</Link>
          </Button>
          <ThemeColorChanger />
          <ThemeModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
