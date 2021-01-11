import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Card, Button } from '../StyledComp';
import LoadingJoke from './LoadingJoke';

export default function JokeByCategory({selectedCategory, savedJokes, setSavedJokes}) {
    const JOKE_QUERY = gql`
		query CategoryJokeQuery($selectedCategory: String) {
            anyJoke(category: $selectedCategory) {
                id,
                value,
                categories
            }
		}
    `;

	const {loading, error, data, refetch} = useQuery(JOKE_QUERY, {variables: {selectedCategory}});

	if (loading) return <LoadingJoke/>;
	if (error) return <p>Error :(</p>;

    let {value, categories, id} = data.anyJoke; 
    
    function saveJoke() {
        if (!savedJokes.some((joke) => joke.id === id)) setSavedJokes([...savedJokes, data.anyJoke]);
    }

    return (
        <Card className="card">
            <h4 className="card-title">Joke</h4>
            <div className="card-body">
                <p className="card-text">{value}</p>
                <i><p>{categories.toString()}</p></i>
                <Button className="btn btn-success" onClick={saveJoke}>Save</Button>
                <Button className="btn btn-primary" onClick={() => {refetch()}}>New Joke</Button>
            </div>
        </Card>
    )
}
