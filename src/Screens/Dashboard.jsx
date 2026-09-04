import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Dashboard.css';
import { reviewRealTime } from '../Analysis/realTimeReview';



export default function Dashboard(){
    const [password, setPassword] = useState('');   //A state variable for the password input
    const [length, setLength] = useState(0);        //A varaible that stores the length of the password
    const [upperCaseCount, setUpperCaseCount] = useState(0); //A varaible to hold the amount of uppercase letters present in the password 
    const [lowerCaseCount, setLowerCaseCount] = useState(0); //A variable to hold the amount or lowercase letters present in the password 
    const [symbolCount, setSymbolCount] = useState(0);       //A variable to hold the amount of symbols present in the password 
    const [numberCount, setNumberCount] = useState(0);       //A varaible to hold the amount of numbers present in the password 
    
    {/*Update the state everytime a change is made to the password input*/}
    const handleChange = (e) => {
        const newPassword = e.target.value;
    
        setPassword(newPassword);
        setLength(newPassword.length);

        const review = reviewRealTime(newPassword);

        setLowerCaseCount(review.lowerCaseCount);
        setUpperCaseCount(review.upperCaseCount);
        setSymbolCount(review.symbolsCount);
        setNumberCount(review.numbersCount);
    }

    return(
        <>
            <div className="dashboard-header">

            </div>

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
                <div className="dashboard-footer">
                    <Button className="abt-dev-btn" variant="primary">
                        About the Developer 
                    </Button>
                </div>
        </>
    );
}