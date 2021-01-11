import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Categories from './components/category/Categories';
import JokeComponent from './components/joke/JokeComponent';
import JokeList from './components/jokeList/JokeList';
import {saveJoke, deleteSelectedJoke} from './utils/JokePersistanceUtils'

const client = new ApolloClient({
	uri: "http://localhost:5000/",
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		}
	}
});

function App() {

	const [selectedCategory, setSelectedCategory] = useState();
	const [savedJokes, setSavedJokes] = useState([]);
	const [selectedJoke, setSelectedJoke] = useState();

	return (
		<ApolloProvider client={client}>
			<div className="container-fluid">
				<div className="row">
					
					<div className="col-xs-3">
						<Categories
							selectedCategory={selectedCategory}
							setSelectedCategory={(category) => {setSelectedCategory(category)}}
							resetJokeSelection={() => {setSelectedJoke()}}
						/>
					</div>

					<div className="col-xs-9">
						<div className="container-fluid">
							<div className="row align-items-start">
								<div className="col-xs-12">
									<JokeComponent
										selectedCategory={selectedCategory}
										selectedJoke={selectedJoke}
										saveJoke={(newJoke) => {saveJoke(savedJokes, setSavedJokes, newJoke)}}
										deleteJoke={() => {deleteSelectedJoke(savedJokes, setSavedJokes, selectedJoke, setSelectedJoke)}}
									/>
								</div>
							</div>
							<div className="row align-items-end">
								<div className="col-xs-12">
									<JokeList
										selectedJoke={selectedJoke}
										savedJokes={savedJokes}
										setSelectedJoke={(joke) => {setSelectedJoke(joke)}}
										resetCategorySelection={() => {setSelectedCategory()}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ApolloProvider>
	);
}

export default App;
