import { gql } from "graphql-request";

export const HOMEPAGE_QUERY = gql`
  query Homepage {
    homepage {
      homepageContent {
        ... on RecordInterface {
          id
          _modelApiKey
        }
        ... on SectionHeroRecord {
          id
          heroHeadline
          buttonLink
          buttonLabel
          heroImage {
            url
            alt
          }
          _modelApiKey
        }
        ... on SectionAboutMeRecord {
          id
          image {
            alt
            url
          }
          headline
          buttonLink
          buttonLabel
          _modelApiKey
        }
        ... on SectionContactBannerRecord {
          id
          headline
          buttonLink
          buttonLabel
          _modelApiKey
        }
      }
    }
  }
`;
