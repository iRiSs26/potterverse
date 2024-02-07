import { useState } from 'react';
import logo from './assets/th1.jpg';
import logo1 from './assets/rec18.jpg';
// import React,{useState} from "react";

import './Quiz.css'

function Quiz() {
    // const [count, setCount] = useState(0)
    const [showFinalResults,setFinalResults]=useState(false);
    const [score,setScore]=useState(0);
    const [currentQuestion,setCurrentQuestion]=useState(0);

    const questions = [
        {
          text: "What is the capital of America?",
          options: [
            { id: 0, text: "New York City", isCorrect: false },
            { id: 1, text: "Boston", isCorrect: false },
            { id: 2, text: "Santa Fe", isCorrect: false },
            { id: 3, text: "Washington DC", isCorrect: true },
          ],
        },
        {
          text: "What year was the Constitution of America written?",
          options: [
            { id: 0, text: "1787", isCorrect: true },
            { id: 1, text: "1776", isCorrect: false },
            { id: 2, text: "1774", isCorrect: false },
            { id: 3, text: "1826", isCorrect: false },
          ],
        },
        {
          text: "Who was the second president of the US?",
          options: [
            { id: 0, text: "John Adams", isCorrect: true },
            { id: 1, text: "Paul Revere", isCorrect: false },
            { id: 2, text: "Thomas Jefferson", isCorrect: false },
            { id: 3, text: "Benjamin Franklin", isCorrect: false },
          ],
        },
        {
          text: "What is the largest state in the US?",
          options: [
            { id: 0, text: "California", isCorrect: false },
            { id: 1, text: "Alaska", isCorrect: true },
            { id: 2, text: "Texas", isCorrect: false },
            { id: 3, text: "Montana", isCorrect: false },
          ],
        },
        {
          text: "Which of the following countries DO NOT border the US?",
          options: [
            { id: 0, text: "Canada", isCorrect: false },
            { id: 1, text: "Russia", isCorrect: true },
            { id: 2, text: "Cuba", isCorrect: true },
            { id: 3, text: "Mexico", isCorrect: false },
          ],
        },
      ];


const optionClicked=(isCorrect)=>{
    if(isCorrect){
        setScore(score+1);
    }

    if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
};

const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  
    return (
        <>
        <div className='header'>
        <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto',borderRadius:'5px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        <div className="navigation-bar">

<a href="#">Quiz</a>
{/* <NavLink to='./About'>quiz</NavLink> */}
<a href="/info">Character Quotient</a>
<a href="/news">News</a>
<a href="#">FicFathom</a>
<a href="#">Chamber of Chat</a>
<a href="/about">Patronus</a>

</div>

<div className='logo1'>
<div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Grab your wand, don your robes, and prepare to immerse yourself in a world where anything is possible. Are you ready to prove your magical prowess?</p>
                    <a href='#' class="btn">Let the quiz begin...</a>

                   
</div>

    
    <img src={logo1}></img>
</div>


<div className='App'>
    <h1>usa quiz</h1>

    <h2>Current score:{score}</h2>
    {showFinalResults?(
        <div className='final-results'>
        <h1>final results</h1>
        <h2>
            {score} out of {questions.length} correct - ({(score/questions.length)*100}%)
            
        </h2>
        <button onClick={()=>restartGame()}>Restart game</button>
    </div>
    ):(






<div className='question-card'>
    <h2>Question {currentQuestion +1} out of {questions.length}</h2>
    <h3 className='question-text'>{questions[currentQuestion].text}</h3>
    <ul>
        {questions[currentQuestion].options.map((option)=>{
            return(
                <li onClick={()=>optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
        })}
        
    </ul>
</div>
    )}


</div>

        </>
    );
}
export default Quiz;