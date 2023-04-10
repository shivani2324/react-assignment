import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import SingleUser from './Components/SingleUser';


function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
     
        <BrowserRouter>
    
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/add" Component={AddUser} />
            <Route path="/edit/:id" Component={EditUser} />
            <Route path="/singleuser/:id" Component={SingleUser} />
          </Routes>
         
        </BrowserRouter>
        
    </div>
  );
}

export default App;
