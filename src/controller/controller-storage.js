// ----------------------------SEND PHOTO STORAGE SN-IMGPROFILE------------------------------------
export const sendImgToStorage = (refPath, file) => firebase.storage().ref(refPath).put(file);
