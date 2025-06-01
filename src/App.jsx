import "./App.css";
import AuthForm from "./components/Login/AuthForm";

// let isLoggedIn = false;

// const currentTime = new Date().getHours();

let userIsRegistered = true;

function App() {
  return (
    <>
      <div className="container">
        {<AuthForm userIsRegistered={userIsRegistered} />}
      </div>
    </>
  );
  // return (
  //   <>
  //     <div className="container">
  //       {isLoggedIn ? <h1>Hello</h1> : <LoginForm />}

  //       {/* {currentTime > 12 ? <h1>Why are you still working?</h1> : null} */}
  //       {currentTime > 12 && <h1>Why are you still working?</h1>}
  //     </div>
  //   </>
  // );
}

export default App;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
