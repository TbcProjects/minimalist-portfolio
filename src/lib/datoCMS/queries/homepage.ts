import { gql } from "graphql-request";

export const HOMEPAGE_QUERY = gql`
  query Homepage {
    homepage {
      homepageContent {
        ... on SectionHeroRecord {
          id
          heroHeadline
          buttonLink
          buttonLabel
          heroImage {
            url
            alt
          }
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
        }
        ... on SectionContactBannerRecord {
          id
          headline
          buttonLink
          buttonLabel
        }
      }
    }
  }
`;
