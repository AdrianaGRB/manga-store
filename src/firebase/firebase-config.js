 export const firebaseConfig = {
  apiKey: "AIzaSyAnINVMWkExrTLQEl9D4oBeiHfrmsQmBzM",
  authDomain: "manga-store-c3e4e.firebaseapp.com",
  projectId: "manga-store-c3e4e",
  storageBucket: "manga-store-c3e4e.appspot.com",
  messagingSenderId: "1019462517613",
  appId: "1:1019462517613:web:389e0938a076e7dbfa5064"
};


//project-1019462517613


export const actionCodeSettingsVerification = {
    url:
    process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "pagina de hosting"
}

export const actionCodeSettingsForgotPassword = {
    url:
    process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "pagina de hosting login"
}