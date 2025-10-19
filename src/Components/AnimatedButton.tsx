"use client";

import React from "react";
import styles from "../../public/css/AnimatedButton.module.css";


interface AnimatedButtonProps {
    label?: string;
    onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    label = "Delete",
    onClick,
}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon} viewBox="0 0 24 24"><path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1" /></svg>
            <span className={styles.label}>{label}</span>
        </button>
    );
};

export default AnimatedButton;
