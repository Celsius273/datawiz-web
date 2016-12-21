// LoginScreen.js: the component that contains multiple components for logging in

const classnames = require('classnames');
const React = require('react');

import { connect } from 'react-redux';
import { connectToDB } from '../../utils/DBAPIUtils.js';

class DBConnectScreen extends React.Component {
  static propTypes = {
    connectToDB: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  onConnect = () => {
    console.log('connecting to DB');
    const {dbUrl, dbPort, dbUsername, dbPW} = this.refs;

    this.props.connectToDB(dbUrl.value + dbPort.value, dbUsername.value, dbPW.value);
  }

// account id, secondary account id
// 1 randomly generated

// TODO: const uuidV4 = require('uuid/v4');
// uuidV4();

  renderConnectionForm() {
    return (
      <div className="rc-DBConnectForm">
          <div className="form-group push-tiny--top flush--bottom">
            <input
              ref="dbUrl"
              className="text-input padding-inset"
              placeholder="URL (host) of database" 
            />
          </div>

          <div className="form-group">
            <input
              ref="dbPort"
              className="text-input padding-inset"
              placeholder="Database port"
            />
          </div>

          <div className="form-group">
            <input
              ref="dbUsername"
              className="text-input padding-inset"
              placeholder="Username"
            />
          </div>

          <div className="form-group push--bottom">
            <input
              type="password"
              ref="dbPW"
              className="text-input padding-inset"
              placeholder="Password"
            />
          </div>

          <button
            id="login-submit-btn"
            className="btn btn-large btn-full"
            onClick={this.onConnect}
          >
            Connect
          </button>

      </div>
    );
  }

  render() {
    return (
      <div className="rc-DBConnectScreen">
        <h1>Datawiz</h1>

        <div className="login-container">
          <h4 className="push">Connect to a Databse</h4>

          {this.renderConnectionForm()}

          <hr className="push--top push-small--bottom push-gutter--sides" id="signup-separator"/>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    connectToDB: (username, password, nickname) => {
      connectToDB(dispatch, username, password, nickname);
    }
  };
};

export default connect(false, mapDispatchToProps)(DBConnectScreen);
