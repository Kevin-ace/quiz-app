import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'

export const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const optionArray = [option1, option2, option3, option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                optionArray[question.ans-1].current.classList.add("correct");
            }
        }
    };

    const nextQuestion = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return;
            }
            setIndex(prev => prev + 1);
            setQuestion(data[index + 1]);
            setLock(false);
            optionArray.forEach(option => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
            });
        }
    };

    const resetQuiz = () => {
        setIndex(0);
        setQuestion(data[0]);
        setLock(false);
        setScore(0);
        setResult(false);
    };

    return (
        <div className='Container'>
            <h1>Quiz App</h1>
            <hr />
            {result ? (
                <div className="result">
                    <h2>You Scored {score} out of {data.length}</h2>
                    <button onClick={resetQuiz}>Try Again</button>
                </div>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                        <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                        <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                        <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
                    </ul>
                    <button onClick={nextQuestion}>Next</button>
                    <div className='index'>{index + 1} of 5 questions</div>
                </>
            )}
        </div>
    )
}

export default Quiz
