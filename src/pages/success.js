import React from "react"
import Layout from '../components/layout'
import contactStyles from '../components/modules/contact.module.css'


const SuccessPage = () => {
    return (
        <Layout>
            <div className={contactStyles.contact_container}>
                <div>
                    <p>Want to say hi? Feel free!</p>
                </div>
                <div>
                    <form name="contact" method="post" netlify-honeypot="bot-field" action="/success/" data-netlify="true">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <label>
                            Name
                            <br></br>
                            <input type="text" name="name" id="name" className={contactStyles.datainput} />
                        </label>
                        <br></br>
                        <label>
                            Email
                            <br></br>
                            <input type="email" name="email" id="email" className={contactStyles.datainput} />
                        </label><br></br>
                        <label>
                            Subject
                            <br></br>
                            <input type="text" name="subject" id="subject" className={contactStyles.datainput} />
                        </label>
                        <br></br>
                        <label>
                            Message
                            <br></br>
                            <textarea name="message" id="message" rows="10" className={contactStyles.datainput} />
                        </label><br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default SuccessPage