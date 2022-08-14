import '../App.css';
import IconLarge from '../react-icon-large.png'

export default function Main(){
    return (
        <main className='main-content'>
            <h1 className='title'>Fun facts about React</h1>
            <ul className='facts-ol'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enetrprise apps, including mobile apps</li>
            </ul>
            <img src={IconLarge} alt="" className='main-section-logo' />
        </main>
    )
}