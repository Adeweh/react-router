import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import About from './components/About'
// import Home from './components/Home'
 import Nav from './components/Nav'
// import Register from './components/Register'
// import PageNotFound  from './components/PageNotFound'
// import Users from './components/Users'
// import UserDetail from './components/UserDetail'
import Router from './components/Router'


const App = () => {
   
    
  return (
    <>
    <Nav/>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/users" element={<Users/>}>
        <Route path=":userId" element={<UserDetail/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>

      </Routes> */}
      <Router/>
    </>
  );
};

export default App
