import React from 'react';
import NavItems from "./NavItems"
import Button from "../../Assets/Button/Button"
import './Navbar.css'

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className='sticky'>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">JV</h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {NavItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <a href='https://github.com/toastMaduro-hub' target='_blank' rel="noreferrer"><Button>GitHub</Button></a>
                </nav>
            </div>
        )
    }
}

export default Navbar

