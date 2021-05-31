import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './componants/Header';
import Main from './componants/Main';
import Favirot from './componants/Favirot';


export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/favorit">
              <Favirot />

            </Route>

          </Switch>

        </BrowserRouter>

      </>
    )
  }
}

export default App

