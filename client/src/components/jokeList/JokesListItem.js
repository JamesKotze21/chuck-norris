import React from 'react'
import {SavedJokeListItem} from '../StyledComp';

export default function JokesListItem({joke, setSelectedJokeId, setSelectedCategory, isSelected}) {
    var selectedString = isSelected ? "disabled" : "";
    return (        
        <SavedJokeListItem onClick={()=>{setSelectedJokeId(joke.id); setSelectedCategory()}} className={"list-group-item list-group-item-action " + selectedString}>
            {joke.value}
        </SavedJokeListItem>
    )
}
