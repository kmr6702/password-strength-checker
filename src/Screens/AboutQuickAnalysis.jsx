import { Modal } from "react-bootstrap";
import './AboutQuickAnalysis.css';

export default function AboutQuickAnalysis({show, onClose}){
    return(
        <Modal show={show} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>About This Rating</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>This is not an official rating!</h3>
                <h4>Current Password Guidelines:</h4>
                <p>
                    The current guidelines from the National Institute of Standards and Technology (NIST), is that passwords should be at least 15 characters long. 
                    NIST no longer recommends the requirement of special characters within passwords. When you add extra characters, the password becomes harder to guess, 
                    but the priority is on length. Special characters can be added to passwords, but companys and sites are encouraged to remove the requirement.
                </p>

                <h4>This is a quick analysis only.</h4>
                <header>What does that mean?</header>
                <p>
                    Quick analysis means that it is a real time review of the password as you type. This analysis only reviews length and character types. This analysis is not a thorough analysis,
                    and should not be treated as such. 
                </p>

                <h4>What are the standards for quick analysis?</h4>
                <p>
                    <table>
                        <tr>
                            <th>Rating</th>
                            <th>Requirements</th>
                        </tr>
                        <tr>
                            <td>Very Weak</td>
                            <td>Eight or less characters</td>
                        </tr>
                        <tr>
                            <td>Weak</td>
                            <td>9-15 Characters</td>
                        </tr>
                        <tr>
                            <td>Moderate</td>
                            <td>16 or more characters with one character type</td>
                        </tr>
                        <tr>
                            <td>Strong</td>
                            <td>16 or more characters with two or three character types</td>
                        </tr>
                        <tr>
                            <td>Very Strong</td>
                            <td>16 or more characters with all four character types</td>
                        </tr>
                    </table>
                </p>

                <h4>What are the four character types?</h4>
                <p>
                    <ol>
                        <li>Lowercase letters a-z</li>
                        <li>Uppercase letters A-Z</li>
                        <li>Numbers 0-9</li>
                        <li>Special characters: !@#$%^&*(),</li>
                    </ol>
                </p>
            </Modal.Body>
        </Modal>   
    );
};