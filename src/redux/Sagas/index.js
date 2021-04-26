import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUser } from "../../apis/login";
import * as actions from "../../constants/login";
function* submitLogin({ payload }) {
  const res = yield call(fetchUser, payload);
}
function* rootSaga() {
  yield takeLatest(actions.SUBMIT_LOGIN, submitLogin);
}
export default rootSaga;
