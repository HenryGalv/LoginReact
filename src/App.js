import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./Home";
import fire from "./fire";
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(fire);
function App() {

  const [user, setUser] = useState(null);
  onAuthStateChanged(auth,(userFire)=>{
    if(userFire){
      setUser(userFire);
    }else{
      setUser(null);
    }
  });
  return (
    <>
      {user ? (<Home />) : (<Login />)}
    </>
  );
}

export default App;
