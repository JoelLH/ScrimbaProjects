import '../App.css';
import ReactLogo from "../react-logo.png"

export default function Header(){
    return(
        <header>
            <div className='header-logo-box'>
                <img src={ReactLogo} alt="React Logo" className='header-logo'/>
                <h2>ReactFacts</h2>
            </div>
            
            <nav className='main-nav'>
                <h3>React Course - Project 1</h3>
            </nav>
            
        </header>
    )
}