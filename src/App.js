import logo from './logo.svg';
import './App.css';
import Dashboard from './Screens/Dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbaord />} />
          <Route path="/about-the-dev" element={<AboutTheDev />} /> 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
