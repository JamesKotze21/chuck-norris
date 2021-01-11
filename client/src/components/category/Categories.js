import React from 'react'
import Category from './Category';
import { useQuery } from '@apollo/client';
import { CATEGORIES_QUERY } from '../../queries/CategoriesQueries'

export default function Categories({selectedCategory, setSelectedCategory, resetJokeSelection}) {

	const { loading, error, data } = useQuery(CATEGORIES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) console.error("Could not fetch joke categories");
	
	return (
		<div className="list-group">
			{
				// map all categories from API, add "random" as an extra option
				["random", ...data.categories].map((category) => (
					<Category
						key={category}
						category={category}
						setSelectedCategory={setSelectedCategory}
						isSelected={category===selectedCategory}
						resetJokeSelection={resetJokeSelection}
					/>
				))
			}
		</div>
	)
}
