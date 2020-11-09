import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';
import './App.css';

class App extends Component {
  state = {
    newsItems: [],
  }

  componentDidMount() {
    fetch('http://localhost:5000/live')
    .then(response => response.json())
    .then(articles => {
      this.setState({
        newsItems: [...this.state.news, ...articles],
      });
    }).catch(error => console.log(error));

    const pusher = new Pusher
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;