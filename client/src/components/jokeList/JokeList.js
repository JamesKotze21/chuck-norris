import React from 'react'
import JokesListItem from './JokesListItem'

export default function JokeList({selectedJokeId, savedJokes, setSelectedJokeId, setSelectedCategory}) {
	return (
		<div className="list-group">
			{
				savedJokes.map((joke) => (
					<JokesListItem
                        key={joke.id}
						joke={joke}
						setSelectedJokeId={setSelectedJokeId}
						setSelectedCategory={setSelectedCategory}
						isSelected={selectedJokeId===joke.id}
					/>
				))
			}
		</div>
    )
}
