import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  home  from './pages/home'
import  about  from './pages/about'
import  specialev  from './pages/specialev'
import calendar  from './pages/calendar'
import  rules  from './pages/rules'
import parentArea from './pages/parentArea'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'
import  noMatch  from './pages/noMatch'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHeart,  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faHeart, )




function App() {
  return (
    <>
    <NavigationBar />
    <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/specialEv" component={specialev} />
        <Route path="/calendar" component={calendar} />
        <Route path="/rules" component={rules} />
        <Route path="/parentArea" component={parentArea} />
        <Route  component={noMatch} />

      </Switch>
    </Router>
    </Layout>
    </>
  );
}

export default App;
