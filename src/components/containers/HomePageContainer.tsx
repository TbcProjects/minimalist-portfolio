"use client";
import { ReactNode } from "react";

import { Container, ContainerProps } from "@chakra-ui/react";

interface HomePageContainerProps extends ContainerProps {
  children?: ReactNode;
}

export default function HomePageContainer({
  children,
}: HomePageContainerProps) {
  return <Container maxW="container.xl">{children}</Container>;
}
