"use client"
import { Navbar } from '../components/Navbar';
import React, { useRef } from 'react';

export default function Page() {
  const featuresRef = useRef<HTMLElement>(null);
  const updatesRef = useRef<HTMLElement>(null);

  return (
    <Navbar featuresRef={featuresRef} updatesRef={updatesRef} />
  )
}

