import React from 'react';

function Li(props) {
    return(
        <li>
            <a href='#/'>
                {props.title}
            </a>
        </li>
    )
}
function NavBar() {
    const navItems = ["Home", "Categories", "Favorites", "History", "Deals"]
    return(
        <nav className="lf-navbar">     
            <ul className="lf-navUl">
                {navItems.map(title =>{
                    return <Li key={title} title={title}/>
                    }) 
                }
            </ul>
        </nav>
    )
}

export default NavBar;