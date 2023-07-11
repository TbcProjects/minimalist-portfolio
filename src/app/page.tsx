import { gql } from "graphql-request";

import { datoClient } from "@lib/datocms/client";

import { css } from "../../styled-system/css";

// section components
import Hero from "@components/sections/Hero";
import AboutMe from "@components/sections/AboutMe";
import ContactBanner from "@components/sections/ContactBanner";
/**
 * @todo - add head component
 */

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
    <>
      <Hero data={data} />
      <AboutMe />
      <ContactBanner />
    </>
  );
}
