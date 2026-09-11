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
                <p>
                    In order to start to bridge my software engineering background with my current focus on cybersecurity, I wanted to build a tool that combines responsive web design 
                    and secure user engineering. 

                    I designed this application around a three-phase roadmap:

                    <ul>
                        <li><b>Version 1 (Currently Live):</b> This phase uses real-time React UI states to evaluate the password complexity dynamically. This phase focuses on 
                        password length and character-type diversity. </li>

                        <li><b>Version 2 (In Development):</b> This phase will introduce pattern recognition and dictionary matching. This will detect common sequences and sequential strings.
                        In addition this version will start to implement gamified user education. This education will help users learn about password guidelines, and threats surrounding passwords.</li>

                        <li><b>Version 3 (Planned):</b> Currently the final planned version will work to implement a breached password checker. Currently the best way to do this would
                        be to use the Have I Been Pwned API, and I need to do further research to see if this is possible to implement while keeping the program completely client-side
                        while not storing the password in any way.</li>
                    </ul>
                </p>

                <header>What Skills Am I Learning and Using:</header>
                <p>
                    <ul>
                        <h5>Cybersecurity & Cryptographic Concepts:</h5>
                        <li><b>Identity & Access Management (IAM):</b>Implementing secure credential hygiene and auditing methods</li>
                        <li><b>Regulatory Compliance:</b> Aligning logic with current NIST and CISA password complexity guidelines</li>
                        <li><b>Privacy Engineering:</b> The entered data is not stored or transmitted in any form</li>
                        <li><b>Threat Modeling</b> Analyzing defense mechanisms against brute-force and dictionary attacks</li>
                        <h5>Software Development/Programming:</h5>
                        <li><b>React Framework:</b> Structuring scalable, modular components</li>
                        <li><b>State Architecture:</b> Managing real-time UI state updates based on user input</li>
                        <li><b>Client-Side Routing:</b> Utilizing React Router to link multiple screens</li>
                        <li><b>Regular Expressions:</b> Pattern matching to track character counts</li>
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