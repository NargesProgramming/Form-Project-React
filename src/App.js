import './App.css';
import { BrowserRouter as Router , Route ,Routes , Navigate } from "react-router-dom";


//components
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/signup" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
