import { gql } from "@apollo/client";

export const GET_BY_SLUG = gql`
    query Page($slug: String) {
        page (where: {
            slug: $slug
        }) {
            title
            subtitle
            logo {
                url
            }
        }
    }
`;

export const GET_ALL = gql`
    query {
        pages {
            title
            subtitle
            logo {
                url
            }
        }
    }
`;
