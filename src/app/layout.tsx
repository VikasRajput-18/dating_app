import type { Metadata } from "next";
import { Nunito_Sans as NunitoSans } from "next/font/google";
import "./globals.css";
import ThemeDataProvider from "@/components/theme-provider";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const nunitoSans = NunitoSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={nunitoSans.className}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>{children}</ThemeDataProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
