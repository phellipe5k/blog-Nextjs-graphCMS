import { gql } from "@apollo/client";

export const GET_BY_ID = gql`
    query Profile($id: ID) {
        profile(where: {
            id: $id
        }) {
            email
            githubProfileUrl
            instagramUrl
            linkedInUrl
            role
            profileImageUrl
            name
            phoneNumber
            aboutMe {
                text
            }
            twitterUrl
            projects {
            title
            website
            githubRepository
            description
            image {
                url
            }
            technologies {
                name
                slug
                knowledge
            }
            }
            technologies {
                name
                slug
                knowledge
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
            title
            website
            githubRepository
            description
            image {
                url
            }
            technologies {
                name
                slug
                knowledge
            }
            }
            technologies {
            name
            slug

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
            slug
            knowledge
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
                slug
                knowledge
            }
            }
        }
    }

`;
