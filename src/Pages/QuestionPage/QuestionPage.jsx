import React from 'react'
import Question from '../../Components/Question/Question'

const QuestionPage = () => {

    const questions = [
        {
            question: 'What is the default value of a boolean variable in Java?',
            answers: ['true', 'false', '0', 'null'],
            correct: 1,
            explanation: 'The default value of a boolean variable is false.'
        },
        {
            question: 'Which of the following is a valid declaration of a char?',
            answers: ['char ch = \'ab\';', 'char ch = \'a\';', 'char ch = "a";', 'char ch = 1;'],
            correct: 1,
            explanation: 'A char must be declared with single quotes.'
        },
        {
            question: 'Which keyword is used to prevent a variable from being changed?',
            answers: ['final', 'static', 'const', 'immutable'],
            correct: 0,
            explanation: 'The final keyword makes a variable unchangeable.'
        },
        {
            question: 'What is the size of an int in Java?',
            answers: ['8 bits', '16 bits', '32 bits', '64 bits'],
            correct: 2,
            explanation: 'An int in Java is 32 bits in size.'
        },
        {
            question: 'Which of the following is not a Java keyword?',
            answers: ['static', 'Boolean', 'void', 'private'],
            correct: 1,
            explanation: 'Boolean is a class, not a keyword.'
        },
        {
            question: 'What is the main method signature in Java?',
            answers: ['public static void main(String args[])', 'public void main(String args)', 'static public void main(String args[])', 'void main(String args[])'],
            correct: 0,
            explanation: 'This is the correct signature for the main method.'
        },
        {
            question: 'Which of the following is a superclass of all classes in Java?',
            answers: ['Object', 'String', 'Class', 'Main'],
            correct: 0,
            explanation: 'All classes in Java inherit from the Object class.'
        },
        {
            question: 'Which of the following is used to create an object in Java?',
            answers: ['new ClassName()', 'ClassName()', 'create ClassName', 'ClassName new'],
            correct: 0,
            explanation: 'The new keyword is used to create an object.'
        },
        {
            question: 'What is the output of the following code: System.out.println(10 + 20 + "Hello");?',
            answers: ['30Hello', 'Hello30', 'Hello', 'Error'],
            correct: 0,
            explanation: 'The numbers are added first, then concatenated with the string.'
        },
        {
            question: 'Which method is used to start a thread in Java?',
            answers: ['start()', 'run()', 'begin()', 'execute()'],
            correct: 0,
            explanation: 'The start() method is used to begin the execution of a thread.'
        },
        {
            question: 'What is the purpose of the this keyword in Java?',
            answers: ['Refers to the current object', 'Refers to the superclass', 'Refers to the parent class', 'Refers to the static method'],
            correct: 0,
            explanation: 'The this keyword is used to refer to the current instance of the class.'
        },
        {
            question: 'Which of the following is a valid comment in Java?',
            answers: ['// This is a comment', '/* This is a comment */', '# This is a comment', 'Both a and b'],
            correct: 3,
            explanation: 'Both // and /* */ are valid comment styles in Java.'
        },
        {
            question: 'What is the output of the following code: System.out.println(5 + 5 + "5");?',
            answers: ['55', '10', '105', 'Error'],
            correct: 2,
            explanation: 'The numbers are added first, then concatenated with the string.'
        },
        {
            question: 'Which keyword is used to handle exceptions in Java?',
            answers: ['try-catch', 'throw-try', 'catch-throw', 'try-except'],
            correct: 0,
            explanation: 'The try-catch block is used to handle exceptions.'
        },
        {
            question: 'What is the default value of an integer variable in Java?',
            answers: ['0', '1', 'null', 'undefined'],
            correct: 0,
            explanation: 'The default value of an int variable is 0.'
        },
        {
            question: 'Which of the following is a valid constructor in Java?',
            answers: ['public ClassName()', 'ClassName()', 'private ClassName()', 'All of the above'],
            correct: 3,
            explanation: 'Constructors can have different access modifiers.'
        },
        {
            question: 'What does the final keyword signify in Java?',
            answers: ['Cannot be changed', 'Can be overridden', 'Can be inherited', 'None of the above'],
            correct: 0,
            explanation: 'The final keyword indicates that a variable or method cannot be modified.'
        },
        {
            question: 'Which of the following is used to create a package in Java?',
            answers: ['package', 'import', 'class', 'namespace'],
            correct: 0,
            explanation: 'The package keyword is used to create a package.'
        }
    ]

    const randomIndex = Math.floor(Math.random() * questions.length)
    const randomQuestion = questions[randomIndex]

    return (
        <div>
            <Question question={randomQuestion} />
        </div>
    )

}

export default QuestionPage