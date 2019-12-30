import React from 'react'

import footerStyles from './modules/footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footer_container}>
                <div className={footerStyles.footer_social}>
                    <h3>Stay Connected</h3>
                    <a href="https://www.instagram.com/questforcute/" target="__blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/questforcute/" target="__blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.pinterest.com/questforcute/" target="__blank"><i class="fab fa-pinterest"></i></a>
                </div>
                <div className={footerStyles.footer_copyright}>
                    <p>&copy; 2020 Quest For Cute </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer