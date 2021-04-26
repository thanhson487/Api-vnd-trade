import * as actions from "../../../../constants/login";
export const submitLogin = (data) => {
  return {
    type: actions.SUBMIT_LOGIN,
    payload: data,
  };
};
