// For now our page is an SPA so we're relying on states
// essentially, this file is a giant hack
// IMPORTANT TODO: Figure out how to use React-Router
// it will make this a LOT less painful

const AppState = {
  LOGIN: 'LOGIN',                   // mostly done (just intended mood needed)
  QUERY_EXEC: 'QUERY_EXEC'            // 30% done (default view in app for a user)
};

export default AppState;
