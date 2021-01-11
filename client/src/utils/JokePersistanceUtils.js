import Joke from "../models/Joke";

export const saveJoke = (savedJokes, setSavedJokes, newJoke) => {
    // add new joke (no duplicates)
    if (!savedJokes.some((joke) => joke.id === newJoke.id)) {
        setSavedJokes([...savedJokes, new Joke(newJoke)]);
    }
}

export const deleteSelectedJoke = (savedJokes, setSavedJokes, selectedJoke, setSelectedJoke) => {
    let selectedJokeIndex = [...savedJokes].findIndex((joke) => {return joke.id === selectedJoke.id});
    let newList = [...savedJokes].filter((joke) => {return joke.id !== selectedJoke.id})

    setSelectedJoke(nextJokeSelection(newList, selectedJokeIndex));
    setSavedJokes(newList);
}

function nextJokeSelection(newList, selectedJokeIndex) {
    if (newList && newList.length > 0) {
        let nextIndex = newList[selectedJokeIndex] ? selectedJokeIndex : selectedJokeIndex-1;
        return newList[nextIndex]
    }
    return null;
}