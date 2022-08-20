import React, {ChangeEvent, useState} from 'react';

export const Fullinput = () => {
    let [title, setTitle] = useState('')
    console.log(title)

    let onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
       setTitle(event.currentTarget.value)
    }

    let onClickButtonHandler = () => {
        console.log('Call=>')
    }
    return (
        <div>
            <div>
                <input onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
        </div>
    );
};

