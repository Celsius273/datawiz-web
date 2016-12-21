// LoginScreen.js: the component that contains multiple components for logging in

const classnames = require('classnames');
const React = require('react');


class DBConnectScreen extends React.Component {
  static propTypes = {
    // TODO: something here that makes an API call
  }

  constructor(props) {
    super(props);
  }

  connectToDB = () => {
    console.log('connecting to DB');
  }

  renderConnectionForm() {
    return (
      <div className="rc-SignupForm">
          <div className="form-group push-tiny--top flush--bottom">
            <input
              ref="db-url"
              className="text-input padding-inset"
              placeholder="URL of databse" 
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              ref="pw1"
              className="text-input padding-inset"
              placeholder="Password"
            />
          </div>
          <div className="form-group push--bottom">
            <input
              ref="nickname"
              className="text-input padding-inset"
              placeholder="What is your name/nickname?"
            />
          </div>
          <div className="form-group push--bottom">
            <input
              type="password"
              ref="pw"
              className="text-input padding-inset"
              placeholder="Password"
            />
          </div>



          <button
            id="login-submit-btn"
            className="btn btn--large btn--full"
            onClick={this.connectToDB}
          >
            Connect
          </button>

      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="rc-DBConnectScreen">
          <h1>Datawiz</h1>

          <div className="login-container">
            <h4 className="push">Connect to a Databse</h4>

            {this.renderConnectionForm()}

            <hr className="push--top push-small--bottom push-gutter--sides" id="signup-separator"/>
          </div>
        </div>
      </div>
    );
  }
}

export default DBConnectScreen;
