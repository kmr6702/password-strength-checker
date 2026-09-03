import { useState } from 'react';


export default function Dashboard(){
    const [password, setPassword] = useState('');   //A state variable for the password input
    const [length, setLength] = useState(0);        //A varaible that stores the length of the password
    const [upperCaseCount, setUpperCaseCount] = useState(0); //A varaible to hold the amount of uppercase letters present in the password 
    const [lowerCaseCount, setLowerCaseCount] = useState(0); //A variable to hold the amount or lowercase letters present in the password 
    const [symbolCount, setSymbolCount] = useState(0);       //A variable to hold the amount of symbols present in the password 
    const [numberCount, setNumberCount] = useState(0);       //A varaible to hold the amount of numbers present in the password 

    const lowercase = /[a-z]/
    const uppercase = /[A-Z]/
    const number = /[0-9]/
    const symbols = /[!@#$%^&*,.()-_+=/?]/

    {/*Update the state everytime a change is made to the password input*/}
    const handleChange = (e) => {
        const newPassword = e.target.value;
    
        setPassword(newPassword);
        setLength(newPassword.length);

        {/*Place holders that count the number of each type of value*/}
        let uppercase_temp = 0;
        let lowercase_temp = 0;
        let numbers_temp = 0;
        let symbols_temp = 0;
        for(let i = 0; i < newPassword.length; i++){
            const char = newPassword[i];

            if(lowercase.test(char)){
                lowercase_temp++;
            }else if(uppercase.test(char)){
                uppercase_temp++;
            }else if(number.test(char)){
                numbers_temp++;
            }else if(symbols.test(char)){
                symbols_temp++;
            }
        }
        setLowerCaseCount(lowercase_temp);
        setUpperCaseCount(uppercase_temp);
        setSymbolCount(symbols_temp);
        setNumberCount(numbers_temp);
    }

    return(
        <>
            {/*Take the users input, stores it in the password variable*/}
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
                    <li>Length: {length}</li>
                    <li>Numbers: {numberCount}</li>
                </ul>
            </p>
        </>
    )
}