import { useState } from "react";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  // title: 'Invalid age',
  //       message: 'Please enter a valid age (> 0).',

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const userInputHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      props.onError(
        "Invalid age",
        "Please enter a valid name and age (non-empty values)."
      );
      return;
    }

    if (+age < 1){
      props.onError("Invalid input", "Please enter a valid age (> 0).");
      return;
    }

    const userDetails = {
      username: userName,
      age: age,
    };

    props.onUserData(userDetails);

    setUserName("");
    setAge("");
  };
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
