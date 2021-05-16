import React from "react";
import styles from "./Projects.module.css";
import Project from "../Components/Project";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Project
        title="Connect 4"
        description="Play with another player or with the computer. A connect 4 implementation
        based on object-oriented programming."
        imageLink="https://anyuan-chen.github.io/website/connect4.png"
        link="https://github.com/anyuan-chen/connect4"
      ></Project>
      <Project
        title="Personal Page"
        description="Portfolio website built using React."
        imageLink="https://anyuan-chen.github.io/website/personalwebsite.png"
        link="https://github.com/anyuan-chen/website"
      ></Project>
      <Project
        title="Competitive Programming"
        description="Solutions to competitive programming solutions in C++ and Swift"
        imageLink="https://anyuan-chen.github.io/website/competitive-programming.png"
        link="https://github.com/anyuan-chen/competitive-programming"
      ></Project>
      <Project
        title="Temperature Converter"
        description="Temperature converter built using Swift and SwiftUI."
        imageLink="https://anyuan-chen.github.io/website/temperatureConverter.png"
        link="https://github.com/anyuan-chen/TemperatureConverter"
      ></Project>
    </div>
  );
}
