import { gql } from "graphql-request";

export const SITE_HEADER_QUERY = gql`
  query SiteHeader {
    siteheader {
      navItems {
        pageUrl
        linkLabel
      }
    }
  }
`;
