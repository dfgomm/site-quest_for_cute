import React from "react"
import Layout from '../components/layout'
import aboutStyles from '../components/modules/about.module.css'

import img from '../img/deidre_jeromy.jpg'

const AboutPage = () => {
    return (
        <Layout>
            <div className={aboutStyles.about_container}>
            <img src={img} alt="Deidre and her husband."></img>
            <h1>Remember when you believed there was magic in everything, and anything was possible?</h1>
            <p>Create a lifestyle where you balance work and play, emphasis on the play!
            
            The office may be the opposite of fun, but you can sneak in some joy in a subtle and practical way. <br></br><br></br>
            
            My name is Deidre: I am a wife, foster kitty mom, and chocolate addict who grew up on a healthy dose of anime. I love all things cute, and I know you do too!<br></br><br></br>
            
            Life can feel full of responsibility with little time for the things that make you happy. Just because you have adult responsibilities doesn’t mean you need to have adult tastes. Surround yourself with things that bring you joy, and make your inner kid smile. <br></br><br></br>
            
            Sometimes, all we need is a visible reminder of happiness to face the day.<br></br><br></br>
            
            What I create is a functional reminder of joy! Practical, usable every day, visible yet discreet. Looking at it will make you happy and remind you that there is more to you than work, and no one will say that you’re not business casual.<br></br><br></br>
            
            Imagine the feeling of rebellion while you’re in a meeting, only to take out your pen. Suddenly, that meeting doesn’t seem so intimidating. Imagine taking a a test and pulling our your pencil, and you smile and relax. Work and school are stressful, and you deserve to be a whimsical and relaxed.<br></br><br></br>
            
            My mission is to restore your sense of wonder, and to remind you to keep dreaming.<br></br><br></br>
            
            XOXO,<br></br>
Deidre</p>
</div>
        </Layout>
    )
}

export default AboutPage