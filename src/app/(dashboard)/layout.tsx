"use client";
import { Navbar } from "@/components/Navbar";
import React, { useRef } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const featuresRef = useRef<HTMLElement>(null);
  const updatesRef = useRef<HTMLElement>(null);
  return (
    <>
      <Navbar featuresRef={featuresRef} updatesRef={updatesRef} />
      {children}
    </>
  );
}
