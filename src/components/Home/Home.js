import React, { Component } from 'react';
import Beerlist from '../Beerlist/Beerlist';

import styles from "./Home.module.css";

class Home extends Component {
	render() {
		return (
			<main className={styles.main}>
				<Beerlist />
			</main>
		)
	}
};

export default Home;
