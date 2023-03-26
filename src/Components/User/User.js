import UserForm from './UserForm';
import Card from "../UI/Card";
import styles from './User.module.css';
import ErrorModal from '../UI/ErrorModal';
import { useState } from 'react';

const User = (props) => {
  const [error, setError] = useState();

 

  const getUserDataHandler = (data) => {
    const userData = {
      ...data,
      id: Math.random().toString()
    }

    props.onAddUser(userData);
  }

  const getErrorHandler = (enteredTitle , enteredMessage) => {
    setError({
      title: enteredTitle,
      message: enteredMessage
    })
  }

  const errorHandler = () => {
    setError(null);
  }
  return (
    <>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card className={styles.userPage}>
        <UserForm onUserData={getUserDataHandler} onError={getErrorHandler} />
      </Card>
    </>
  );
};

export default User;