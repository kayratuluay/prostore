import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "ProStore",
  description: "A modern e-commerce app built with Netx.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
        <main className="flex-1 wrapper">
            {children}
        </main>
    </div>
  );
}
