import Card from './Card'
import data from '../data'





export default function Experiences(){
    const card = data.map(obj=>
        <Card
        key={obj.id}
        {...obj}
        // img={obj.img}
        // rating={obj.stats.rating}
        // reviewCount={obj.stats.reviewCount}
        // location={obj.location}
        // title={obj.title}
        // price={obj.price}
        // openSpots={obj.openSpots}
        />
        )
    return (
        <section className='exp-section'>
            {card}
        </section>
    )
}

