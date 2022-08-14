import HeroImg from "../assets/images/Group-77.png"

export default function Hero(){
    return (
        <section className="hero-section">
            <img src={HeroImg} alt="Hero Collage" className="hero-img" />
            <div className="Hero-data">
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>        
                </div>
        </section>
    )
        
    
}

