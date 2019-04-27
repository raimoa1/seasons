import React from 'react';
import ReactDOM from 'react-dom';


//class-based component for use of state
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {lat: null};
  }

  // React says we have to define render (otherwise React throws an error)
  render() {
    //callback function to get user's location. If fails, log error
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude:</div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);