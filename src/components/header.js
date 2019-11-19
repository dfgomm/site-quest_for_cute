import React from 'react'

import headerStyles from './modules/header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerNav_container}>
                <div className={headerStyles.headerNav_logo}>Logo</div>
                <div>
                    <ol className={headerStyles.headerNav_links}>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ol>
                </div>
            </div>
        </header>
    )
}

export default Header