import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import { useState, useRef } from 'react';

import styles from './AddUser.module.css';

const AddUser = (props) => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if(enteredName.trim() === 0 || enteredAge.length === 0){
            setHasError(true);
            setError({ title: 'Both input fields must be filled in', message: 'Yep, what the title says...'});
            return;
        }
        if (+enteredAge < 1){
            setHasError(true);
            setError({ title: 'You must be 1 year old or older to play', message: 'Sorry kiddo...'});
            return;
        }
        const newUser = {
            name: enteredName.trim(),
            age: enteredAge
        }

        props.setUsers(prevUsers => {
            return [...prevUsers, newUser]
        });

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    }

    const resetError = () => {
        setHasError(false);
        setError({});
    }

    
    return (
        <>
            {hasError && 
            <ErrorModal 
                title={error.title} 
                message={error.message} 
                resetError={resetError}
            />}
            <Card className={styles.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        id='username' 
                        ref={nameInputRef}
                    />

                    <label htmlFor='age'>Age</label>
                    <input 
                        type='number' 
                        id='age' 
                        ref={ageInputRef}
                    />

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;