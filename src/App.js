import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);


  return (
    <div>
      <AddUser 
        setUsers={setUsers}
        users={users}
      />
      <UsersList users={users} />
    </div>
  );
}

export default App;
