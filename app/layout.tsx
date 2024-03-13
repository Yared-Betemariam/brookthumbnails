import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Brook | A Thumbnail Designer",
  description: "I create Beautiful Thumbnails",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={poppins.className} lang="en">
      <body className="flex flex-col text-white font-medium text-lg bg-gradient-to-br from-yellow-600 to-orange-600">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
