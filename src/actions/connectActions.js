// actions for a user to connect to the db

export const connectToDBSuccess = (primary, secondary, uri) => {
  return {
    type: 'CONNECT_DB_SUCCESS',
    primary,
    secondary,
    uri
  };
};

export const connectToDBFailed = () => {
  return {
    type: 'CONNECT_DB_FAILED'
  };
};
