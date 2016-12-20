// AppContainer.js: the "dumb" high level component of motus

const classnames = require('classnames');
import React from 'react';

import { connect } from 'react-redux';

// import AppState from '../constants/AppState';

// import AnalyticsScreen from '../components/AnalyticsScreen';
// import TopNavbar from '../components/Navbar/TopNavbar';

// import SetupScreen from '../components/SetupScreen';
// import LoginScreen from '../components/login/LoginScreen';
// import ContentScreen from '../components/content-grid/ContentScreen';
// import AnalyzeText from '../components/AnalyzeText';

class App extends React.Component {
  static propTypes = {
    // appState: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="rc-App">
        eyyy!
      </div>
    );
  }
}

// maps states from the reducers to the component
// const mapStateToProps = (state) => {
//   const {context} = state; // equivalent to const context = state.context
//   return {
//     appState: context.appState
//   };
// };

// export default connect(mapStateToProps)(App);

export default App;
