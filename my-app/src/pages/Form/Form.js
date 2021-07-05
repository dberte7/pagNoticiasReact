import React, { Component } from 'react';
import axios from "axios";
import './Form.scss';
const apiKey = process.env.REACT_APP_API_KEY;

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
    this.setState({ title: e.target.value});
    this.setState({ picture: e.target.value});
    this.setState({ article: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const news = {
      title: this.state.title,
      picture: this.state.picture,
      article: this.state.article
    }

    let res = await axios.post(`https://newsapi.org/v2/top-headlines?country=ve&apiKey=${apiKey}`, { news })
    this.setState({register: res.data})

  }

  render() {
    return (
      <div className="Form">
        <form className="add-item-form" onSubmit={this.handleSubmit}>
          <input type="text" id="title" name="title" placeholder="Titulo" onChange={this.handleChange}/>

          <input type="text" id="picture" name="picture" placeholder="Imagen" onChange={this.handleChange}/>

          <textarea id="article" name="article" rows="10" cols="40" placeholder="Escribe aqui..." onChange={this.handleChange}/>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Form;