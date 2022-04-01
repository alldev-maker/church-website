var sharedData
export const setShareData = (data) => {
  sharedData = data
}
export const getShareData = () => {
  return sharedData
}

var sharedExtentionData
export const setShareExtention = (extentionData) => {
  sharedExtentionData = extentionData
}
export const getShareExtention = () => {
  return sharedExtentionData
}



var sharedTagsData
export const setShareTagsData = (tagsData) => {
  sharedTagsData = tagsData
}
export const getShareTagsData = () => {
  return sharedTagsData
}


export const getUser = () => {
  const userStr = getsUser();
  const useremail = localStorage.getItem('uemail');
  if (userStr) {
    return JSON.parse(userStr);
  } else {
    return null;
  }
};
export const getUserPassword = () => {
  const userPwd = localStorage.getItem('userPassword');
  if (userPwd) {
    return JSON.parse(userPwd);
  } else {
    return null;
  }
};

export const getsUserToken = () => {
  const userToken = localStorage.getItem('refreshToken');
  if (userToken) {
    return JSON.parse(userToken);
  } else {
    return null;
  }
};

export const getUserUId = () => {
  const uUId = localStorage.getItem('userUID');
  if (uUId) {
    return JSON.parse(uUId);
  } else {
    return null;
  }
};

export const getsUser = () => {
  return localStorage.getItem('user') || null;
};

export const getsUserPassword = () => {
  return localStorage.getItem('userPassword') || null;
};

export const removeUserSession = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('uemail');
  localStorage.removeItem('userPassword');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userUID');
  localStorage.removeItem('myUserProfile');
};
export const setUserSession = (user, uemail, userPassword, refreshToken, userUID) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('uemail', JSON.stringify(uemail));
  localStorage.setItem('userPassword', JSON.stringify(userPassword));
  localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  localStorage.setItem('userUID', JSON.stringify(userUID));
};

export const setUserId = (id) => {
  localStorage.setItem('userUID', id);
}



export const setUserProfile = (uProfile) => {
  localStorage.setItem('myUserProfile', JSON.stringify(uProfile));
}
