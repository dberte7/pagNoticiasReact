import React, { Component } from "react";
import axios from "axios";
import "./ListNews.scss";
import Card from "./Card";
const apiKey = process.env.REACT_APP_API_KEY;

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  async componentDidMount() {
    const URL = `https://newsapi.org/v2/top-headlines?country=ve&apiKey=${apiKey}`;
    let res = await axios.get(URL);
    let data = res.data;
    await this.setState({ news: res.data.articles.slice(0, 5) });
    console.log(data);
  }

  removeArticle = (i) => {
    this.setState({ news: this.state.news.filter((_, j) => i !== j)});
  };

  paintArticle = () =>
    this.state.news.map((article, i) => (
      <Card article={article} key={i} remove={() => this.removeArticle(i)} />
    ));

  render() {
    return <section>{this.paintArticle()}</section>;
  }
}

export default ListNews;
