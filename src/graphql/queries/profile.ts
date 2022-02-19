import { gql } from "@apollo/client";

export const GET_BY_ID = gql`
    query Profile($id: String) {
        profile(where: {id: $id}) {
            email
            githubProfileUrl
            instagramUrl
            linkedInUrl
            name
            phoneNumber
            twitterUrl
            projects {
            githubRepository
            description
            image {
                url
            }
            technologies {
                name
                iconSvg
                documentationUrl
            }
            }
            technologies {
            name
            iconSvg
            documentationUrl
            }
        }
    }

`;

export const GET_ALL = gql`
    query  {
        profiles {
            email
            githubProfileUrl
            instagramUrl
            linkedInUrl
            name
            phoneNumber
            twitterUrl
            projects {
            githubRepository
            description
            image {
                url
            }
            technologies {
                name
                iconSvg
                documentationUrl
            }
            }
            technologies {
            name
            iconSvg
            documentationUrl
            }
        }
    }
`;

export const GET_SHORT_INFO_BY_ID = gql`
    query Profile($id: String) {
        profile(where: {id: $id}) {
            email
            githubProfileUrl
            instagramUrl
            linkedInUrl
            name
            phoneNumber
            twitterUrl
            technologies {
            name
            iconSvg
            documentationUrl
            }
        }
    }

`;

export const GET_PROFILE_PROJECTS_BY_ID = gql`
    query Profile($id: String) {
        profile(where: {id: $id}) {
            projects {
            githubRepository
            description
            image {
                url
            }
            technologies {
                name
                iconSvg
                documentationUrl
            }
            }
        }
    }

`;
