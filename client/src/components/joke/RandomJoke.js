import React from 'react'
import { useQuery } from '@apollo/client';
import { Card, Button } from '../StyledComp';
import LoadingJoke from './LoadingJoke';
import Joke from '../../models/Joke';
import { saveJoke } from '../../redux/actions';

export default function RandomJoke({query}) {
    
	const {loading, error, data, refetch} = useQuery(query.query, query.options);

	if (loading) return <LoadingJoke/>;
    if (error) return <p>Could not fetch a Joke</p>;

    let {value, categories} = data.anyJoke; 
    let categoriesText = categories ? <i><p>{categories.toString()}</p></i> : "";

    return (
        <Card className="card">
            <h4 className="card-title">Joke</h4>
            <div className="card-body">
                <p className="card-text">{value}</p>
                {categoriesText}
                <Button className="btn btn-success" onClick={() => {saveJoke(new Joke(data.anyJoke.id, data.anyJoke.value, data.anyJoke.categories))}}>Save</Button>
                <Button className="btn btn-primary" onClick={() => {refetch()}}>New Joke</Button>
            </div>
        </Card>
    )
}