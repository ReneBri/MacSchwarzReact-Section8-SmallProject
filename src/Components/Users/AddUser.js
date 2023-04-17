import Card from '../UI/Card';
import Button from '../UI/Button';

import { useState } from 'react';

import styles from './AddUser.module.css';

const AddUser = (props) => {

    const [newUserName, setNewUserName] = useState('');
    const [newUserAge, setNewUserAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: newUserName,
            userAge: newUserAge
        }

        props.setUsers(prevUsers => {
            return [...prevUsers, newUser]
        });
        console.log(props.users);
    }

    
    return (
        <Card className={styles.input}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    id='username' 
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)} 
                />

                <label htmlFor='age'>Age</label>
                <input 
                    type='number' 
                    id='age' 
                    value={newUserAge}
                    onChange={(e) => setNewUserAge(e.target.value)} 
                />

                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;