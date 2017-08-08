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

export function createAccountAccepted() {
  return {
    type: AUTH_CREATE_ACCOUNT_ACCEPTED,
    payload: {}
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

  axios.post('http://localhost:6501/commands/create-account', {
    email: email,
    password: password
  }).then(response => {
    if(response.code !== 202) {
      throw new Error(`Unexpected status code: ${response.code}`);
    }

    return;
  }).then(() => {
    dispatch(createAccountAccepted());
  }, error => {
    dispatch(createAccountRejected(error));
  });
};
