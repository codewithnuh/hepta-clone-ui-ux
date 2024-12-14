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
  openGraph: {
    title: "Hepta - Clone UI UX",
    description: "A beautiful and responsive UI/UX clone of Hepta.",
    url: "https://hepta-clone-ui-ux.vercel.app/",
    siteName: "Hepta Clone",
    images: [
      {
        url: "https://hepta-clone-ui-ux.vercel.app/assets/images/og-img.png",
        height: 630,
        alt: "Hepta Clone Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hepta - Clone UI UX",
    description: "A beautiful and responsive UI/UX clone of Hepta.",
    images: ["https://hepta-clone-ui-ux.vercel.app/assets/images/og-img.png"], // Replace with the URL of your Open Graph image
  },
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
