import { gql } from "graphql-request";

export const SITE_LAYOUT_QUERY = gql`
  query SiteLayout {
    sitelayout {
      layoutModules {
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
        ... on ModuleNavigationRecord {
          id
          navigationLinks {
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
