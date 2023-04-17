import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';

function App() {

  const [users, setUsers] = useState([]);


  return (
    <div>
      <AddUser 
        setUsers={setUsers}
        users={users}
      />
    </div>
  );
}

export default App;
