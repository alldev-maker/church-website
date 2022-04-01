import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_WITH_GOOGLE,
  LOGIN_USER_WITH_GOOGLE_SUCCESS,
  LOGIN_USER_WITH_GOOGLE_ERROR,
  LOGIN_USER_WITH_APPLE,
  LOGIN_USER_WITH_APPLE_SUCCESS,
  LOGIN_USER_WITH_APPLE_ERROR,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from '../contants';

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history },
});
export const loginUserSuccess = (user) => {
  return ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  })
};
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});

export const loginUserWithGoogle = (history) => ({
  type: LOGIN_USER_WITH_GOOGLE,
  payload: { history }
})
export const loginUserWithGoogleSuccess = (user) => ({
  type: LOGIN_USER_WITH_GOOGLE_SUCCESS,
  payload: user
})
export const loginUserWithGoogleError = (message) => ({
  type: LOGIN_USER_WITH_GOOGLE_ERROR,
  payload: message
})

export const loginUserWithApple = (history) => ({
  type: LOGIN_USER_WITH_APPLE,
  payload: { history }
})
export const loginUserWithAppleSuccess = (user) => ({
  type: LOGIN_USER_WITH_APPLE_SUCCESS,
  payload: user
})
export const loginUserWithAppleError = (message) => ({
  type: LOGIN_USER_WITH_APPLE_ERROR,
  payload: message
})

export const forgotPassword = (forgotUserMail, history) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotUserMail, history },
});
export const forgotPasswordSuccess = (forgotUserMail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: forgotUserMail,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ resetPasswordCode, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordCode, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: newPassword,
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history },
});
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});
