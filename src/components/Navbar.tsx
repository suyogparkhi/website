"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CrossIcon } from "lucide-react";


import { RefObject } from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface NavbarProps {
  featuresRef: RefObject<HTMLElement>;
  updatesRef: RefObject<HTMLElement>;
}
export const Navbar = ({ featuresRef, updatesRef }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToFeatures = () => {
    if (featuresRef && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToUpdates = () => {
    if (updatesRef && updatesRef.current) {
      updatesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <Image
                src={"/"}
                alt="Logo"
                height={10}
                width={10}
                className="h-16 w-16 relative mt-1 ml-2"
              />
            </div>

            <div
              className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden z-50 relative"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <CrossIcon className="h-6 w-6 text-white" />
              ) : (
                <MenuIcon className="text-white" />
              )}
            </div>

            <nav className="text-white gap-6 items-center hidden sm:flex">
              <button
                onClick={scrollToFeatures}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
              <Link href={"/swap"}>
                Swap
              </Link>
              </button>
              <button
                onClick={scrollToUpdates}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
              <Link href={"/positions"}>
                Positions
              </Link>
              </button>

              <Button className="bg-slate-800">
                <Link href="/models">Dashboard</Link>
              </Button>

                <ConnectButton />

            </nav>
          </div>

          <div
            className={`fixed top-0 right-0 h-full w-64 bg-black z-40 transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col items-center gap-4 py-20 text-white h-full">
              <button
                onClick={scrollToFeatures}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </button>
              <button
                onClick={scrollToUpdates}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Updates
              </button>
              <Button className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                <Link href="/models">Datasets</Link>
              </Button>

              <div className="mt-4">
                <ConnectButton />
              </div>
            </nav>
          </div>

          {menuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={toggleMenu}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
