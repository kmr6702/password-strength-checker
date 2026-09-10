import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Dashboard.css';
import { reviewRealTime } from '../Analysis/realTimeReview';
import { ratingAnalysis } from '../Analysis/realTimeReview';
import { Link } from 'react-router-dom';
import infoImage from './Assets/Info.png';
import AboutQuickAnalysis from './AboutQuickAnalysis';

export default function Dashboard(){
    const [password, setPassword] = useState('');   //A state variable for the password input
    const [length, setLength] = useState(0);        //A varaible that stores the length of the password
    const [upperCaseCount, setUpperCaseCount] = useState(0); //A varaible to hold the amount of uppercase letters present in the password 
    const [lowerCaseCount, setLowerCaseCount] = useState(0); //A variable to hold the amount or lowercase letters present in the password 
    const [symbolCount, setSymbolCount] = useState(0);       //A variable to hold the amount of symbols present in the password 
    const [numberCount, setNumberCount] = useState(0);       //A varaible to hold the amount of numbers present in the password 

    const [quickAnalysis, setQuickAnalysis] = useState("Very Weak");
    const [showAboutQuickAnalysis, setShowAbouutQuickAnalysis] = useState(false);
    
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

        setQuickAnalysis(ratingAnalysis(review, newPassword.length));
    }

    return(
        <>
            <div className="dashboard-header">

            </div>

            <div className="row">
                {/*Take the users input, stores it in the password variable*/}
                <label className='input'>
                    Enter your password here:
                    <input 
                        value={password} 
                        name='password-checker'
                        type="password"
                        maxLength={100}
                        onChange={handleChange}
                        autoComplete='new-password'
                    />
                </label>

                {/* <img 
                    src={infoImage} 
                    alt='Information Icon' 
                    className='info-icon'
                /> */}
                
                <p className='rating'>
                    Rating: {quickAnalysis}
                    <Button
                        variant="link"
                        className='info-button'
                        onClick={() => setShowAbouutQuickAnalysis(true)}
                        >
                            <img 
                                src={infoImage} 
                                alt='Information Icon' 
                                className='info-icon'
                            />
                    </Button>
                </p>

                <AboutQuickAnalysis
                    show={showAboutQuickAnalysis}
                    onClose={() => setShowAbouutQuickAnalysis(false)}
                />
                {/*Debugging use only*/}
                {/* <p>
                    <ul>
                        <li>Your Password is: {password}</li>
                        <li>Uppercase Count: {upperCaseCount}</li>
                        <li>Lowercase Count: {lowerCaseCount}</li>
                        <li>Symbol Count: {symbolCount}</li>
                        <li>Length: {length}</li>
                        <li>Numbers: {numberCount}</li>
                    </ul>
                </p> */}
            </div>

            <div className="dashboard-footer">
                <Button
                as={Link} 
                to="/about-the-dev"
                className="abt-dev-btn" 
                variant="primary">
                    About the Developer 
                </Button>

                <p>
                    *This password checker runs completely on your device. The password is not stored or sent to a server.
                </p>
            </div>
        </>
    );
}