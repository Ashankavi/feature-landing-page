import React from 'react';
import UserList from './component/pages/UserList/UserList';
import Hero from './component/pages/Hero/Hero';
import Navbar from './component/pages/Navbar/Navbar';
import Featured from './component/pages/Featured/Featured';
import Footer from './component/pages/Footer/footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <UserList />
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
