const classnames = require('classnames');
const React = require('react');

import { connect } from 'react-redux';
// import { connectToDB } from '../../utils/DBAPIUtils.js';

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


  render() {
    const testText = `select * from
      students;
    `;

    return (
      <div className="rc-QueryScreen">
        <div
          id="query-editor"
          className="query-editor"
        >
          {testText}
        </div>
      </div>
    );
  }
}


export default QueryScreen;
