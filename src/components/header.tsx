import React from "react";
import { Mooli } from "next/font/google";
import { ThemeColorChanger } from "./theme-color-toggle";
import { ThemeModeToggle } from "./theme-mode-toggle";
import Link from "next/link";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const mooli = Mooli({
  subsets: ["latin-ext"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header className="flex items-center z-10 relative">
      <nav className="container mx-auto h-16 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            mooli.className,
            "text-3xl flex items-center gap-1 text-primary",
          )}
        >
          {/* Love <Heart className="fill-primary" /> Portal */}
          <Image
            src="/assets/logo1.webp"
            width={160}
            height={60}
            alt="logo"
            className="h-10 w-full object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          <ThemeColorChanger />
          <ThemeModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
