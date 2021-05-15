import React, { Component } from 'react'
import styles from './AutoTyper.module.css'

/*
    Description: Text with an auto-typing effect    
    Inspired by: https://codepen.io/AliKlein/pen/aPyKjy
*/

export default class AutoTyper extends Component {
    static defaultProps = {
        heading: '', //default text beforehand
        dataText: [] //all of the phrases
    }
    constructor(props){
        super(props);

        this.state = {
            text: '', //current displayed text
            deleting: false, //is it in backsace
            phraseNumber: 0, //which index of dataText
            typingSpeed: 150 //speed of type
        }
    }
    componentDidMount(){
        this.type();
    }
    type = () => {
        const {dataText} = this.props;
        const {isDeleting, phraseNumber, text, typingSpeed} = this.state;
        const i = phraseNumber % dataText.length;
        const fullText = dataText[i];


        this.setState({
            text: isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1), //increments/decrements by 1 char
            typingSpeed: isDeleting ? 30 : 150 //deleting is faster 
        });

        if (!isDeleting && text == fullText){
            setTimeout(() => {
                this.setState({isDeleting: true}) //if at end of text switch to deleting
            }, 500)
        }
        else if (isDeleting && text == ''){
            this.setState({
                isDeleting: false, //if dont deleting stop
                phraseNumber: phraseNumber + 1 //go to next phrase
            });
        }
        setTimeout(this.type, typingSpeed)
    }
    render() {
        return (
            <h1> 
                {this.props.heading} &nbsp;
                <span>{this.state.text}</span>
                <span class={styles.cursor}/>
            </h1>
        )
    }
}
