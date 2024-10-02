import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import UserSingIn from "./UserSingIn";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

function Home() {
  const [user, setUser] = useState(null);
 let navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("User Logout");
        setUser(null);
      }
    });
  }, [])

  if (user == null) {
    return (
      <>    
        <div className="container ">
          <UserSingIn/>
          {navigate("/")}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container text-bg-dark p-5 text-center mt-5 rounded-5">
        <h2>Welcome <span className="text-info">{user.email}</span></h2>
        <button className="btn btn-outline-danger mt-3" onClick={() => signOut(auth)}>LogOut</button>
      </div>
    </>
  );
}

export default Home;