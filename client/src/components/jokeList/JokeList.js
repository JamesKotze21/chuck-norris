import React, { Component } from 'react'
import JokesListItem from './JokesListItem'
import {connect} from 'react-redux'

class JokeList extends Component {
	render() {
		return (
			<div className="list-group">
				{
					this.props.savedJokes.map((joke) => (
						<JokesListItem
							key={joke.id}
							joke={joke}
							setSelectedJoke={this.props.setSelectedJoke}
							resetCategorySelection={this.props.resetCategorySelection}
							isSelected={this.props.selectedJoke && this.props.selectedJoke.id === joke.id}
						/>
					))
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		savedJokes: state
	}
}

export default connect(mapStateToProps)(JokeList);
