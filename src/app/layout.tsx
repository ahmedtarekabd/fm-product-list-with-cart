import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const red_hat = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-red-hat",
});

export const metadata: Metadata = {
  title: "Product Listing & Cart",
  description: "Enjoy seamless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/favicon-32x32.png"
          type="image/png"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-red-hat antialiased",
          red_hat.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
