import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.scss';

const tips = [
  "Use meaningful variable names to make your code more readable.",
  "Always close your resources (like files and database connections) to prevent memory leaks.",
  "Utilize Java's built-in collections framework to simplify data management.",
  "Make use of Java's exception handling to manage errors gracefully.",
  "Leverage Java's strong type system to catch errors at compile time.",
  "Comment your code to explain complex logic and improve maintainability.",
  "Use the 'final' keyword to create constants and prevent accidental changes.",
  "Take advantage of Java's garbage collection to manage memory automatically.",
  "Keep your methods short and focused on a single task for better readability.",
  "Familiarize yourself with Java's API documentation to utilize built-in methods effectively."
];

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTip, setCurrentTip] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Select a random tip when component mounts
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setCurrentTip(randomTip);
  }, []);

  useEffect(() => {
    if (!currentTip) return;

    if (charIndex < currentTip.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentTip[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 64);
      return () => clearTimeout(timer);
    }
  }, [charIndex, currentTip]);

  return (
    <div className="home">
      <img src="/logo.svg" alt="Java Quizzy" className='logo-in-home' />
      <div className="quote-container">
        <p className="animated-text"> {displayText}</p>
      </div>
      <div className="cta-buttons">
        <Link to="/questions" className="start-quiz-btn">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
