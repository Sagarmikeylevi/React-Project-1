import styles from "./UserItem.module.css";

const UserItem = (props) => {
    return (
      <div className={styles.userItem}>
          <p>{props.userName + " ( " + props.userAge + " years old ) "}</p>
      </div>
    );
}

export default UserItem;