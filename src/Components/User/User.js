import UserForm from './UserForm';
import Card from "../UI/Card";
import styles from './User.module.css';

const User = (props) => {

  const getUserDataHandler = (data) => {
    const userData = {
      ...data,
      id: Math.random().toString()
    }

    props.onAddUser(userData);


  }
  return (
    <Card className={styles.userPage}>
      <UserForm onUserData={getUserDataHandler} />
    </Card>
  );
};

export default User;