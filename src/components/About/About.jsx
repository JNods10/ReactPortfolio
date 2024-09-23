import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.aboutSummary}>
        <p>
            I am a software engineer and former Division I ice hockey player
            with a passion for solving problems and collaborating with others.  I have 
            the most experience in Full Stack Development and digital forensics. 
            The back of each card below contains an overview of my main study material
            during my time at each respective school.  Please check out my projects, experience,
            and academic/non-academic accolades.
        </p>
        </div>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/msuPic.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.msuTitle}>Michigan State</h3>
              <p>
                Michigan State University is where I began college.  I studied and focused on many of the fundamentals 
                of computer science including core topics such as algorithms and data structures, 
                Object Oriented Programming (OOP), and software development. 
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/umassPic.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.umassTitle}>University of Massachusetts</h3>
              <p>
                I graduated from the University of Massachusetts Amherst with a Bachelors Degree in computer science.
                I took courses in more complex and high demand
                areas such as machine learning.  I enhanced my skills in courses such as 
                web development, programming methodology, and search engine optimization.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bgPic.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.bgTitle}>Bowling Green State</h3>
              <p>
                The main focus of my graduate studies at Bowling Green State University
                has been in the field of Cyber Security and my graduate level research has
                pertained to deleted file recovery in Ext4 file systems.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img className={styles.realImg} src={getImageUrl("about/internDay.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.internDay}>Rocket Companies 2024 Software Engineer Intern</h3>
              <p>
                Working as a summer 2024 software engineer intern at Rocket Companies was a tremendous experience that both truly enhanced my
                skills as a programmer and allowed me to learn and develop my skills with real-world and ubiquitous tools/frameworks such as .NET, 
                Model-view-controller (MVC) applications, and SQL databases.  All of the responsibilities that my team had to complete had a direct impact 
                on ensuring the efficient and proficient functioning of the company.  I had the privilege to see first hand a company culture that is 
                invested in teamwork, always looking for ways to improve, and stresses the importance that all team members, especially those in 
                software development, are keeping up with current technologies and knowledge.  It is no surprise Rocket Companies has been at the top
                of the Mortgage industry for so many years!
                
              </p>
            </div>
          </li>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/calgary_devCamp.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.calgary}>NHL Draft Selection Calgary Flames</h3>
              <p>
              Hockey has been one of my biggest passions since I was a young kid.  I spent many hours
              working towards pursuing my dream of playing hockey at the highest level possible.  One of the
              most fulfilling and special moments in my life was witnessing years of dedication and determination
              culminate in being selected in the fifth round of the 2019 NHL draft to the Calgary Flames.
              </p>
            </div>
          </li>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/lsu_presentation.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.dfrws2024}>DFRWS 2024</h3>
              <p>
                I had the honor of presenting my Masters research poster at DFRWS 2024, the leading digital 
                forensics conference in the world.  The conference was held at Louisiana State University and I received 
                a scholarship grant from the National Science Foundation (NSF) to attend. My work focused on deleted file recovery
                in EXT4, a popular file system found in Linux systems and many Android devices.  Researchers, students, and industry 
                professionals came from all over the world to present and learn about interesting research and current innovation
                in the field of digital forensics.
              </p>
            </div>
          </li>


        </ul>

      </div>
    </section>
  );
};