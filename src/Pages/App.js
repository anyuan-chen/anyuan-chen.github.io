import React from 'react'
import Introduction from './Introduction'
import About from './About'
import Projects from './Projects'

export default function App() {
    return (
        <div styles="display:flex; align-items:center;">
            <Introduction></Introduction>
            <About></About>
            <Projects></Projects>
        </div>
    )
}
