import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth, createUserDocument, googleProvider, appleProvider } from 'helpers/Firebase';
import { adminRoot, currentUser } from 'constants/defaultValues';
import { setCurrentUser } from 'helpers/Utils';
import {
  LOGIN_USER,
  LOGIN_USER_WITH_GOOGLE,
  LOGIN_USER_WITH_APPLE,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../contants';

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
  loginUserWithGoogleSuccess,
  loginUserWithGoogleError,
  loginUserWithAppleSuccess,
  loginUserWithAppleError
} from './actions';

// login with email and password
export function* watchLoginUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) =>
  // eslint-disable-next-line no-return-await
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => error);

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
    if (!loginUser.message) {
      const item = { uid: loginUser.user.uid, ...currentUser };
      setCurrentUser(item);
      yield put(loginUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(loginUserError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

// login with google
export function* watchLoginUserWithGoogle() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER_WITH_GOOGLE, loginWithGoogle);
}

const loginWithGoogleAsync = async (provider) => 
  await auth
    .signInWithPopup(provider)
    .then((result) => {
      // const credential = result.credential;
      // const token = credential.accessToken;

      return result;
    })
    .catch((error) => error);

function* loginWithGoogle({ payload }) {
  const { history } = payload;
  try {
    const loginUser = yield call(loginWithGoogleAsync, googleProvider);
    if (loginUser.user) {
      const item = {
        ...currentUser,
        title: loginUser.user.displayName,
        uid: loginUser.user.uid,
      };

      setCurrentUser(item);
      yield put(loginUserWithGoogleSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(loginUserWithGoogleError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserWithGoogleError(error));
  }
}

// login with apple
export function* watchLoginUserWithApple() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER_WITH_APPLE, loginWithApple);
}

const loginWithAppleAsync = async (provider) => 
  await auth
    .signInWithPopup(provider)
    .then((result) => {
      // const credential = result.credential;
      // const token = credential.accessToken;

      return result;
    })
    .catch((error) => error);

function* loginWithApple({ payload }) {
  const { history } = payload;
  try {
    const loginUser = yield call(loginWithAppleAsync, appleProvider);

    if (loginUser.user) {
      const item = {
        ...currentUser,
        title: loginUser.user.displayName,
        uid: loginUser.user.uid,
      };

      setCurrentUser(item);
      yield put(loginUserWithAppleSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(loginUserWithAppleError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserWithAppleError(error));
  }
}

// register with email and password
export function* watchRegisterUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (credentials) => {
  const { email, password, firstName, lastName } = credentials;
  // eslint-disable-next-line no-return-await
  return (
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        const { uid, email } = userData.user;
        auth.currentUser.updateProfile({
          displayName: `${firstName} ${lastName}`
        })
        createUserDocument({ uid, email, firstName, lastName })
        return userData
      })
      .then((userData) => userData)
      .catch((error) => error)
  );
}

function* registerWithEmailPassword({ payload }) {
  const { email, password, firstName, lastName } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      { email, password, firstName, lastName }
    );
    if (!registerUser.message) {
      const item = {
        ...currentUser,
        title: `${firstName} ${lastName}`,
        uid: registerUser.user.uid,
      };
      setCurrentUser(item);
      yield put(registerUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(registerUserError(registerUser.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

// logout 
export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await auth
    .signOut()
    .then((user) => user)
    .catch((error) => error);
  history.push(adminRoot);
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  yield call(logoutAsync, history);
}

// forgot password
export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .sendPasswordResetEmail(email)
    .then((user) => user)
    .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess('success'));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

// reset password
export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  // eslint-disable-next-line no-return-await
  return await auth
    .confirmPasswordReset(resetPasswordCode, newPassword)
    .then((user) => user)
    .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess('success'));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLoginUserWithGoogle),
    fork(watchLoginUserWithApple),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
