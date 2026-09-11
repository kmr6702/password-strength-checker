# Password Security Analyzer 

A client-side password analysis tool built using React and JavaScript. This project combines my software engineering background with my growing focus on cybersecurity. This project explores password security, user education, and privacy-focused application design. 

**Live demo:** [Password Security Analyzer](https://precious-bavarois-a81e2b.netlify.app)

## About the Project

I built this project as a cybersecurity portfolio project. This project implements password security concepts in an interactive web application. 

This application is designed to perform password analysis completely on the user's device. Being a front-end-only application, there is no database or server to send the password to. 

This project is being developed in increments. 

## Current Version 
### v1 - Real-Time Analysis 

**Currently Live**

The first version provides real-time password analysis as the user types.

v1 evaluates:
* Password length
* Lowercase letters
* Uppercase letters
* Numbers
* Symbols

These factors are used to assign a strength rating:
|Rating | Critera |
|-------|---------|
|Very Weak | 8 or less characters |
|Weak | 9-15 characters |
|Moderate | 16+ characters and one character type |
|Strong | 16+ characters and two or three character types |
|Very strong | 16+ characters and all four character types |

While this password is informed by NIST and CISA password guidelines, it is an application-specific rating and not an official rating of strength. The primary focus is on password length and avoiding predictable passwords. 

## Development Roadmap
### v1 - Real-Time Analysis 
**Status: Live**
* Real-time password analysis
* Password length analysis
* Character-type analysis
* Client-side password processing

### v2 - Advanced Review
**Status: In Development**
Planned features:
* Common-password detection
* Common-term matching
* Predictable pattern detection
* Sequential number detection
* Repeated number detection
* Gamified password-security education

### v3 - Breached Password Analysis 
**Status: Planned**

This final version will explore breached-password detection. I need to complete additional research on how this will be implemented to remain client-side only. 

## Technologies 
* React
* JavaScript
* React-Bootstrap
* React Router
* HTML/CSS
* Regular Expressions
* Git/GitHub
* Netlify

## Cybersecurity Concepts
I have had the opportunity to explore several cybersecurity concepts:
* Identity and Access Management (IAM)
* Privacy Engineering
* Threat Modeling
* Brute-Force Attacks
* Dictionary Attacks
* Password Security Standards

## Software Engineering Concepts 
I have also brought in concepts from my software engineering background 
* Component-based React development
* React state management
* Real-time UI updates
* Client-side routing
* Regular expression pattern matching
* Incremental development and version planning

## Project Structure
src/
|-- Analysis/
|   |--realTimeReview.js
|   |--ratingAnalysis.js
|
|-- Screens/
|   |--Dashboard.jsx
|   |--AboutQuickAnalysis.jsx
|   |--AboutTheDev.jsx
|
|
|--App.js
|--App.css


## Project Goals
The long term goal is to make a project that does more than assign a "strong" or "weak" label to a password. Future versions will further explore cybersecurity standards, education, and privacy-focused web development. 

## Author
**Kathryn Richardson**

M.S. Computer Science - Security Specialization
Rochester Institute of Technology - Golisano College of Computer and Information Sciences

This project is part of my cybersecurity portfolio, as I continue to work towards my goal of a career in cybersecurity.

Feedback, suggestions, and constructive criticism are welcome! If you have suggestions for future versions or improvements, feel free to reach out

Email: kmr4232@rit.edu
