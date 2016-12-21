// AppContainer.js: the "dumb" high level component of motus

const classnames = require('classnames');
import React from 'react';

import { connect } from 'react-redux';

import AppState from '../constants/AppState';

// import AnalyticsScreen from '../components/AnalyticsScreen';
// import TopNavbar from '../components/Navbar/TopNavbar';

// import SetupScreen from '../components/SetupScreen';
import DBConnectScreen from '../components/connect/DBConnectScreen';
import QueryScreen from '../components/query/QueryScreen';

class App extends React.Component {
  static propTypes = {
    appState: React.PropTypes.string.isRequired
  }


  getScreenToRender() {
    const {appState} = this.props;

    switch (appState) {
      case AppState.LOGIN:
        return (
          <DBConnectScreen />
        );

      case AppState.QUERY_EXEC:
        return (
          <QueryScreen/>
        );

      default:
        return (<div>NOT IMPLEMENTED YET</div>);
    };
  }


  render() {
    return (
      <div className="rc-App">
        <div className="app-content">
          {this.getScreenToRender()}
        </div>
      </div>
    );
  }
}

// maps states from the reducers to the component
// questionable decision to do all of this in the top level component
const mapStateToProps = (state) => {
  const {user, context, query} = state; // equivalent to const context = state.context
  return {
    appState: context.appState
  };
};

export default connect(mapStateToProps)(App);
