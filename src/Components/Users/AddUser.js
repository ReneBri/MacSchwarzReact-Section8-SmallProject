import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import { useState } from 'react';

import styles from './AddUser.module.css';

const AddUser = (props) => {

    const [newUserName, setNewUserName] = useState('');
    const [newUserAge, setNewUserAge] = useState('');

    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newUserName.trim() === 0 || newUserAge.length === 0){
            setHasError(true);
            setError({ title: 'Both input fields must be filled in', message: 'Yep, what the title says...'});
            return;
        }
        if (+newUserAge < 1){
            setHasError(true);
            setError({ title: 'You must be 1 year old or older to play', message: 'Sorry kiddo...'});
            return;
        }
        const newUser = {
            name: newUserName.trim(),
            age: newUserAge
        }

        props.setUsers(prevUsers => {
            return [...prevUsers, newUser]
        });

        setNewUserName('');
        setNewUserAge('');

        console.log(props.users);
    }

    const resetError = () => {
        setHasError(false);
        setError({});
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
            {hasError && 
                <ErrorModal 
                    title={error.title} 
                    message={error.message} 
                    resetError={resetError}
                />}
        </Card>
    )
}

export default AddUser;