import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


//class-based component for use of state
class App extends React.Component {
  state = {lat: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err =>  this.setState ({errorMessage: err.message})
    );
  }

  renderContent() {
    //callback function to get user's location. If fails, log error
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please accept location request" />;
  }


  // React says we have to define render (otherwise React throws an error)
  render() {
    return (
    <div className="border red">
      {this.renderContent()}
    </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);