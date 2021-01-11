import React from 'react'

export default function Category({category, setSelectedCategory, isSelected, resetJokeSelection}) {
    var selectedString = isSelected ? "active" : "";
    return (        
        <button onClick={() => {setSelectedCategory(category); resetJokeSelection()}}
            className={"list-group-item list-group-item-action " + selectedString}>{category}</button>
    )
}