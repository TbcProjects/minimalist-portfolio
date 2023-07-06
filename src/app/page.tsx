import { gql } from "graphql-request";
import { datoClient } from "@/lib/datoCMS/client";

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

  return <div>Page</div>;
}
