import React from "react"
import Layout from '../components/layout'
import contactStyles from '../components/modules/contact.module.css'


const SuccessPage = () => {
    return (
        <Layout>
            <div className={contactStyles.contact_container}>
                <div>
                    <p>Thanks for your submission. I'll get back to you as soon as I can!</p>
                </div>
                <div>
                    <form method="post" netlify-honeypot="bot-field" action="/success" data-netlify="true">
                        <input type="hidden" name="bot-field" />
                        <label>Name</label>
                        <br></br>
                        <input type="text" name="name" id="name" className={contactStyles.datainput} /><br></br>
                        <label>Email</label>
                        <br></br>
                        <input type="email" name="email" id="email" className={contactStyles.datainput} /><br></br>
                        <label>Subject</label>
                        <br></br>
                        <input type="text" name="subject" id="subject" className={contactStyles.datainput} /><br></br>
                        <label>Message</label>
                        <br></br>
                        <textarea name="message" id="message" rows="10" className={contactStyles.datainput} /><br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default SuccessPage