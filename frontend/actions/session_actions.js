export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});

export const signup = () => ({
  type: SIGNUP
});

export const receiveUser = () => ({
  type: RECEIVE_USER
});

export const receiveErrors = () => ({
  type: RECEIVE_ERRORS
});
