import star from '../assets/images/star.png'
import dot from '../assets/images/dot.png'


export default function Card(props){
    console.log(props)
            let tag;
            if(props.openSpots === 0){
                tag = "SOLD OUT"
            }else if(props.location === "Online"){
                tag = "ONLINE"
            }
    return (
        <article className={'article-card ' + props.spClass}>
                <div className='img-box'>
                    <img src={`../images/${props.img}`} alt="Swimmer photography" className="article-img" />
                    {tag && <span className='status'>{tag}</span>}
                </div>
                    <div className='article-data'>
                        <div className='article-review'>
                            <img src={star} alt="star icon" />
                            <span className='rating'>{props.stats.rating}</span>
                            <span>({props.stats.reviewCount})</span>
                            <img src={dot} alt="dot"/>
                            <span>{props.location}</span>
                        </div>
                    <p className="article-description">{props.title}</p>
                    <p className='article-price article-description'><strong>From {props.price}</strong> / person</p>
                    </div>
            </article>
    )
}