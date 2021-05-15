import React from 'react'
import AutoTyper from './Components/AutoTyper'

export default function App() {
    return (
        <div>
            <AutoTyper
                heading={'Hi!'}
                dataText={["I'm a developer","I'm a student","I'm ready to learn"]} 
            />, 
        </div>
    )
}
