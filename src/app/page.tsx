import { gql } from "graphql-request";
import { datoClient } from "@/lib/datocms/client";

import { css } from "../../styled-system/css";

// section components
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ContactBanner from "@/components/sections/ContactBanner";

import { Container } from "../../styled-system/jsx";

const query = gql`
  query MyQuery {
    homepage {
      homepageContent {
        ... on SectionAboutMeRecord {
          id
          buttonLabel
          buttonLink
        }
      }
    }
  }
`;

export default async function Home() {
  const data = await datoClient(query);

  return (
    <Container maxW={"breakpoint-lg"}>
      <h1 className={css({ textStyle: "h1", color: "cyan" })}>Hello</h1>
      <Hero data={data} />
      <AboutMe />
      <ContactBanner />
    </Container>
  );
}
