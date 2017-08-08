import {combineReducers} from 'redux';

import {
  AUTH_CREATE_ACCOUNT_REQUESTED,
  AUTH_CREATE_ACCOUNT_ACCEPTED,
  AUTH_CREATE_ACCOUNT_REJECTED
} from '../actions/auth';

const isCreatingAccount = (state = false, action) => {
  switch(action.type) {
    case AUTH_CREATE_ACCOUNT_REQUESTED:
      return true;
    case AUTH_CREATE_ACCOUNT_ACCEPTED:
    case AUTH_CREATE_ACCOUNT_REJECTED:
      return false;
    default:
      return state;
  }
};

const createAccountFailed = (state = false, action) => {
  switch(action.type) {
    case AUTH_CREATE_ACCOUNT_REQUESTED:
      return false;
    case AUTH_CREATE_ACCOUNT_REJECTED:
      return true;
    default:
      return state;
  }
};

const createAccountError = (state = null, action) => {
  switch(action.type) {
    case AUTH_CREATE_ACCOUNT_REQUESTED:
      return null;
    case AUTH_CREATE_ACCOUNT_REJECTED:
      const {error} = action.payload;

      return error;
    default:
      return state;
  }
};

const auth = combineReducers({
  isCreatingAccount,
  createAccountFailed,
  createAccountError
});

export default auth;

export const getIsCreatingAccount = (state) => state.isCreatingAccount;
export const getCreateAccountFailed = (state) => state.createAccountFailed;
export const getCreateAccountError = (state) => state.createAccountError;
