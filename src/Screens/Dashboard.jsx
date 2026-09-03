import { useState } from 'react';

export default function Dashboard(){
    const [password, setPassword] = useState('');   //A state variable for the password input
    const [length, setLength] = useState(0);        //A varaible that stores the length of the password
    const [upperCaseCount, setUpperCaseCount] = useState(0); //A varaible to hold the amount of uppercase letters present in the password 
    const [lowerCaseCount, setLowerCaseCount] = useState(0); //A variable to hold the amount or lowercase letters present in the password 
    const [symbolCount, setSymbolCount] = useState(0);       //A variable to hold the amount of symbols present in the password 


    const handleChange = (e) => {
        setPassword(e.target.value);
        setLength(length + 1);
    }

    return(
        <>
            {/*Take the users input, stores it in the password variable, and updates the state every time a change is made*/}
            <label>
                Enter your password here:
                <input 
                    value={password} 
                    onChange={handleChange}
                />
            </label>
            

            <p>
                <ul>
                    <li>Your Password is: {password}</li>
                    <li>Uppercase Count: {upperCaseCount}</li>
                    <li>Lowercase Count: {lowerCaseCount}</li>
                    <li>Symbol Count: {symbolCount}</li>
                    <li>Lenght: {length}</li>
                </ul>
            </p>
        </>
    )
}