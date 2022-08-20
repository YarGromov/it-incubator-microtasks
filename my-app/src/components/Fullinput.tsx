import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const Fullinput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title)

    let onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    let onClickButtonHandler = () => {
       props.addMessage(title)
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

