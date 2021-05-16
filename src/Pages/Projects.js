import React from "react";
import styles from "./Projects.module.css";
import Project from "../Components/Project";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Project
        title="Connect 4"
        description="Play with another player or with the computer. A connect 4 implementation based on object-oriented programming"
        imageLink="https://anyuan-chen.github.io/website/connect4.png"
        link="https://github.com/anyuan-chen/connect4"
      ></Project>
    </div>
  );
}
