import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      picture: '',
      article: ''
    };
  }

  handleChange = (e) => {
    this.setState({ 
      title: e.target.value,
      picture: e.target.value,
      article: e.target.value
    });
    // this.setState({ picture: e.target.value});
    // this.setState({ article: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="Form">
        <form className="add-item-form" onSubmit={this.handleSubmit}>
          <input type="text" id="title" name="title" placeholder="Titulo" onChange={this.handleChange}/>

          <input type="text" id="picture" name="picture" placeholder="Imagen"/>

          <textarea id="article" name="article" rows="10" cols="40" placeholder="Escribe aqui..."/>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Form;