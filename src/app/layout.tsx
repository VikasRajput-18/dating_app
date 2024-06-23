import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ThemeDataProvider from "@/components/theme-provider";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Love Portal",
  description:
    "Love Portal is your gateway to finding meaningful connections and lasting relationships. Discover your perfect match, engage in heartfelt conversations, and build a future full of love and companionship. Join our vibrant community today and start your journey to love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>{children}</ThemeDataProvider>
          <Toaster />
        </NextThemeProvider>
      </body>
    </html>
  );
}
