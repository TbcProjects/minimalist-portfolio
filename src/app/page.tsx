import { gql } from "graphql-request";
import { datoClient } from "@/lib/datoCMS/client";
import { Button } from "@/lib/theme/components/button";

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
  // const data = await datoClient(query);

  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
