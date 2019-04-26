import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Result from './Result';

class App extends Component {
  state = {
    displayForm: true,
    obj: null,
  }

  withdrawInformation = (obj) => {
    this.setState({
      displayForm: false,
      obj
    })

    console.log(obj);
    console.log('OK - dziala')
  }

  returnForm = () => {
    this.setState({
      displayForm: true,
      obj: null,
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        {this.state.displayForm ?
          <Form
            withdrawInformation={this.withdrawInformation}
          /> :
          <Result
            returnForm={this.returnForm}
            obj={this.state.obj}
          />}
      </div>
    );
  }
}

export default App;