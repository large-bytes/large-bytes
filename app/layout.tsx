import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Large Bytes - Creating software solutions for small businesses.",
  description:
    "At Large Bytes, we specialize in custom software development, IT consultancy, and system integration tailored to empower small businesses with affordable, scalable technology solutions. Discover how we can help your business grow at largebytes.co.uk.",
  authors: [
    { name: "Joe Lander", url: "https://www.linkedin.com/in/josephclander/" },
    { name: "Tom Fyfe", url: "https://www.linkedin.com/in/tomfyfe/" },
  ],
  keywords: [
    "software solutions for small businesses",
    "custom software development",
    "IT consultancy services",
    "system integration solutions",
    "small business technology solutions",
    "UK software solutions",
    "affordable business software",
    "scalable IT solutions for SMEs",
  ],
  creator: "Joe Lander",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}
