import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
