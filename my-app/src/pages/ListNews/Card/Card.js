import React from 'react';
import './Card.scss';

function Card(props){

    return (
      <>
        <h2>{props.article.title}</h2>
        <img src={props.article.urlToImage} alt="News" />
        <p>{props.article.description}</p>
        <button onClick={props.remove}>Borrar Noticia</button>
      </>
    );
  }

export default Card;