import React from 'react'
import {SavedJokeListItem} from '../StyledComp';

export default function JokesListItem({joke, setSelectedJoke, resetCategorySelection, isSelected}) {
    function selectJoke() {
        setSelectedJoke(joke);
        resetCategorySelection();
    }

    var selectedString = isSelected ? "disabled" : "";
    
    return (        
        <SavedJokeListItem onClick={selectJoke} className={"list-group-item list-group-item-action " + selectedString}>
            {joke.value}
        </SavedJokeListItem>
    )
}
