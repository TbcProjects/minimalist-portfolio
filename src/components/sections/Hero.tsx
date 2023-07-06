"use client";

import Link from "next/link";

import { Text, Box } from "@chakra-ui/react";

export default function Hero({ data }: { [key: string]: unknown }) {
  return (
    <div>
      <Text as={"h1"} textStyle={"h1"}>
        Heading h1
      </Text>
      <Text textStyle={"h2"}>Heading h2</Text>
      <Text textStyle={"h3"}>Heading h3</Text>
      <Box>
        <Link href="/portfolio">Click to view portfolio</Link>
        <Link href="/contact">Contact us</Link>
      </Box>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
