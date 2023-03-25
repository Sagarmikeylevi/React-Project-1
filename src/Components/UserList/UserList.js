import UserItem from './UserItem'
import Card from "../UI/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
    if (!Array.isArray(props.items)) {
      return <p>No items found.</p>;
    }
  return (
    <Card className={styles.userList}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          userName={user.username}
          userAge={user.age}
        />
      ))}
    </Card>
  );
};

export default UserList;
