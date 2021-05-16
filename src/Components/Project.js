import React, { Component } from 'react'
import styles from './Project.module.css'

export default class Project extends Component {
    render() {
        return (
            <div className={styles.project}>
                <img className={styles.picture} src={this.props.imageLink}></img>
                <div className= {styles.text}>
                    <a target="_blank" href={this.props.link}>{this.props.title}</a>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
