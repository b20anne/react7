import React from "react";
import './App.css';
import QuoteCard from "./Components/QuoteCard";
import axios from "axios";


const Simpson = {
  quote:"I believe the children are the future... Unless we stop them now!",
  character:"Homer Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: Simpson
    };
    this.getSimpsonQuote = this.getSimpsonQuote.bind(this);
  }

  getSimpsonQuote() {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=6")
      .then(response => response.data)
      .then(data => { 
        this.setState({quote: data[0],
         });
      });
  }

  render() {
    return (
      <div className="App">
          <QuoteCard quote={this.state.quote} />
          <button type="button" onClick={this.getSimpsonQuote}>Get SimpsonQuote</button>
      </div>
    );
  }
}

export default App;
