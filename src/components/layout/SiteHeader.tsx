"use client";

import SiteLogo from "../icons/SiteLogo";

import { Container, Flex, Text, ListItem, List } from "@chakra-ui/react";

export default function SiteHeader() {
  return (
    <Container maxW="container.xl" mt="62px">
      <Flex justify="space-between">
        <SiteLogo />
        <List display="flex" flexDir="row">
          <ListItem>Home</ListItem>
          <ListItem>Portfolio</ListItem>
          <ListItem>ContactMe</ListItem>
        </List>
      </Flex>
    </Container>
  );
}
