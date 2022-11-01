import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state?.name);

  return (
    <>
    <h1>Home</h1>
    <button onClick={() => navigate (-1)}>Go back</button>
    </>
  );
};

export default Home;
