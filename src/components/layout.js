import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/styles.css'
import { Helmet } from 'react-helmet'

import layoutStyles from './modules/layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Helmet>
                <title>Quest for Cute</title>
                <script src="https://kit.fontawesome.com/457588a6e7.js" crossorigin="anonymous"></script>
            </Helmet>
            <div className={layoutStyles.content}>
                <Header />
                <div className={layoutStyles.pages}>
                {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout