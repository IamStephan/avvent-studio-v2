import React, { Component, Fragment } from 'react';
import { Provider as StoreProvider } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import ScrollToTop from './components/scrollToTop/scrollToTop';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import AppStore from './stores/appStore'

const stores = {
  AppStore
}

const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: () => (<div>Loading</div>)
})


class App extends Component {
  render() {
    return (
      <Fragment>
        <StoreProvider {...stores}>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route component={Home} exact path='/' />
          </Switch>
          <Footer />
        </Router>
      </StoreProvider>
      </Fragment>
    )
  }
}

export default App;
