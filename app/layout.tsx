import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIFTOFF™ | Strategic Digital Product Studio",
  description:
    "Premium digital product studio specializing in web design, branding, and creative engineering for ambitious brands.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#CCFF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}

