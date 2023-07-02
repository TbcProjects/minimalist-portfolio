"use client";

import Link from "next/link";

import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Text textStyle={"h1"}>Home page</Text>
      <div>
        <Link href="/portfolio">Click to view portfolio</Link>
        <Link href="/contact">Contact us</Link>
      </div>
    </main>
  );
}
