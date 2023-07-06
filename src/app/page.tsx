import { gql } from "graphql-request";
import { datoClient } from "@/lib/datoCMS/client";

import HomePageContainer from "@/components/containers/HomePageContainer";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ContactBanner from "@/components/sections/ContactBanner";

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
    <HomePageContainer as={"main"}>
      <Hero data={data} />
      <AboutMe />
      <ContactBanner />
    </HomePageContainer>
  );
}
