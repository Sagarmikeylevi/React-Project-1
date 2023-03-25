import { useState } from "react";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  }

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const userInputHandler = (event) => {
    event.preventDefault();

    const userDetails = {
      username: userName,
      age: age
    }

    props.onUserData(userDetails);

    setUserName('');
    setAge('');
  }
  return (
    <form className={styles.inputForm} onSubmit={userInputHandler}>
      <div className={styles.inputStyles}>
        <label>Username</label>
        <input type="text" value={userName} onChange={userNameHandler} />
      </div>

      <div className={styles.inputStyles}>
        <label>Age</label>
        <input type="number" value={age} onChange={ageHandler} />
      </div>

      <div className={styles.inputButton}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
