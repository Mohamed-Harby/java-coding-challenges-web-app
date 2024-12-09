import React, { useState } from 'react';
import './Question.scss';
const Question = ({ question }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userSelectedAnswer, setUserSelectedAnswer] = useState(false);
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setShowExplanation(true);
        setUserSelectedAnswer(true);
    };

    return (
        <div className="question-container">
            <div className="question-content">
                <h2>{question.question}</h2>
                <ul>
                    {question.answers.map((answer, index) => (
                        <ui key={index}
                            onClick={() => handleAnswerClick(answer)}
                            onMouseEnter={() => setHoveredAnswer(answer)}
                            onMouseLeave={() => setHoveredAnswer(null)}
                            className={
                                (userSelectedAnswer && answer == selectedAnswer && answer === question.answers[question.correct] ? 'correct' :
                                    userSelectedAnswer && answer == selectedAnswer && answer !== question.answers[question.correct] ? 'incorrect' :
                                        ""
                                )
                            }
                        >
                            <p className="char-idx">{String.fromCharCode(65 + index)}.</p>
                            <p className="ans"> {answer}</p>
                        </ui>
                    ))}
                </ul>


                {userSelectedAnswer && selectedAnswer == question.answers[question.correct] && (
                    <div className="correct-ans">
                        <p>Correct!</p>
                    </div>
                )}
                {userSelectedAnswer && selectedAnswer !== question.answers[question.correct] && (
                    <div className="incorrect-ans">
                        <p>Incorrect!</p>
                    </div>
                )}

                {showExplanation && (
                    <div className="explanation">
                        <p><b>Correct answer is: <br /></b>{String.fromCharCode(65 + question.correct) + ". " + question.answers[question.correct]}</p>
                        <p><b>Explanation: <br /></b>{question.explanation}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Question;