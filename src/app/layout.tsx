import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import ThemeDataProvider from "@/context/theme-provider";
import Navbar from "@/components/shared/navbar";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const robotMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapLinks",
  description: "Acortador de enlaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotMono.variable} antialiased`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>
            <div className="flex flex-col justify-center items-center h-screen">
              <Navbar />
              <div className="flex justify-center pt-16 w-full h-full">{children}</div>
              <Toaster />
            </div>
          </ThemeDataProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
