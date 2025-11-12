import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/register';
import Dashboard from './components/dashboard';
import './App.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Registration />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;