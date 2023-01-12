

export default function Answer(props){

    const {answer, aId, handleSelected, isSelected, isdisabled, stopQuiz, isCorrect} = props
    const qId = props.qId

    let styles=""
    
    if(!stopQuiz){
        styles = {
        backgroundColor: isSelected ? "#D6DBF5" : "unset"
        }
    }else{
        styles = {
        backgroundColor: isCorrect ? "#94D7A2" : isSelected ? "#F8BCBC" : "unset",
        opacity: isCorrect ? 1 : .5
        }
    }

    

    return(
        <label 
            className="radio-label" 
            htmlFor={`q${qId}a${aId}`}
            onClick={(e)=>handleSelected(qId, aId)}
            style = {styles}
            >
            <input 
            type="radio" 
            id={`q${qId}a${aId}`} 
            name={`q${qId}`}
            disbaled={isdisabled}
            />
            <span>{answer}</span>
        </label>
    )
}