import './App.css';
import SignIn from './components/SignIn'

function App() {
  return (
     <SignIn onSignIn={handleSignIn} />
  );
}

export default App;