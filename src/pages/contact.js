import React from "react"
import Layout from '../components/layout'
import contactStyles from '../components/modules/contact.module.css'


const ContactPage = () => {
    return (
        <Layout>
            <div className={contactStyles.contact_container}>
                <div><p>Want to say hi? Feel free!</p></div>
                <div>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                        <input type="hidden" name="bot-field" />
                        <label>
                            Name<br></br>
                            <input type="text" name="name" id="name" className={contactStyles.datainput} /><br></br>
                        </label>
                        <label>
                            Email<br></br>
                            <input type="email" name="email" id="email" className={contactStyles.datainput} /><br></br>
                        </label>
                        <label>
                            Subject<br></br>
                            <input type="text" name="subject" id="subject" className={contactStyles.datainput} /><br></br>
                        </label>
                        <label>
                            Message<br></br>
                            <textarea name="message" id="message" rows="10" className={contactStyles.datainput} /><br></br>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage