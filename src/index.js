import React from 'react';
import ReactDOM from 'react-dom';


//class-based component for use of state
class App extends React.Component {
  constructor(props) {
    super(props);

    // ONLY TIME WE DO DIRECT ASSIGNMENT -> initializing
    this.state = {
      lat: null,
      errorMessage : ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // setting state inside callback function
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState ({errorMessage: err.message})
      }
    );
  }

  componentDidMount() {
    console.log('My component was rendered to the screen');
  }

  // React says we have to define render (otherwise React throws an error)
  render() {
    //callback function to get user's location. If fails, log error
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Erorr: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);