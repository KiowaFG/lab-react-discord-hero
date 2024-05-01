import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/menu-icon.png"

function Header(){
    return(
        <header> 
        <nav className='navbar'>
        <img className='discordLogo' src={discordLogo} alt="discordLogo" />
        <img className='menuIcon' src={menuIcon} alt="menuIcon" />

        </nav>
      </header>
    )
}

export default Header;