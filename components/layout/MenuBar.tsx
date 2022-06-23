import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../../images/WWD-logo.png'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="content flex flex-wrap flex-v-center">
                <a className="mobile" href='/'>
                    <img src={logo.src} alt='Wander Women DAO Logo' className='limitWidth' style={{width: "75px", 'marginTop': '2rem'}}/>
                    <h3 className='semibold smallMargin'>Wander Women DAO</h3>
                    <h4 className='notBold noMargin' style={{'fontSize': '1.25rem'}}>Venture Studio</h4>
                </a>
                <a className="tablet-desktop" href='/'><h3 className='notBold'>Wander Women DAO • Venture Studio</h3></a>

                <div className="social-links tablet-desktop">
                    <a href='https://discord.gg/Xv7q9atKZw' target="_blank" rel="noreferrer" aria-label='Discord' className='alternateHover'><FontAwesomeIcon icon={faDiscord} /></a>
                    <a href='https://twitter.com/WanderWomenDAO' target="_blank" rel="noreferrer" aria-label='Twitter' className='alternateHover'><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href='https://www.instagram.com/wanderwomendao/' target="_blank" rel="noreferrer" aria-label='Instagram' className='alternateHover'><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </nav>
    )
}

export default MenuBar;