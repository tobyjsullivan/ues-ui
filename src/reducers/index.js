import {combineReducers} from 'redux';

import auth, * as fromAuth from './auth';

export default combineReducers({
  auth
});

export const getIsCreatingAccount = (state) => fromAuth.getIsCreatingAccount(state.auth);
export const getCreateAccountFailed = (state) => fromAuth.getCreateAccountFailed(state.auth);
export const getCreateAccountError = (state) => fromAuth.getCreateAccountError(state.auth);
export const getRedirectToEmailConfirmation = (state) => fromAuth.getRedirectToEmailConfirmation(state.auth);
