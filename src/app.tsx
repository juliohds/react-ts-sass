import * as React from "react";
import "./app.scss";
import logo from "./logo.svg";
import { Auth } from "aws-amplify";

class App extends React.Component {

  public async onSubmit() {

    const data = await Auth.signIn({
      password: "teste@123",
      username: "456e972da800ba06e8a22bc8a9910d4e"
    });
    console.log(data);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.onSubmit}>go</button>
      </div>
    );
  }
}

export default App;
