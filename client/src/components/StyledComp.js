import styled from 'styled-components';

export const Card = styled.div`
    border: 2px solid #e95420;
    border-radius: 1rem;
    padding: 1rem 2rem;
`
export const Button = styled.button`
    margin-left: 1rem;
    margin-right: 1rem;
`
export const SavedJokeListItem = styled.button`
    display: block;
    white-space: nowrap; /* forces text to single line */
    overflow: hidden;
    text-overflow: ellipsis;
`