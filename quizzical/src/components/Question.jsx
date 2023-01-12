import { useEffect } from "react";
import Answer from "./Answer";


export default function Question(props){

    const {id, handleSelected, stopQuiz, question, answers} = props
    const decodeQuestion = decodeHtml(question)

    function decodeHtml(html){
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value
    }
    
    return(
        <article className="question">
            <p className="title">{decodeQuestion}</p>
            <div className="radios-outer">
                {answers.map((answer, index)=>{
                    return <Answer 
                        answer={decodeHtml(answer.answer)}
                        isCorrect={answer.isCorrect} 
                        isSelected={answer.isSelected}
                        stopQuiz = {stopQuiz}
                        qId={id} 
                        aId={index}
                        handleSelected= {handleSelected}
                        />
                })}
            </div>
        </article>
    )
}