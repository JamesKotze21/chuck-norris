import { gql } from '@apollo/client';

export const RANDOM_JOKE_QUERY = gql`
    query RandomJokeQuery {
        anyJoke {
            id,
            value,
            categories
        }
    }
`;

export const CATEGORY_JOKE_QUERY = gql`
    query CategoryJokeQuery($category: String) {
        anyJoke(category: $category) {
            id,
            value,
            categories
        }
    }
`;

export const buildJokeQuery = (category) => {
    if (category === "random") {
        return {
            query: RANDOM_JOKE_QUERY,
            options: null
        };
    }

    return {
        query: CATEGORY_JOKE_QUERY,
        options: {variables: {category}}
    }
}