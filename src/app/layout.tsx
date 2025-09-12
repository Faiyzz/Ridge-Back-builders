// src/app/layout.tsx
import Footer from "./components/footer";
import Navbar from "./components/header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TruScope",
  description: "Marketing site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
