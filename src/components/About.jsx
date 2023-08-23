import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className="">
                I'm a full stack web developer with experience in JavaScript,
                TypeScript, Python, Java, and PHP, and expertise in frameworks
                like React, React Native, node.js, Express, Laravel , .NET ,
                among other tools and frameworks that I've worked with like
                electron.js, redux state management, Three.js , git and github,
                postman etc. Let's work together to bring your ideas to life !
            </motion.p>
        </>
    );
};

export default About;
