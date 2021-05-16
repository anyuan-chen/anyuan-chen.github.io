import React from 'react'
import styles from "./Icon.module.css"

export default function Icon(props) {
    return (
        <a href = {props.whereto}>
            <img src={props.url} className={styles.icon}></img>
        </a>
    )
}
