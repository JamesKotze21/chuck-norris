import React from 'react'
import { Card, Button } from '../StyledComp';
import { deleteJoke } from '../../redux/actions';

export default function SavedJoke({ selectedJoke, resetJokeSelection }) {

    let categories = <i><p>{selectedJoke.categories.toString()}</p></i>

    return (
        <Card className="card">
            <h4 className="card-title">Joke</h4>
            <div className="card-body">
                <p className="card-text">{selectedJoke.value}</p>
                {categories}
                <Button className="btn btn-primary" onClick={() => {
                    deleteJoke(selectedJoke.id);
                    resetJokeSelection()
                }}>
                    Delete
                </Button>
            </div>
        </Card>
    )
}