import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer';

class App extends Component {

  state = {
    customers : ""
  }

  componentDidMount = () => {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render() {
    return (
      <div className="App">
        {
          this.state.customers ? this.state.customers.map(c => <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/>) : ""
        }
      </div>
    );
  }
}

export default App;
