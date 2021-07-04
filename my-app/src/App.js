import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '--'
      }
    };
  }

  login = (name) => this.setState({user: {name}});

  render() {
    const value = {
      user: this.state.user,
      loginUser: this.login
    }

    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Head/>
            <Main/>
          </userContext.Provider>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
