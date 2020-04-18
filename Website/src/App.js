import React, { Component } from 'react';
import './App.css';
//add routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import { About } from './About';
import Contact from './Contact';
import LiveChat from './LiveChat'
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import FOne from './FOne'
import FTwo from './FTwo'
import FThree from './FThree'
import FFour from './FFour'
import FOneA from './FOneA'
import FOneB from './FOneB'
import FOneC from './FOneC'
import FTwoA from './FTwoA'
import FTwoB from './FTwoB'
import FThreeA from './FThreeA'
import FThreeB from './FThreeB'
import FFourA from './FFourA'
import FFourB from './FFourB'
// import ChatProcessing from './ChatProcessing'
// import ChatConnecting from './ChatConnecting'
// import ChatConnected from './ChatConnected'
import { Footer } from './components/Footer'
import PopoutChat from './PopOutChat';


class App extends Component {

  render() {
    return (
      <React.Fragment> {/* create a wrapper */}
        <NavigationBar />
          {/* grab router */}
          {/* 3 pages */}
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/livechat" component={LiveChat} />
                <Route path='/filterone' component={FOne} />
                <Route path='/filtertwo' component={FTwo} />
                <Route path='/filterthree' component={FThree} />
                <Route path='/filterfour' component={FFour} />
                <Route path='/filteronea' component={FOneA} />
                <Route path='/filteroneb' component={FOneB} />
                <Route path='/filteronec' component={FOneC} />
                <Route path='/filtertwoa' component={FTwoA} />
                <Route path='/filtertwob' component={FTwoB} />
                <Route path='/filterthreea' component={FThreeA} />
                <Route path='/filterthreeb' component={FThreeB} />
                <Route path='/filterfoura' component={FFourA} />
                <Route path='/filterfourb' component={FFourB} />
                <Route path='/startchat' component={PopoutChat} />
                <Route component={NoMatch} />
                {/* return 404 error page */}
              </Switch>
            </Router>
          </Layout>
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
