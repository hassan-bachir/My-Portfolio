import React from "react";
import { motion } from "framer-motion";
import { hassan } from "../../assets";

const MainImage = () => {
    const animationStyle = {
        boxShadow:
            "0 -2vmin 4vmin LightPin inset, 0 -4vmin 4vmin MediumPurple inset, 0 -2vmin 7vmin purple inset",
        content: "",
        // filter: "drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin Orchid) drop-shadow(2vmin -2vmin 15vmin MediumSlateBlue) drop-shadow(0 0 7vmin MediumOrchid)",
        height: "50vmin",
        position: "absolute",
        width: "50vmin",
    };
    const variants = {
        animate: {
            borderRadius: [
                "30% 70% 70% 30% / 30% 52% 48% 70%",
                "50% 50% 20% 80% / 25% 80% 20% 75%",
                "67% 33% 47% 53% / 37% 20% 80% 63%",
                "39% 61% 47% 53% / 37% 40% 60% 63%",
                "39% 61% 82% 18% / 74% 40% 60% 26%",
                "100%",
                "50% 50% 53% 47% / 72% 69% 31% 28%",
                "50% 50% 53% 47% / 26% 22% 78% 74%",
                "50% 50% 53% 47% / 26% 69% 31% 74%",
                "20% 80% 20% 80% / 20% 80% 20% 80%",
            ],

            transition: {
                duration: 50,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    return (
        <motion.img
            src={hassan}
            alt={"hassan bachir"}
            style={animationStyle}
            variants={variants}
            animate={"animate"}
        />
    );
};

export default MainImage;
