"use client";
import { ReactNode } from "react";

import Link from "next/link";

import { Container, ContainerProps, Text } from "@chakra-ui/react";

interface HomePageContainerProps extends ContainerProps {
  children?: ReactNode;
}

export default function HomePageContainer({
  children,
}: HomePageContainerProps) {
  return (
    <Container maxW="container.xl">
      <Text as={"h1"} textStyle={"h1"}>
        Heading h1
      </Text>
      <Text textStyle={"h2"}>Heading h2</Text>
      <Text textStyle={"h3"}>Heading h3</Text>
      <div>
        <Link href="/portfolio">Click to view portfolio</Link>
        <Link href="/contact">Contact us</Link>
      </div>
      {children}
    </Container>
  );
}
