import React from 'react';
import UserList from './component/pages/UserList/UserList';
import Hero from './component/pages/Hero/Hero';
import Navbar from './component/pages/Navbar/Navbar';
import Drivers from './component/pages/Drivers/Drivers';
import Footer from './component/pages/Footer/Footer';
import Contact from './component/pages/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id="home"><Hero/></div>
      <div id="drivers"><UserList/></div>
      <div id="gallery"><Drivers/></div>
      <div id="contact"><Contact/></div>
      <Footer/>
    </div>
  );
}

export default App;
