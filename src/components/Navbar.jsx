import React from 'react'
import Logo from '../assets/logo.svg';

const navbarOptions = [
    {
        iconName:"person_outline",
        label:"Sign In"
    },
    {
        iconName:"shopping_bag",
        label:"Cart"
    },
    {
        iconName:"support",
        label:"Help"
    },
    {
        iconName:"search",
        label:"Search"
    }
]

export const Navbar = (props) => {
  return (
    <section className="navbar">
        <div className="container">
            <img className="logo" src={Logo}/>
            {/* <img className="logo" src="assets/logo.svg"/> */}
            <div className="location">
                <span className="city">{props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>
            <div className="navbar-options">
                {navbarOptions.map((navbarOptions=>(
                    <div key={navbarOptions.iconName} className="navbar-option">
                        <span className="material-icons">{navbarOptions.iconName}</span> {navbarOptions.label}
                    </div>
                )))}
               
               
            </div>
        </div>
    </section>
  )
}
