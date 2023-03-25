import { useState } from "react";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";
const App = () => {
  const [user, setUser] = useState('');
  const getUserHandler = (userData) => {
     setUser(prevUser => [userData, ...prevUser]);

  }
  return (
    <div>
      <User onAddUser={getUserHandler} />
      <UserList items={user} />
    </div>
  );
}

export default App;
