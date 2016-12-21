const classnames = require('classnames');
const React = require('react');

import { connect } from 'react-redux';
import { executeQuery } from '../../utils/DBAPIUtils.js';

import QueryChart from './QueryChart';

/*
postgres://ntwylesa:dW0v5WoHMfaVplc_NVU5jPVGNjSjkHxR@elmer.db.elephantsql.com:5432/ntwylesa

to get code (in a string in ace)
var code = editor.getValue();

to forcibly set code value in ace
editor.setValue("new code here");
*/

let editor;

class QueryScreen extends React.Component {
  static propTypes = {
    primary: React.PropTypes.string.isRequired,
    secondary: React.PropTypes.string.isRequired,
    query: React.PropTypes.string.isRequired,
    queryResult: React.PropTypes.array.isRequired,
    executeQuery: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    editor = ace.edit('query-editor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode("ace/mode/sql");
  }

  componentWillUnmount() {
    editor.destroy();
    editor.container.remove();
  }

  onExecuteQuery = () => {
    const queryToExecute = editor.getValue();
    const {primary, secondary} = this.props;

    this.props.executeQuery(primary, secondary, queryToExecute);
  }

  render() {

    console.log(this.props.queryResult);

    return (
      <div className="rc-QueryScreen">
        <QueryChart
          queryData={this.props.queryResult}
        />

        <div className="editor-wrapper">
          <div id="query-editor" className="query-editor">
            {this.props.query}
          </div>
        </div>

        <button
          className="btn btn-large"
          onClick={this.onExecuteQuery}
        >
          Execute Query
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {user, query} = state; // equivalent to const context = state.context
  return {
    primary: user.primary,
    secondary: user.secondary,
    query: query.queryString,
    queryResult: query.queryResult
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    executeQuery: (primary, secondary, query) => {
      executeQuery(dispatch, primary, secondary, query);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryScreen);
