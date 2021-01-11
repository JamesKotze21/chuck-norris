import React from 'react'
import JokeById from './JokeById';
import RandomJoke from './RandomJoke';
import JokeByCategory from './JokeByCategory';
import NoJoke from './NoJoke';

export default function Joke({selectedJokeId, selectedCategory, savedJokes, setSavedJokes, setSelectedJokeId}) {
    if (selectedJokeId) {
        return <JokeById
            selectedJokeId={selectedJokeId}
            savedJokes={savedJokes}
            setSavedJokes={setSavedJokes}
            setSelectedJokeId={setSelectedJokeId}
        />
    }

    if (selectedCategory === "random") {
        return <RandomJoke
            savedJokes={savedJokes}
            setSavedJokes={setSavedJokes}
        />
    }

    if (selectedCategory) {
        return <JokeByCategory
            selectedCategory={selectedCategory}
            savedJokes={savedJokes}
            setSavedJokes={setSavedJokes}
        />
    }

    return <NoJoke/>
}
