import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: 'Escribe tu noticia...'
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="Form">
        <form className="add-item-form" onSubmit={this.handleSubmit}>
          <input type="text" id="name" name="name" placeholder="Autor"/>

          <input type="text" id="title" name="title" placeholder="Titulo"/>

          <textarea rows="10" cols="40" placeholder="Escribe aqui..."/>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Form;