import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage'
// Import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accountant/*" element={<SecondPage />} />
        <Route path="/Accountantltd/*" element={<ThirdPage />} />
      </Routes>
    </Router>
  );
};
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
export default App;
