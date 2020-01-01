import React, { Component, Fragment } from 'react';
import { Provider as StoreProvider } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import ScrollToTop from './components/scrollToTop/scrollToTop';
import Loader from './components/pageLoader/loader';
import Sidebar from './components/sidebar/sidebar';
import Notifications from './components/notifications/notifications';

import AppStore from './stores/appStore'
import PortfolioStore from './stores/portfolioStore'
import NotificationStore from './stores/notificationStore';

const stores = {
  AppStore,
  PortfolioStore,
  NotificationStore
}

const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: () => <Loader />
})

const About = Loadable({
  loader: () => import('./pages/about/about'),
  loading: () => <Loader />
})

const Contact = Loadable({
  loader: () => import('./pages/contact/contact'),
  loading: () => <Loader />
})

const NotFound = Loadable({
  loader: () => import('./pages/notFound/notFound'),
  loading: () => <Loader />
})

class App extends Component {
  render() {
    return (
      <Fragment>
        <StoreProvider {...stores}>
        <Router>
          <ScrollToTop />
          <Sidebar />
          <Notifications />
          <Switch>
            <Route component={Home} exact path='/' />
            <Route component={About} exact path='/about' />
            <Route component={Contact} exact path='/contact' />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </StoreProvider>
      </Fragment>
    )
  }
}

export default App;
