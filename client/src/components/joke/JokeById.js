import React from 'react'
import { Card, Button} from '../StyledComp';

export default function JokeById({selectedJokeId, savedJokes, setSavedJokes, setSelectedJokeId}) {

    function removeJoke() {
        let selectedJokeIndex = [...savedJokes].findIndex((joke) => {return joke.id === selectedJokeId});
        let newList = [...savedJokes].filter((joke) => {return joke.id !== selectedJokeId})
        let newId = null;

        if (newList && newList.length > 0) {
            newId = newList[newList[selectedJokeIndex] ? selectedJokeIndex : selectedJokeIndex-1].id
        }

        setSelectedJokeId(newId);
        setSavedJokes(newList);
    }

    const selectedJoke = savedJokes.find((joke) => {return joke.id === selectedJokeId});

    return (
        <Card className="card">
            <h4 className="card-title">Joke</h4>
            <div className="card-body">
                <p className="card-text">{selectedJoke.value}</p>
                <i><p>{selectedJoke.categories.toString()}</p></i>
                <Button className="btn btn-primary" onClick={removeJoke}>Delete</Button>
            </div>
        </Card>
    )
}
