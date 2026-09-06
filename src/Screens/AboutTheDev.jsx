import './AboutTheDev.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function AboutTheDev(){
    return(
        <>
            <h1>About The Developer</h1>
            <h3>Hi! I'm Katy</h3>
            <div class="column">
                <header>About Me:</header>
                <p>I gradauted for Penn State with my Bachelor of Science in Software Engineering with a minor in Game Development. Now I'm at Rochester Institute of Technology studying for a Master of 
                    Computer Science with a specialization in Cybersecurity and an Advanced Certificate in Artificial Intelligence.</p>

                <header>Why I Built This:</header>
                <p></p>

                <header>What Skills Am I'm Learning and Using:</header>
                <p>
                    <ul role='list'>
                        <header className='ListHeaders'>Cybersecurity:</header>
                        <li>Password security</li>
                        <li>CISA/NIST password guidance</li>
                        <li>Password strength considerations</li>
                        <li>Client-side privacy</li>
                        <header>Software Development/Programming:</header>
                        <li>React</li>
                        <li>React state management</li>
                        <li>React router</li>
                        <li>Regular expressions</li>
                    </ul>
                </p>
            </div>
            
            <div className="dashboard-footer">
                <Button
                as={Link} 
                to="/"
                className="dashboard-btn" 
                variant="primary">
                    Password Checker
                </Button>
            </div>
            
        </>
    );
}