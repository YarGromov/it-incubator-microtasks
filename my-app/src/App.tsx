import React, {useState} from 'react';
import './App.css';
import {Fullinput} from "./components/Fullinput";




function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const addMessage = (title: string) => {
        console.log(title)
    };


    return (
        <div className={'App'}>
            <Fullinput
                addMessage={addMessage}
            />
            {
                message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })
            }
        </div>
    );
}

export default App;
