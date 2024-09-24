import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
        <img
                src={getImageUrl("hero/graduation_pic.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <h1 className={styles.title}>Hi, I am Joshua</h1>
            <p className={styles.description}> 
            My name is Joshua Nodler and I am a Software Engineer!  I began my college 
            career at Michigan State University where I studied Computer Science
            for three years.  After transferring to the University of Massachusetts Amherst
            I earned a Bachelor of Arts in Computer Science from the Manning College of Information & Computer Science
            in the Summer of 2023. I am currently completing my final graduate level semester at Bowling Green 
            State University where I will earn a Master of Science degree in Computer Science.  I have competed 
            as a Division I college hockey player at all three of the aforementioned schools
            while simultaneously pursuing my education. I pride myself on my resiliency, 
            my problem-solving abilities, and my passion for working in a 
            high-paced team environment.</p>
            <a className={styles.contactBtn} href="mailto:jdnodler@gmail.com">Contact Me</a>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </div>
    </section>
    );
};