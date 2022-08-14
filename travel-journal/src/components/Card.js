

export default function Card(props){
    console.log(props)
    let hr = false;
    if(props.obj.id != 3 ){
        hr = true;
    }
    return (
        <article className="card-box">
                <div className="card">
                    <img src={`./images/${props.obj.imageUrl}`} alt="Card img" className="card-img" />
                <div className="card-data">
                    <div className="stats"> 
                        <span className="location">
                            <img src="./images/marker.png" alt="" className="marker" />
                            <p className="country">{props.obj.location}</p>
                        </span>
                        <span className="stats-link">
                            <a href={props.obj.googleMapsUrl}>View on Google Maps</a>
                        </span>
                    </div>
                    <h2 className="card-title">{props.obj.title}</h2>
                    <p className="card-date">{`${props.obj.startDate} - ${props.obj.endDate}`}</p>
                    <p className="card-description">{props.obj.description}</p>
                </div>
            </div>
            {hr && <hr className="card-hr"/>}
        </article>
        
    )
}