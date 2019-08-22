import React from 'react';
import classes from './Person.module.css';
const Person = (props) =>{
    return (
            <div className ={classes.Person}>
                <p>I am {props.name} and I am {props.age} years old<button onClick={props.handler}>Delete</button></p>
                <input type="text" onChange={props.nameChange} value={props.name}/>
            </div>
    );
}

export default Person;