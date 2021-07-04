import React from 'react';
import './Card.scss';

function Card(props){

    return (
      <>
        <h3>Titulo: {props.article.title}</h3>
      </>
    );
  }

export default Card;