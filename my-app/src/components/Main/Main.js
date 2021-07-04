import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home'
import Form from '../../pages/Form'
import ListNews from '../../pages/ListNews'
import './Main.scss';

class Main extends Component {
 
  render() {
    return (
      <main className='Main'>
        <div className="wrapper">
          <Switch>
              <Route path="/home" component={Home} exact />
              <Route path="/form" component={Form} />
              <Route path="/list" component={ListNews} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;