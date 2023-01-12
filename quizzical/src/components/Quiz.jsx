
import Question from "./Question"

export default function Quiz(props){
    const {questions, handleSelected, endQuiz, stopQuiz, total, reset} = props

    let questionBlock = questions.map((question, index)=>{

        return <Question 
            question={question.question}
            answers={question.answers}
            id={index} 
            handleSelected = {handleSelected}
            stopQuiz = {stopQuiz}
            />
    })

    return(
        <main className="quiz">
            <h1>Quiz Time!</h1>
            {questionBlock}
            <div className="footer">
                {stopQuiz && 
                <p>You scored {total}/5 correct answers</p>}
                {!stopQuiz ? 
                <button 
                className="main-btn"
                onClick={endQuiz}
                >
                    Check answers
                </button> 
                    : 
                <button 
                className="main-btn"
                onClick={reset}
                >
                    Play Again
                </button>}
            </div>
            
            
        </main>
    )
}