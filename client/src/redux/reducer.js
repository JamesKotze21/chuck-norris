import * as actions from './ActionTypes';

export default function Reducer(state = [], action) {
    switch (action.type) {
        case actions.SAVE_JOKE:
            return saveJoke(state, action);

        case actions.DELETE_JOKE:
            return deleteSelectedJoke(state, action)

        default:
            return state;
    }
}

function saveJoke(state, action) {
    if (!state.some((element) => element.id === action.payload.joke.id)) {
        return[...state, action.payload.joke];
    }
    return state;
}

function deleteSelectedJoke(state, action) {
    return [...state].filter((joke) => {return joke.id !== action.payload.id})
}