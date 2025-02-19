import { useState } from "react";

function Quiz() {
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Albert Einstein"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "Which programming language is known for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the boiling point of water at sea level?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C"
    }
  ];

  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [submit, setSubmit] = useState(false);
  function handleNext() {
    if (selectedOption === quizQuestions[index].answer) {
      setScore(score + 1);
    }
    
    if (index < quizQuestions.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
    } else {
      setSubmit(true);
    }
  }
  return (
    <div>
      <h1>Quiz App</h1>
      
      {!submit ? (
        <div>
          <p>{index + 1}/10</p>
          <h2>{quizQuestions[index].question}</h2>
          {quizQuestions[index].options.map((option, idx) => (
            <label key={idx} style={{ display: "block", cursor: "pointer" }}>
              <input 
                type="radio" 
                name="quiz" 
                value={option} 
                checked={selectedOption === option} 
                onChange={() => setSelectedOption(option)} 
              />
              {option}
            </label>
          ))}
          <button onClick={handleNext} disabled={!selectedOption}>
            {index === quizQuestions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <h2>Results</h2>
          <p>Total Questions:10</p>
          <p>Total Score:10</p>
          <p>Correct Answers :{score}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;

