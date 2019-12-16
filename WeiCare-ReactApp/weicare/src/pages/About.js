import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'; 

class About extends Component {

  render() {

    return (
      <Paper style={{padding: 50}}>
      <div>
        <h3>Enriched programs:</h3>
        <ul>
          <li>MultiLanguage ( English, French)</li>
          <li>Reading Cub </li>
          <li>Emotion Intelligences</li>
        </ul>
        <h3>SMART Awakening courses:</h3>
        <ul>
          <li>Art SMART</li>
          <li>Musique SMART</li>
          <li>Mouvement SMART (Zumba, Sportsball)</li>
          <li>Science SMART</li>
        </ul>
        <p>
          Offer your children a safe, creative and warm environment which favors
          their growth, self confidence and development, we have a team very
          welcoming;
        </p>
        <p>
          Bilingual educational program suitable to daycare and pre-school
          learning (recognized by the Ministry of Familly and Seniors);{" "}
        </p>
        <p>
          We have an educational advisor to structure the program for
          Pedagogical{" "}
        </p>
        <p>
          WOW ! An outdoor playground + An indoor Gym * Special indoor and
          outdoor activities;
        </p>
        <p>Meals high quality (warm lunch and healthy snacks);</p>
        <p>
          Located near Bois-Franc and municipal parks, offering swiming in the
          summer;
        </p>
        <p>Lots of parking places</p>
      </div>
      </Paper>
    );
  }
}


export default About;
