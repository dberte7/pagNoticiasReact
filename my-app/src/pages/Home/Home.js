import React, { Component } from 'react';
import { userContext } from '../../context/userContext';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name: this.state.name
    };

    this.setState({user})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="user" placeholder="Introduce usuario..." onChange={this.handleChange} />
          <Link to='/form'>
            <userContext.Consumer>
              {({loginUser}) => <button type="submit" onClick={()=>loginUser(this.state.name)}>Login</button>}
            </userContext.Consumer>
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;