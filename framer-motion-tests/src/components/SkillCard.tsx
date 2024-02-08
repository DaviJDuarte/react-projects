import styles from "./SkillCard.module.css";
import {motion} from "framer-motion";

interface SkillCardProps {
    skill: string;
    color: string;
}

export default function SkillCard({skill, color}: SkillCardProps) {
    return (
        <motion.li
            drag
            dragSnapToOrigin
            dragConstraints={{top: -100, right: 100, bottom: 100, left: -100}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1.05}}
            style={{backgroundColor: color}}
            className={styles.skill}
        >
            {skill}
        </motion.li>
    );
}