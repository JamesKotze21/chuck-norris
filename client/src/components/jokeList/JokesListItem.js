import React from 'react'
import {SavedJokeListItem} from '../StyledComp';

export default function JokesListItem({joke, setSelectedJoke, resetCategorySelection, isSelected}) {
    var selectedString = isSelected ? "disabled" : "";
    
    return (        
        <SavedJokeListItem onClick={() => {
            setSelectedJoke(joke);
            resetCategorySelection();
        }}
        className={"list-group-item list-group-item-action " + selectedString}>
            {joke.value}
        </SavedJokeListItem>
    )
}
