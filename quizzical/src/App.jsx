import { useEffect, useState } from 'react'
import './App.css'
import Welcome from './components/welcome'
import Quiz from './components/Quiz'
import Confetti from 'react-confetti'

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [stopQuiz, setStopQuiz ] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [total, setTotal] = useState(0)

  function handleStart(){
    setStartQuiz(prev=>!prev)
  }

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      .then(response=> response.json())
      .then(data=> {
        setQuestions(data.results.map(result=>{
          let randomNum = Math.floor(Math.random() * 4);
          let answersArray = result.incorrect_answers.map(elem=>({
                answer: elem,
                isCorrect : false,
                isSelected : false,
                isDisabled: false
              }))

          answersArray.splice(randomNum, 0, { answer: result.correct_answer,
                isCorrect : true,
                isSelected : false,
                isDisabled: false
              })

          return {
            question: result.question,
            answers: answersArray
          }
        }))
      })
  },[])

  function handleSelected(qId, aId){

    let questionId = Number(qId);
    let answerId = Number(aId);

    if(!stopQuiz){
      setQuestions(prev=>{
        return prev.map((item, index)=>{
          if(questionId != index) return item;
          return {
            ...item,
            answers: item.answers.map((obj, j)=>{
              if(answerId != j) return {...obj, isSelected: false};
              return {
                ...obj,
                isSelected : true
              }
            })
          }
        })
      })
    }
  }


  function endQuiz(){
    setStopQuiz(true)
    let total= []
    questions.forEach(question=>{
      let correct = question.answers.filter(answer=>{
        return answer.isCorrect && answer.isSelected 
      })
      if(correct[0]) total.push(correct);
    })
    setTotal(total.length)
  }

  function reset(){
    window.location.reload();
  }
  
  return (
    <main className="App">
      {!startQuiz && <Welcome handleStart={handleStart}/>}
      {total === 5 && <Confetti/>}
      {startQuiz && 
      <Quiz
      handleSelected = {handleSelected}
      questions = {questions}
      endQuiz = {endQuiz}
      stopQuiz = {stopQuiz}
      total = {total}
      reset ={reset}
      />}
    </main>
  )
}

export default App
