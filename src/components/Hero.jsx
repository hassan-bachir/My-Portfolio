import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, MainImage } from "./canvas";
import { github, linkedin } from "../assets";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto ">
            {/* absolute */}
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient " />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm
                        <span className="text-[#915eff]"> Hassan </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
                        I'm a Full stack web developer,
                        <br className="sm:block hidden" /> and I code for fun!
                    </p>

                    <p className=" mb-3 text-secondary text-[17px]">
                        Tel: +961 81 511560
                    </p>
                    <p className=" mb-3 text-secondary text-[17px]">
                        Hassan.bachir001@gmail.com
                    </p>
                </div>
            </div>
            <div className="absolute w-full h-full flex justify-center items-center">
                <div className="mr-56   sm:mb-56 sm:ml-72">
                    <MainImage />
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
