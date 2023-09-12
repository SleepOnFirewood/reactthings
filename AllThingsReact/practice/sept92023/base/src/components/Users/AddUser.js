import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
        {
            return;
        }
        if (+enteredAge < 1)
        {
            return;
        }
        props.onAddUser(enteredAge, enteredUsername)
        setEnteredAge('')
        setEnteredUsername('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
    <div>
    <ErrorModal title ="An error Occured!" message="Something went wrong!"></ErrorModal>
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value = {enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value = {enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit"> Add User</Button>
        </form>
    </Card>
    </div>
    )
}

export default AddUser