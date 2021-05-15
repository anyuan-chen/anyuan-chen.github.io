import AutoTyper from './Components/AutoTyper'
import styles from './Introduction.module.css'
import React, { Component } from 'react'

export default class Introduction extends Component {
    state = {width: 0 , height: 0};
    componentDidMount() {
        window.addEventListener('resize', this.checkDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.checkDimensions);
    }
    checkDimensions = () => {
        this.setState({height: window.innerHeight, width: window.innerWidth})
    }

    render() {

        if (this.state.width > 700){
            return (
                <div className={styles.section}>
                    <AutoTyper
                        heading={'Hi!'}
                        dataText={["I'm a developer","I'm a student","I'm ready to learn"]} 
                    />
                </div>
            )
        }
        return (
            <h1>Andrew Chen</h1>
        )
    }
}
