import React, { Component } from 'react'
import styles from "./Heading.module.css"

export default class Heading extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.header}>{this.props.text}</h1>
            </div>
        )
    }
}

