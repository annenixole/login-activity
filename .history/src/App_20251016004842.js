import './App.css';
import SignIn from './components/SignIn'

function App() {
  const handleSignIn = (userEmail) => {
    console.log(`User signed in: ${userEmail}`);
  };


  return (
    <SignIn onSignIn={handleSignIn} greetings="Welcome Back <br></br> Start booking your perfect stay" />
  );
}

export default App;