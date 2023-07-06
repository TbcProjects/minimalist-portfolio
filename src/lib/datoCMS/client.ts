import { GraphQLClient } from "graphql-request";

export const datoClient = async (query: string) => {
  const endpoint = "https://graphql.datocms.com";

  const client = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.NEXT_DATOCMS_API_TOKEN,
    },
  });

  const data = await client.request(query);

  return data;
};
