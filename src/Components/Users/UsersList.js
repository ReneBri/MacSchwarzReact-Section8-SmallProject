import Card from '../UI/Card';

import styles from './UsersList.module.css';

const UsersList = props => {
    return <Card className={styles.users}>
                <ul>
                    {props.users.length > 0 && props.users.map(user => (
                        <li key={Math.random()}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))}
                    {props.users.length === 0 && (<p>No users to show yet!</p>)}
                </ul>
            </Card>
};

export default UsersList;