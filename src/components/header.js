import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './modules/header.module.css'

import logo from '../img/logo.png'


const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerNav_container}>
                <Link to="/"><img src={logo} alt="Logo" className={headerStyles.headerNav_logo} /></Link>
                <div>
                    <ol className={headerStyles.headerNav_links}>
                        <li><h1><a href="https://www.etsy.com/shop/QuestforCute" target="__blank">Shop</a></h1></li>
                        <li><h1><Link to="/blog">Blog</Link></h1></li>
                        <li><h1><Link to="/about">About</Link></h1></li>
                        <li><h1><Link to="/contact">Contact</Link></h1></li>
                    </ol>
                </div>
            </div>
        </header>
    )
}

export default Header