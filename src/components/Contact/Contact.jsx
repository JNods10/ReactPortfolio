


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
          <img src="https://go-skill-icons.vercel.app/api/icons?i=gmail" alt="Email icon" />
          <a href="mailto:jdnodler@gmail.com">jdnodler@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://go-skill-icons.vercel.app/api/icons?i=linkedin"
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/joshua-nodler-771592294">LINKEDIN</a>
        </li>
        <li className={styles.link}>
          <img src="https://go-skill-icons.vercel.app/api/icons?i=github" alt="Github icon" />
          <a href="https://github.com/JNods10">GITHUB</a>
        </li>
      </ul>
    </footer>
  );
};