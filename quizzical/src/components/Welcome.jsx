

export default function Welcome(props){


    return(
        <div className="intro">
            <h1 className="title">Quizzical</h1>
            <p>The general culture quiz</p>
            <button className="main-btn" 
            onClick={props.handleStart}
            >Start quiz</button>
        </div>
    )
}