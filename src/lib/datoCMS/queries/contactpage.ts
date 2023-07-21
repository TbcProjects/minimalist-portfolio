import { gql } from "graphql-request";

export const CONTACTPAGE_QUERY = gql`
  query Contactpage {
    contactpage {
      contactpageContent {
        ... on SectionContactDetailRecord {
          id
          heading
          body
          _modelApiKey
        }
        ... on ModuleSocialRecord {
          id
          socialLinks {
            linkIcon
            linkName
            linkUrl
            _modelApiKey
          }
          _modelApiKey
        }
      }
    }
  }
`;
