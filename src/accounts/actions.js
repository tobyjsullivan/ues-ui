export const ACCOUNT_LOGIN = 'ACCOUNT_LOGIN';

export function accountLogin(username, password) {
  return {
    type: ACCOUNT_LOGIN,
    payload: {
      username,
      password
    }
  };
}
