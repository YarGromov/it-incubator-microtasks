import React  from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log('Im stupid button!')
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Im Ivan', 24)}/>
            <Button name={'StupidButton'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
