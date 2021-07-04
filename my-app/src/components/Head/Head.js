import React, { Component } from 'react';
import Nav from '../Nav'
import './Head.scss';

class Head extends Component {
  
  render() {
    return (
      <header className="Header">
        <div className="wrapper">
          <h1>Pagina de Noticias</h1>
          <Nav/>
        </div>
      </header>
    );
  }
}

export default Head;