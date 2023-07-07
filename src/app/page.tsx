import { gql } from "graphql-request";
import { datoClient } from "@/lib/datocms/client";
import Button from "../components/shared/Button";

import { css } from "../../styled-system/css";

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
  console.log(data);

  return (
    <div>
      <h1 className={css({ textStyle: "h1", color: "cyan" })}>Hello</h1>
      <Button>Click me</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
