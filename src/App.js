import React, { Component } from "react";

class App extends Component {
  state = { state: '',
    year: '',
    isValid: false
  }

  isValidHome = (home) => {
    if (isNaN(home.year)) {
      return false;
    }

    if (home.year.length !== 2 && home.year.length !== 4) {
      return false;
    }

    switch (home.state.toLowerCase()) {
      case "new york":
        if (home.year.length === 2) {
          return !(parseInt(home.year) < 97 && parseInt(home.year) > 17)
        } else if (home.year.length === 4) {
          return parseInt(home.year) > 1997
        }
        return false;
        break;
      case "california":
        if (home.year.length === 2) {
          return parseInt(home.year) > 98
        } else if (home.year.length === 4) {
          return parseInt(home.year) > 1998 && parseInt(home.year) < 2006
        }
        return false;
        break;
        default:
            return false;
            break;
    }
  }

  render () {
    return (
        <div className="App">
          <h2>Home Approval System</h2>
          <h3>Current status: {this.state.isValid ? "Approved Home" : "Unapproved"}</h3>
          <span>Please enter your home information below.</span>
          <br />
          <label>State:</label>
          <input type="text" name="state" onChange={(event) => this.setState({ state: event.target.value })} />
          <br />
          <label>Year:</label>
          <input type="text" name="year" onChange={(event) => this.setState({year: event.target.value })} />
          <br />
          <button onClick={() => this.setState({ isValid: this.isValidHome({ state: this.state.state, year: this.state.year }) })}>Validate</button>
        </div>
    );
  }
}

export default App;
