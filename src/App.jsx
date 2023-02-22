import { useState } from 'react'
import './App.css';
import logo from './assets/logo.png';
import { signInWithGoogle } from './Firebase';

const App = () => {

  const [userName, setUserName] = useState();
  const [photoURL, setPhotoURL] = useState();

  const login = async () => {
  const result =  await signInWithGoogle();
    setUserName(result?.user?.displayName);
    setPhotoURL(result?.user?.photoURL);
    console.log(result)
  }



  return (
    <div className="App">

      <div className="App__Login">
          <h2 className="App__header">Login to ProjectBud</h2>
          <p className="App__subHeader">Dont have an account yet? <span className="App__subHeaderSign">Sign Up for Free</span></p>

          <div className="App__LoginButton" onClick={login}>
            <h2>Sign In with Google</h2>
          </div>
          <img className="App__UserPhoto" src={photoURL} alt="" />
          <h2 className="App__UserName" onClick={login}>Welcome {userName}</h2>
      </div>


      <div className="App__Logo">
        <img src={logo} alt="Logo" />
      </div>
      
    </div>
  )
}

export default App
