import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book';

class App extends Component {

  state = {
    books : ""
  }

  componentDidMount = () => {
    this.callApi()
    .then(res => this.setState({books: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/books/');
    const body = await response.json();
    return body;
  }
  render() {
    return (
      <div className="App">
        {
          this.state.books ? this.state.books.map(c => <Book key={c.id} id={c.id} image={c.image} title={c.title} author={c.author} published_date={c.published_date}/>) : ""
        }
      </div>
    );
  }
}

export default App;
