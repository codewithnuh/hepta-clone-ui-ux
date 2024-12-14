import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/globals/footer";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Hepta - Clone UI UX",
  description: "Clone of Hepta UI UX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
