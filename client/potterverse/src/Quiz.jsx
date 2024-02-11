import { useState } from 'react';
import logo from './assets/th1.jpg';
import logo1 from './hog.jpg';
// import React,{useState} from "react";
import { NavLink } from 'react-router-dom';

import './Quiz.css'

function Quiz() {
    // const [count, setCount] = useState(0)
    const [showFinalResults,setFinalResults]=useState(false);
    const [score,setScore]=useState(0);
    const [currentQuestion,setCurrentQuestion]=useState(0);

    const questions = [
        {
          text: "Which creature can be summoned using the spell Expecto Patronum?",
          options: [
            { id: 0, text: "Dementors", isCorrect: false },
            { id: 1, text: "Hippogriffs", isCorrect: false },
            { id: 2, text: "House-elves", isCorrect: false },
            { id: 3, text: "Patronuses", isCorrect: true },
          ],
        },
        {
          text: "What is the name of the tournament featured in Harry Potter and the Goblet of Fire?",
          options: [
            { id: 0, text: "The Triwizard Tournament", isCorrect: true },
            { id: 1, text: "The quidditch World Championship", isCorrect: false },
            { id: 2, text: "The Yule Ball", isCorrect: false },
            { id: 3, text: "The Battle of Hogwarts", isCorrect: false },
          ],
        },
        {
          text: "Who is the author of the book Fantastic Beasts and Where to Find Them in the Harry Potter universe??",
          options: [
            { id: 0, text: "Albus Dumbledore", isCorrect: false },
            { id: 1, text: "Newt Scamander", isCorrect: true },
            { id: 2, text: "Rubeus Hagrid", isCorrect: false },
            { id: 3, text: "Gilderoy lockhart", isCorrect: false },
          ],
        },
        {
          text: "Which professor teaches Defense Against the Dark Arts in Harry Potter and the Prisoner of Azkaban?",
          options: [
            { id: 0, text: "Severus Snape", isCorrect: false },
            { id: 1, text: "Remus Lupin", isCorrect: true },
            { id: 2, text: "Dolores Umbridge", isCorrect: false },
            { id: 3, text: "Gilderoy Lockhart", isCorrect: false },
          ],
        },
        {
          text: "Which character is revealed to be the true master of the Elder Wand in Harry Potter and the Deathly Hallows?",
          options: [
            { id: 0, text: "Severus Snape", isCorrect: false },
            { id: 1, text: "Albus Dumbledore", isCorrect: true },
            { id: 2, text: "Dolores Umbridge", isCorrect: false },
            { id: 3, text: "Gilderoy Lockhart", isCorrect: false },
          ],
        },
        {
          text: " Which Horcrux is destroyed first by Harry, Ron, and Hermione in Harry Potter and the Deathly Hallows?",
          options: [
            { id: 0, text: "Tom Riddle's Diary", isCorrect: false },
            { id: 1, text: "Marvolo Gaunts ring", isCorrect: false },
            { id: 2, text: "Salazar Slytherins locket", isCorrect: true },
            { id: 3, text: "Helga Hufflepuffs cup", isCorrect: false },
          ],
        },
        {
          text: "Which potion does Harry obtain from Professor Slughorn's memory?",
          options: [
            { id: 0, text: "Polyjuice Potion", isCorrect: false },
            { id: 1, text: "Felix Felicis", isCorrect: true },
            { id: 2, text: "Amortentia", isCorrect: true },
            { id: 3, text: "Draught of Living Dead", isCorrect: false },
          ],
        },
      ];


// const optionClicked=(isCorrect)=>{
//     if(isCorrect){
//         setScore(score+1);
//     }

//     if (currentQuestion + 1 < questions.length) {
//         setCurrentQuestion(currentQuestion + 1);
//       } else {
//         setFinalResults(true);
//       }
// };

// const restartGame = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setFinalResults(false);
//   };

// --------------

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle the questions array
const shuffledQuestions = shuffleArray(questions).slice(0, 5);

const optionClicked = (isCorrect) => {
  if (isCorrect) {
      setScore(score + 1);
  }

  if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
  } else {
      setFinalResults(true);
  }
};

const restartGame = () => {
  setScore(0);
  setCurrentQuestion(0);
  setFinalResults(false);
};

// --------------

  
    return (
        <>
        <div className='header'>
        <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto',borderRadius:'15px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        
<div className='navigation-bar'>
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/about">Character Quotient</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/fic">FicFathom</NavLink>
                <NavLink to="#">Chamber of Chat</NavLink>
                <NavLink to="/latest">Patronus</NavLink>
            </div>
            <div className='logo1'>
                <div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Grab your wand, don your robes, and prepare to immerse yourself in a world where anything is possible. Are you ready to prove your magical prowess?</p>
                    <NavLink to='#' className="btn">Let the quiz begin...</NavLink>
                </div>

                <div className="image-container">
                <img src={logo1} alt="Logo1" /></div>
            </div>


<div className='App'>
    <h1>How much of a potterhead are you?</h1>

    <h2>Current score:{score}</h2>
    {showFinalResults?(
        <div className='final-results'>
        <h1>Final results</h1>
        <h2>
            {score} out of {5} correct - ({(score/5)*100}%)
            
        </h2>
        <button onClick={()=>restartGame()}>Restart Quiz</button>
    </div>
    ):(






<div className='question-card'>
    <h2>Question {currentQuestion +1} out of { 5}</h2>
    <h3 className='question-text'>{questions[currentQuestion].text}</h3>
    <ul>
      <div className='ques'>
        {questions[currentQuestion].options.map((option)=>{
            return(
                <li onClick={()=>optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
        })}
        </div>
        
    </ul>
</div>
    )}


</div>

<footer className='footer'>
            <div className='containerf'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>About us</h4>
                        <ul>
                            <li><NavLink to='#'>Our Services</NavLink></li>
                            <li><NavLink to='#'>Privacy Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Get Help</h4>
                        <ul>
                            <li><NavLink to='#'>FAQ</NavLink></li>
                            <li><NavLink to='#'>Know More</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Contact Us</h4>
                        <ul>
                            <li><NavLink to='#'>Instagram</NavLink></li>
                            <li><NavLink to='#'>Telegram</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        

        </>
    );
}
export default Quiz;