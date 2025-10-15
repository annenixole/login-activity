import './App.css';
import SignIn from './components/SignIn'

function App() {
  const handleSignIn = (userEmail) => {
    console.log(`User signed in: ${userEmail}`);
  };


  return (
    <SignIn onSignIn={handleSignIn} name="Sign In" />
  );
}

export default App;