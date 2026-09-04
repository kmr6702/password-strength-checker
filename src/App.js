import logo from './logo.svg';
import './App.css';
import Dashboard from './Screens/Dashboard';
import AboutTheDev from './Screens/AboutTheDev';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-the-dev" element={<AboutTheDev />} /> 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
