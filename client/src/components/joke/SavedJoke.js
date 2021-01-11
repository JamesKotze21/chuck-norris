import React from 'react'
import { Card, Button} from '../StyledComp';

export default function SavedJoke({selectedJoke, deleteJoke}) {

    let categories = <i><p>{selectedJoke.categories.toString()}</p></i>
    
    return (
        <Card className="card">
            <h4 className="card-title">Joke</h4>
            <div className="card-body">
                <p className="card-text">{selectedJoke.value}</p>
                {categories}
                <Button className="btn btn-primary" onClick={deleteJoke}>Delete</Button>
            </div>
        </Card>
    )
}
