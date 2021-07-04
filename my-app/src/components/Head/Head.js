import React, { Component } from 'react';
import { userContext } from '../../context/userContext'
import Nav from '../Nav'
import './Head.scss';

class Head extends Component {
  render() {
    return (
      <header className="Header">
        <div className="wrapper">
          <h1>Pagina de Noticias</h1>
          <Nav/>
          <userContext.Consumer>
            {({user}) => 
            <>
            <p>User: {user.name}</p>
            </>
            }
          </userContext.Consumer>
        </div>
      </header>
    );
  }
}

export default Head;