import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import './SignUp.css'


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const provider = new GoogleAuthProvider();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "https://aluplanner-kakaymi10.vercel.app";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        window.location.href = "https://aluplanner-kakaymi10.vercel.app";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
        <button onClick={signUpWithGoogle}>Sign Up with Google</button>
      </form>
    </div>
  );
};

export default SignUp;
