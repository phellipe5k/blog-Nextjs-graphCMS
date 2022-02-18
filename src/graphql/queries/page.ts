import { gql } from "@apollo/client";

export const GET_PAGE_BY_SLUG = gql`
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
