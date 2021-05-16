import React, { Component } from "react";
import Heading from "../Components/Heading";
import styles from "./About.module.css";
// import picture from "../Assets/headshot.png";             <img src={picture} alt="Andrew Chen" className={styles.headshot} />

export default class About extends Component {
  render() {
    return (
      <div className={styles.margins}>
        <div className={styles.container}>
          <Heading text="About Me"></Heading>
          <div className={styles.lower}>
            <div className={styles.paragraphContainer}>
              <p className={styles.paragraph}>
                I'm a 16 year old student developer from Toronto, Canada. I have
                a passion for technology, especially for{" "}
                <b>data visualization</b> and <b>software</b>. On a given day,
                you can catch me working on <b>competitive programming</b>{" "}
                solutions or developing a new <b>web app</b>.
              </p>
              <p className={styles.paragraph}>
                Feel free to contact me at{" "}
                <b>andrew.chen.anyuan (at-symbol) gmail.com</b>, download my
                resume by clicking{" "}
                <a
                  href="https://anyuan-chen.github.io/website/AndrewChenHSResume.pdf"
                  className={styles.link}
                  download
                >
                  here
                </a>
                , or checkout my projects below.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
