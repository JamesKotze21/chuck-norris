import React from 'react'
import { useQuery } from '@apollo/client';
import { Card, Button } from '../StyledComp';
import LoadingJoke from './LoadingJoke';
import Joke from '../../models/Joke';

export default function RandomJoke({saveJoke, query}) {
    
	const {loading, error, data, refetch} = useQuery(query.query, query.options);

	if (loading) return <LoadingJoke/>;
	if (error) console.error("Could not fetch a Joke");

    let {value, categories} = data.anyJoke; 
    let categoriesText = categories ? <i><p>{categories.toString()}</p></i> : "";

    return (
        <Card className="card">
            <h4 className="card-title">Joke</h4>
            <div className="card-body">
                <p className="card-text">{value}</p>
                {categoriesText}
                <Button className="btn btn-success" onClick={() => {saveJoke(new Joke(data.anyJoke))}}>Save</Button>
                <Button className="btn btn-primary" onClick={() => {refetch()}}>New Joke</Button>
            </div>
        </Card>
    )
}
