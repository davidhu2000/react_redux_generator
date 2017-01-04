export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const receiveUser = () => ({
  type: RECEIVE_USER
});

export const receiveError = () => ({
  type: RECEIVE_ERROR
});
