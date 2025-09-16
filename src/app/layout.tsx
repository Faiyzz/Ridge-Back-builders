import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RidgebackBuilders",
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
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
