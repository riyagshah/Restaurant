import React from 'react'
import logo from '../assets/logo.svg'

const navbarOptions=[
    {
        iconName:"person_outline",
        label:"Sign in"
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
const Navbar = (props) => {
  
  return (
 
    <section className="navbar">
        
        <div className="container">
            <img className="logo" src={logo}/>
            <div className="location">
                <span className="city"> {props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>
            <div className="navbar-options">

{navbarOptions.map((navbaroptions) =>(
     <div key={navbaroptions.iconName} className="navbar-option">
     <span className="material-icons"> {navbaroptions.iconName}</span> {navbaroptions.label}
 </div>
))}



                {/* <div className="navbar-option">
                    <span className="material-icons"> person_outline</span> Sign In
                </div>
                <div className="navbar-option">
                    <span className="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div className="navbar-option">
                    <span className="material-icons">support</span> Help
                </div>
                <div className="navbar-option">
                    <span className="material-icons">search</span> Search
                </div> */}
            </div>
        </div>
       
    </section>
  )
}

export default Navbar