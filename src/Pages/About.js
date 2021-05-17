import React, { Component } from "react";
import Heading from "../Components/Heading";
import Icon from "../Components/Icon";
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
                  href="https://anyuan-chen.github.io/AndrewChenHSResume.pdf"
                  className={styles.link}
                  download
                >
                  here
                </a>
                , check out my online presence, or view my projects below.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <Icon
              url="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              whereto="https://github.com/anyuan-chen"
            ></Icon>
            <Icon
              url="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
              whereto="https://www.linkedin.com/in/achenn/"
            ></Icon>
          </div>
        </div>
      </div>
    );
  }
}
