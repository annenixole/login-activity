import './App.css';
import SignIn from './components/SignIn'

function App() {
  const handleSignIn = (userEmail) => {
    console.log(`User signed in: ${userEmail}`);
  };
  
  return (
    <SignIn onSignIn={handleSignIn} success="has successfully signed in!" failed = "Invalid email or password. Please try again." />
  );
}

export default App;