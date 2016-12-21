import axios from 'axios';

import { connectToDBSuccess } from '../actions/connectActions';
import { executeQuerySuccess } from '../actions/queryActions';

// import { fetchUser } from '../utils/settingsAPIUtils';

// postgres://ntwylesa:dW0v5WoHMfaVplc_NVU5jPVGNjSjkHxR@elmer.db.elephantsql.com:5432/ntwylesa

export const connectToDB = (dispatch, dbURI, primary, secondary) => {
  const uri = 'http://5ed46451.ngrok.io/createconnection';

  // for now, only support postgres
  // waiting on Akash for MySQL
  axios.post(uri, {
    uri: dbURI,
    accountID: primary,
    secondaryID: secondary,
    type: 'postgres'
  }).then((response) => {
    // populate the user store with the primary and secondary ids
    // and the current db URI that we're using
    dispatch( connectToDBSuccess(primary, secondary, dbURI) );

    // auto execute query that get information schema about one table
    // 


    // executeQuery(dispatch, primary, secondary, 'select * from student');
  });
};

export const executeQuery = (dispatch, primary, secondary, query) => {
  const uri = 'http://5ed46451.ngrok.io/executequery';

  // for now, only support postgres
  // waiting on Akash for MySQL
  axios.post(uri, {
    accountID: primary,
    secondaryID: secondary,
    query
  }).then((response) => {
    console.log('Executed query', response);
    dispatch(executeQuerySuccess(response.data));
  });
};
