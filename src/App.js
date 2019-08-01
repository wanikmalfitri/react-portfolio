import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Blog } from './Blog';
import { Error404 } from './Error404';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route component={Error404} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
