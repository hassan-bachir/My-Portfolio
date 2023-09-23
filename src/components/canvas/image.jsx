import React from "react";
import { motion } from "framer-motion";
import { hassan } from "../../assets";

const MainImage = () => {
    const animationStyle = {
        // animation: "anim 30s infinite",
        backgroundColor: "radial-gradient(circle at 0% 0%, hotpink, slateblue)",
        borderRadius: "30% 70% 70% 30% / 30% 52% 48% 70%",
        boxShadow:
            "0 -2vmin 4vmin LightPink inset, 0 -4vmin 4vmin MediumPurple inset, 0 -2vmin 7vmin purple inset",
        content: "",
        filter: "drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin Orchid) drop-shadow(2vmin -2vmin 15vmin MediumSlateBlue) drop-shadow(0 0 7vmin MediumOrchid)",
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
            boxShadow: [
                "0 -2vmin 4vmin LightPink inset, 0 -4vmin 4vmin MediumPurple inset, 0 -2vmin 7vmin purple inset",
                "box-shadow: none;",
                "box-shadow: none;",
                "0 -4vmin 8vmin hotpink inset, -1vmin -2vmin 6vmin LightPink inset, -1vmin -2vmin 4vmin MediumPurple inset, 1vmin 4vmin 8vmin purple inset",
                "box-shadow: none;",
                "0 4vmin 16vmin hotpink inset, 0 2vmin 5vmin LightPink inset, 0 4vmin 4vmin MediumPurple inset, 0 6vmin 8vmin purple inset",
                "box-shadow: none;",
                "box-shadow: none;",
                "box-shadow: none;",
                "box-shadow: none;",
            ],
            transition: {
                duration: 150,
                ease: "easeInOut",
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
