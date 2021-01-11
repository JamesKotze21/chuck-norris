import React from 'react'
import SavedJoke from './SavedJoke';
import RandomJoke from './RandomJoke';
import NoJoke from './NoJoke';
import { buildJokeQuery } from '../../queries/JokeQueries';

export default function JokeComponent({selectedJoke, selectedCategory, resetJokeSelection}) {
    // joke selected from saved jokes list
    if (selectedJoke) {
        return <SavedJoke
            selectedJoke={selectedJoke}
            resetJokeSelection={resetJokeSelection}
        />
    }

    // random joke from API
    if (selectedCategory) {
        return <RandomJoke
            query={buildJokeQuery(selectedCategory)}
        />
    }

    return <NoJoke/>
}


