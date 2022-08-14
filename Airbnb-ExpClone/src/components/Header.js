import AirbnbLogo from "../assets/images/airbnb-1.png"

export default function Header(){
    return (
        <header className="main-header">
            <img className="header-logo" src={AirbnbLogo} alt="Aribnb header logo" />
        </header>
    )
}