import React from 'react';
import SignIn from './SignIn';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};

    // refrence to dropdown
    // this.dropdown = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <SignIn />
      </div>
    );
  }
}

export default App;
