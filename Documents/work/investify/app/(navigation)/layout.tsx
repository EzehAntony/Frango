import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative pt-20 ">
      <Header />
      {children}
      <Navigation />
    </div>
  );
}
