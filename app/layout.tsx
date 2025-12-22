import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Adhithyan K R | Software Engineer & Data Scientist",
  description: "Software Engineer | Data Scientist. I build data-driven software systems that turn ideas into scalable, real-world solutions.",
};

import { ThemeProvider } from "@/components/theme-provider"
import { CursorFollower } from "@/components/ui/cursor-follower";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
