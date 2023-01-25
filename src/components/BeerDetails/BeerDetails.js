import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./BeerDetails.module.css";

export default function BeerDetails(props) {
  const initialBeerState = {
    beer: {},
    loading: true
  };

  const [beer, setBeer] = useState(initialBeerState);

  useEffect(() => {
    const getBeer = async () => {
      const { data } = await axios(
        `https://api.punkapi.com/v2/beers/${props.match.params.id}`
      );
      console.log(data);
      setBeer(data);
    };

    getBeer();
  }, [props.match.params.id]);

  return beer.loading ? (
    <div>Loading...</div>
  ) : (
    <main className={styles.details}>
      <img
        className={styles.img}
        src={beer[0].image_url}
        alt={beer[0].name}
      />
      <div className={styles.info}>
        <h2>{beer[0].name}</h2>
        <h3>{beer[0].tagline}</h3>
        <p>{beer[0].description}</p>
        <ul>
          <li>ABV: {beer[0].abv}%</li>
          <li>First brewed: {beer[0].first_brewed}</li>
        </ul>
        <p>
          Pairs best with:<br />
          {beer[0].food_pairing[0]}
          <br />
          {beer[0].food_pairing[1]}
          <br />
          {beer[0].food_pairing[2]}
        </p>
          <Link to="/" className={styles.button}>Back to results</Link>
      </div>
    </main>
  );
}