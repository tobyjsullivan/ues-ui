import axios from 'axios';

export const AUTH_CREATE_ACCOUNT_REQUESTED = 'AUTH_CREATE_ACCOUNT_REQUESTED';
export const AUTH_CREATE_ACCOUNT_ACCEPTED = 'AUTH_CREATE_ACCOUNT_ACCEPTED';
export const AUTH_CREATE_ACCOUNT_REJECTED = 'AUTH_CREATE_ACCOUNT_REJECTED';

export const createAccountRequested = (email, password) => ({
  type: AUTH_CREATE_ACCOUNT_REQUESTED,
  payload: {
    email,
    password
  }
});

export function createAccountAccepted(email, password) {
  return {
    type: AUTH_CREATE_ACCOUNT_ACCEPTED,
    payload: {
      email,
      password
    }
  };
}

export function createAccountRejected(error) {
  return {
    type: AUTH_CREATE_ACCOUNT_REJECTED,
    payload: {error}
  };
}

export const createAccount = (email, password) => (dispatch) => {
  dispatch(createAccountRequested(email, password));

  var params = new URLSearchParams();
  params.append('email', email);
  params.append('password', password);

  axios.post('http://localhost:6501/commands/create-account', params)
    .then(response => {
      if(response.status !== 202) {
        throw new Error(`Unexpected status code: ${response.code}`);
      }

      return;
    }).then(() => {
      dispatch(createAccountAccepted(email, password));
    }, error => {
      dispatch(createAccountRejected(error));
    });
};
