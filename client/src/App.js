import React, { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import Categories from "./components/category/Categories";
import Joke from "./components/joke/Joke";
import JokeList from "./components/jokeList/JokeList";

const defaultOptions: DefaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'ignore',
	}
}
const client = new ApolloClient({
	uri: "http://localhost:5000/",
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions
});

function App() {

	const [selectedCategory, setSelectedCategory] = useState();
	const [savedJokes, setSavedJokes] = useState([]);
	const [selectedJokeId, setSelectedJokeId] = useState();

	return (
		<ApolloProvider client={client}>
			<div className="container-fluid">
				<div className="row">
					
					<div className="col-xs-3">
						<Categories
							selectedCategory={selectedCategory}
							setSelectedCategory={(category) => {setSelectedCategory(category)}}
							setSelectedJokeId={(jokeId) => {setSelectedJokeId(jokeId)}}
						/>
					</div>

					<div className="col-xs-9">
						<div className="container-fluid">
							<div className="row align-items-start">
								<div className="col-xs-12">
									<Joke
										selectedCategory={selectedCategory}
										selectedJokeId={selectedJokeId}
										savedJokes={savedJokes}
										setSavedJokes={(jokes) => {setSavedJokes(jokes)}}
										setSelectedJokeId={(jokeId) => {setSelectedJokeId(jokeId)}}
									/>
								</div>
							</div>
							<div className="row align-items-end">
								<div className="col-xs-12">
									<JokeList
										selectedJokeId={selectedJokeId}
										savedJokes={savedJokes}
										setSavedJokes={(jokes) => {setSavedJokes(jokes)}}
										setSelectedJokeId={(jokeId) => {setSelectedJokeId(jokeId)}}
										setSelectedCategory={(category) => {setSelectedCategory(category)}}
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
