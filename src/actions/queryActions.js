// actions for a user to connect to the db

export const executeQuerySuccess = (queryResult) => {
  return {
    type: 'EXECUTE_QUERY_COMPLETE',
    result: queryResult
  };
};
