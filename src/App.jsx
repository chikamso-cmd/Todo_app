import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary'
import Login from './components/login';
import Registration from './components/register';
import Dashboard from './components/dashboard';
import './App.css';

function ErrorFallback({error}) {
  return <div> something went wrong: {error.message}</div>
}

function App() {
  return (

    <Registration />
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/register' element={<Registration />} />
    //       <Route path='/login' element={<Login />} />
    //       <Route path='/dashboard' element={<Dashboard />} />
    //     </Routes>
    //   </BrowserRouter>
    // </ErrorBoundary>
  );
}

export default App;