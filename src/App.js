import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './Firebase/firebase.init';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

function App() {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth, googleProvider)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })

      .catch(error => {
        console.error('error: ', error);
      })
  }

  return (
    <div className="App">
      {
        user.uid ?
          <button onClick={handleGoogleSignOut}>Sign Out</button>
          :
          //<></> eita k react fragments bole. eita div er kacha kachi ekta jinis.
          <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </>
      }
      {user.uid &&
        <div>
          <h3>User Name: {user.displayName}</h3>
          <h3>Email: {user.email}</h3>
          <img src={user.photoURL} alt="" />
          <br></br>
        </div>
      }
    </div>
  );
}

export default App;
