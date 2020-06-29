import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      nativeModule: null,
    };

    this.showGreet = this.showGreet.bind(this);
  }

  componentDidMount() {
    import("../native/build").then(native => {
      this.setState({
        nativeModule: native,
      });
    });
  }

  showGreet() {
    const {
      nativeModule,
    } = this.state;

    if (!nativeModule) {
      alert("Please try after some time...");
    } else {
      nativeModule.greet("Human");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          WebAssembly with Rust and React (Using create-react-app)
          <button onClick={this.showGreet}>
            Show greet from Rust
          </button>
        </header>
      </div>
    );
  }
}

export default App;
