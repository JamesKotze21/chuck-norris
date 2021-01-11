import React from 'react'
import JokesListItem from './JokesListItem'

export default function JokeList({selectedJoke, savedJokes, setSelectedJoke, resetCategorySelection}) {

	return (
		<div className="list-group">
			{
				savedJokes.map((joke) => (
					<JokesListItem
                        key={joke.id}
						joke={joke}
						setSelectedJoke={setSelectedJoke}
						resetCategorySelection={resetCategorySelection}
						isSelected={selectedJoke && selectedJoke.id === joke.id}
					/>
				))
			}
		</div>
    )
}
