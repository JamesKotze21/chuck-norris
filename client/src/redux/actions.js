import store from './Store';
import { SAVE_JOKE, DELETE_JOKE} from './ActionTypes';

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