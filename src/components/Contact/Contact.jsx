


import styles from "./Contact.module.css";
import {getYear} from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>© {getYear()}<span id="year"></span> Joshua Nodler. All rights reserved.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:jdnodler@gmail.com"><img src="https://go-skill-icons.vercel.app/api/icons?i=gmail" alt="Email icon" /></a>
          <a href="mailto:jdnodler@gmail.com">jdnodler@gmail.com</a>
        </li>
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/joshua-nodler-771592294/" target="_blank">
        <img
            src="https://go-skill-icons.vercel.app/api/icons?i=linkedin"
            alt="LinkedIn icon"
          /></a>
          <a href="https://www.linkedin.com/in/joshua-nodler-771592294/" target="_blank" >LinkedIn</a>
        </li>
        <li className={styles.link}>
        <a href="https://github.com/JNods10"  target="_blank"><img src="https://go-skill-icons.vercel.app/api/icons?i=github" alt="Github icon" /></a>
          <a href="https://github.com/JNods10"  target="_blank">Github</a>
        </li>
      </ul>
    </footer>
  );
};