import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Card, Button } from '../StyledComp';
import LoadingJoke from './LoadingJoke';

export default function RandomJoke({savedJokes, setSavedJokes}) {
    
	const JOKE_QUERY = gql`
		query RandomJokeQuery {
            anyJoke {
                id,
                value,
                categories
            }
		}
    `;

	const { loading, error, data, refetch} = useQuery(JOKE_QUERY);

	if (loading) return <LoadingJoke/>;
	if (error) return <p>Error :(</p>;

    let {value, categories, id} = data.anyJoke; 
    let categoriesText = categories ? <i><p>{categories.toString()}</p></i> : "";

    function saveJoke() {
        if (!savedJokes.some((joke) => joke.id === id)) setSavedJokes([...savedJokes, data.anyJoke]);
    }

    return (
        <Card className="card">
            <h4 className="card-title">Joke</h4>
            <div className="card-body">
                <p className="card-text">{value}</p>
                {categoriesText}
                <Button className="btn btn-success" onClick={saveJoke}>Save</Button>
                <Button className="btn btn-primary" onClick={() => {refetch()}}>New Joke</Button>
            </div>
        </Card>
    )
}
