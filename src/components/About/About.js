import React, { Component } from 'react';

import styles from './About.module.css';

class About extends Component {
	render() {
		return (
      <main className={styles.about}>
        <h2>About</h2>
        <h3>Significance</h3>
        <p>
          In this project, we are showcasing our skills so
          far in react in 
          bulding applications that consume the public API so as to display its contents on page.
      
        
        </p>
        <h3>Tech stack</h3>
        <ul>
          <li>CSS Modules</li>
          <li>Jest for running tests</li>
          <li>Data from Punk API</li>
          <li>Created using the Create React App</li>
        </ul>
        <h3>Who built it?</h3>
        <p>
          The project is developed by:
          <ol>
            <li>Josphat Kiplimo </li>
            <li>Angela Owuor </li>
            <li>Francis Kinuthia</li>
          </ol>
        </p>
      </main>
    );
	}
};

export default About;
