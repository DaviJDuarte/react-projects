import backgroundImage from "../assets/background.png"
import styles from "./ProfileCard.module.css";
import SkillCard from "./SkillCard.tsx";
import {motion} from "framer-motion";

export default function ProfileCard() {
    const skills: string[] = [
        'Javascript 💪',
        'HTML & CSS 💪',
        'React 👍',
        'Git & GitHub 💪',
        'PHP ✌️'
    ];

    const colors: string[] = [
        '#FC5130', '#C2F9BB', '#b3fffc', '#FFC4D1', '#FFBC42'
    ];

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8}}
            className={styles.container}
        >
            <div className={styles.imgWrapper}>
                <motion.img
                    whileHover={{scale: 1.1}}
                    src={backgroundImage}
                    alt="Steven Universe Wallpaper"
                />
            </div>
            <div className={styles.text}>
                <motion.h1
                    whileHover={{textDecoration: "underline"}}
                    transition={{duration: 1}}
                >
                    Davi J. Duarte
                </motion.h1>
                <p>Just testing the Framer Motion library. There are some
                    colorful boxes below with some of my skills, go ahead and drag them.
                </p>
            </div>
            <ul className={styles["skill-list"]}>
                {skills.map((skill, index) =>
                    <SkillCard key={index} skill={skill} color={colors[Math.floor(Math.random() * colors.length)]}/>
                )}
            </ul>
        </motion.div>
    );
}