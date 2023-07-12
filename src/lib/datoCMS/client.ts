import { GraphQLClient } from "graphql-request";
import { getSdk } from "@typesDef/dato";

export const configureSdk = () => {
  const headers: Record<string, string> = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const endpoint = "https://graphql.datocms.com/preview";

  const client = new GraphQLClient(endpoint, { headers });

  return getSdk(client);
};
