import { useReducer } from "react";
import "./App.css";
import {useState} from "react";
function App() {
  //use the useReducer function here; import the reducer function and initial state variable here.
  const [reducerState, dispatch] = useReducer();
return (
    <div className="main-app">
      <div className="login-wrapper">
        <div style={{ textAlign: "center" }}>
          <h1>LOGIN</h1>
          <div className="welcome-text">
            Welcome to the RCT-211 E1 Evaluation
          </div>
          {/* if the user is authenticated as per the reducerState, THEN ONLY show div with the token data, OTHERWISE show the Incorrect Credentials div */}
          <div data-cy="token">Token:</div>
          <div data-cy="incorrect-credentials" style={{ color: "red" }}>
            Incorrect Credentials
          </div>
        </div>
        <form>
          <div className="email-wrapper">
            <label>Email</label>
            <input data-cy="email" />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input data-cy="password" />
          </div>
          <div className="submit-button-wrapper">
            <button data-cy="submit-button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="social-media-icons">
          <img src="/facebook.png" alt="facebook-icon" />
          <img src="/instagram.png" alt="facebook-icon" />
          <img src="/linkedin.png" alt="facebook-icon" />
          <img src="/twitter.png" alt="facebook-icon" />
          <img src="/github.png" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
