import React from 'react';
import ReactDOM from 'react-dom';


//class-based component for use of state
class App extends React.Component {
  constructor(props) {
    super(props);

    // ONLY TIME WE DO DIRECT ASSIGNMENT -> initializing
    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // setting state inside callback function
        this.setState({lat: position.coords.latitude});
      },
      err => console.log(err)
    );
  }

  // React says we have to define render (otherwise React throws an error)
  render() {
    //callback function to get user's location. If fails, log error

    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);