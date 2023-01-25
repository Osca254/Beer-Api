import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from './Beerlist.module.css';

class Beerlist extends Component {
	state = {
		query: "",
		data: [],
		filteredData: []
	};

	handleInputChange = event => {
		const query = event.target.value;

		this.setState(prevState => {
			const filteredData = prevState.data.filter(element => {
				return element.name.toLowerCase().includes(query.toLowerCase());
			});

			return {
				query,
				filteredData
			};
		});
	};

	getData = () => {
		fetch(`https://api.punkapi.com/v2/beers?brewed_after=11-2015`)
			.then(response => response.json())
			.then(data => {
				const { query } = this.state;
				const filteredData = data.filter(element => {
					return element.name.toLowerCase().includes(query.toLowerCase());
				});

				this.setState({
					data,
					filteredData
				});
			});
	};

	componentWillMount() {
		this.getData();
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<input
					className={styles.search}
					placeholder="Search by beer name"
					value={this.state.query}
					onChange={this.handleInputChange}
				/>
				<div className={styles.list}>
					{this.state.filteredData.map(beer => (
						<article key={beer.id} className={styles.beer}>
							<img className={styles.img} src={beer.image_url} alt={beer.name} />
							<h2>{beer.name}</h2>
							<h3>{beer.tagline}</h3>
							<p>{beer.description}</p>
							<Link className={styles.button} to={`${beer.id}`}>
							View details
							</Link>
							<button className={styles.button} onClick={() => this.handleDelete(beer.id)}>Delete</button>
						</article>
					))}
				</div>
			</div>
		);
	}
	
	handleDelete(id) {
		// Delete the specific beer from the data array
		const updatedData = this.state.data.filter(beer => beer.id !== id);
	
		// Update the state with the new data array
		this.setState({ data: updatedData, filteredData: updatedData });
	}
	
}

export default Beerlist;