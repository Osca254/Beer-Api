import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>React Beer Garden App</h1>
        <nav>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.link} to="/addform">AddForm</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
