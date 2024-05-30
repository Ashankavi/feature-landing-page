import React from 'react';
import UserList from './component/pages/UserList/UserList';
import Navbar from './component/pages/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <UserList />
    </div>
  );
}

export default App;
