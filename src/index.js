import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import UserWidget from './userWidget';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className="feed">
      <Post username="userka1991" imageSrc="/img/gradient.jpg" postDescr="mood"/>
      <Post username="marek_michal" imageSrc="/img/gradient.jpg" postDescr="Jutro o 17.00 zapraszam na profil facebookowy Centrum Stosunków Międzynarodowych, gdzie o Białorusi będę miał przyjemność dyskutować (w tym prawdziwym tego słowa znaczeniu) z Michał Potocki. Naszą rozmowę prowadzić będzie Małgorzata Bonikowskae Małgorzata Bonikowskae Małgorzata Bonikowskae Małgorzata Bonikowska"/>
      <Post username="futureboi6969" imageSrc="/img/gradient.jpg" postDescr="Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync."/>
    </div>
    <UserWidget/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
