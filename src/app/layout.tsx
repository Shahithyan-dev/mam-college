import type { Metadata } from "next";
 import "./globals.css";

  export const metadata: Metadata = {
  title: "M.A.M. School of Engineering",
  description: "An Autonomous Institution | Approved By AICTE | Affiliated to Anna University",
  icons: {
    icon: "https://res.cloudinary.com/m6nlay03/image/upload/v1788333270/mam_college/logo.png",
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingSidebar from "@/components/layout/FloatingSidebar";
import SplashScreen from "@/components/layout/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-background relative overflow-x-hidden">
        <SplashScreen />
        <FloatingSidebar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

