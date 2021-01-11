import React from 'react'

export default function Category({category, setSelectedCategory, isSelected, setSelectedJokeId}) {
    var selectedString = isSelected ? "active" : "";
    return (        
        <button onClick={() => {setSelectedCategory(category); setSelectedJokeId()}}
            className={"list-group-item list-group-item-action " + selectedString}>{category}</button>
    )
}