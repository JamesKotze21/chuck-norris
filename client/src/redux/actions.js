import store from './store';
import { SAVE_JOKE, DELETE_JOKE} from './actionTypes';

export function saveJoke(joke) {
	store.dispatch({
		type: SAVE_JOKE,
		payload: {
			joke: joke
		}
	});
}


export function deleteJoke(id) {
    store.dispatch({
        type: DELETE_JOKE,
        payload: {id}
    });
}