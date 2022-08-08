import React from 'react';


type NewComponentPropsType = {
    students: Array<StudentsPropsType>
}


type StudentsPropsType = {
    id: number
    name: string
    age: number
}


export const NewComponent: React.FC<NewComponentPropsType> = (props) => {
    return (
        <div>
            <ul>
                {props.students.map((el) => {
                    return(
                         <li>
                             <span>{el.name}</span>
                             <span> age: {el.age}</span>
                             <span> id: {el.id}</span>
                         </li>
                    )
                })}
            </ul>
        </div>
    );
};



















