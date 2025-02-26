"use client";

import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

const TestCarousel = () => {
    // Crée une référence qui sera attachée à un élément DOM
    const targetRef = useRef(null);

    // useScroll suit la progression du défilement de l'élément référencé
    // Retourne une valeur entre 0 (début du scroll) et 1 (fin du scroll)
    const { scrollYProgress } = useScroll({
        target: targetRef
    });

    // useTransform transforme la valeur du scroll (0 à 1) en une valeur de translation X
    // Quand scrollYProgress = 0 -> x = '0%' (position initiale)
    // Quand scrollYProgress = 1 -> x = '-90%' (translation vers la gauche de 90%)
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-90%']);

    return (
        <div className="carousel min-h-screen bg-slate-500 flex items-start justify-center h-[500vh] p-0" ref={targetRef}>
            <div className="contentContainer h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden bg-blue-500">
                <motion.div className="images flex py-0 pl-16 pr-16 space-x-16" style={{ x }}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div className="imageItem bg-yellow-500 h-[100vh] w-[100vw] flex items-center justify-center">
                            Item {item}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TestCarousel;