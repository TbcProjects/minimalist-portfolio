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
        ... on SectionContactFormRecord {
          id
          _modelApiKey
          heading
          contactForm {
            formElements {
              placeholder
              label
              error
              inputType
              _modelApiKey
            }
            _modelApiKey
            submitButtonText
          }
        }
      }
    }
  }
`;
