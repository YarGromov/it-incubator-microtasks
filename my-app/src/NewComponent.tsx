import React from "react";

type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent: React.FC<NewComponentPropsType>= (props) => {

    return  (
            <ul>
            {props.students.map((el, index) => {
            return (
                <li key={el.id}>
                    <span>{el.name}</span>

                    <span> age: {el.age}</span>
                </li>
            )
        })}
            </ul>
    )
}