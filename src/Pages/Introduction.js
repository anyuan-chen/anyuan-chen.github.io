import AutoTyper from '../Components/AutoTyper'
import styles from './Introduction.module.css'
import React, { Component } from 'react'
import Heading from '../Components/Heading'
import DownArrow from '../Components/DownArrow';

export default class Introduction extends Component {
    state = {width: 800 , height: 800};
    componentDidMount() {
        window.addEventListener('resize', this.checkDimensions);
        this.checkDimensions()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.checkDimensions);
    }
    checkDimensions = () => {
        this.setState({height: window.innerHeight, width: window.innerWidth})
    }

    render() {
        if (this.state.width < 700){
            return (
                <div className={styles.section}>
                    <Heading text="Andrew Chen"></Heading>
                </div>
            )
        }
        else{
            return (
                <div className={styles.section}>
                    <AutoTyper
                        heading={'Hi!'}
                        dataText={["I'm Andrew Chen", "I'm a student","I'm a developer","I'm a learner"]} 
                    />
                    <DownArrow></DownArrow>
                </div>
            )
        }
        
    }
}
