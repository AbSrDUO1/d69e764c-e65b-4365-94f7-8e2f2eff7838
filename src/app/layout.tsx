import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Essential Static Landing",
  description: "Deliver a simple one-page site featuring landing, about, terms, policy, and a conversion-focused contact section.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}