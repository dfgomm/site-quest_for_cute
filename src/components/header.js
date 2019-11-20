import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './modules/header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerNav_container}>
                <div className={headerStyles.headerNav_logo}><Link to="">Logo</Link></div>
                <div>
                    <ol className={headerStyles.headerNav_links}>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ol>
                </div>
            </div>
        </header>
    )
}

export default Header