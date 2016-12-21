// actions for a user to log in

// export const fetchTokenSuccess = ({email, nickName, token, resultLimit}) => {
//   return {
//     type: 'LOAD_USER',
//     email,
//     nickName,
//     token,
//     resultLimit,
//     receivedAt: Date.now()
//   };
// };

export const connectToDBSuccess = () => {
  return {
    type: 'CONNECT_DB_SUCCESS'
  };
};

export const connectToDBFailed = () => {
  return {
    type: 'CONNECT_DB_FAILED'
  };
};
