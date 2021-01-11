import React from 'react'
import Category from "./Category";
import { useQuery, gql } from '@apollo/client';

export default function Categories({selectedCategory, setSelectedCategory, setSelectedJokeId}) {
	const CATEGORIES_QUERY = gql`
		query CategoriesQuery {
			categories
		}
	`;

	const { loading, error, data } = useQuery(CATEGORIES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	
	return (
		<div className="list-group">
			{
				["random", ...data.categories].map((category) => (
					<Category
						key={category}
						category={category}
						setSelectedCategory={setSelectedCategory}
						isSelected={category===selectedCategory}
						setSelectedJokeId={setSelectedJokeId}
					/>
				))
			}
		</div>
	)
}
