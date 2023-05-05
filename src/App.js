import React, { useEffect } from "react";
import GlobalStyles from "./components/style/GlobalStyles";
import Routes from "./routes/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { onSnapshot } from "firebase/firestore";
import * as userActions from "./redux/user/user-actions"
import { useDispatch } from "react-redux";


function onAuthStateChange(cb, action){
  onAuthStateChanged(auth, async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth)

      onSnapshot(userRef, snapShot => 
        cb(action({ id: snapShot.id, ...snapShot.data() })))
    } else {
      cb(action(null))
    }
  })
} 

const App = () => {

  const dispatch = useDispatch() 

 useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser)
    return () => unsuscribe()
  }, [dispatch]) 

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
