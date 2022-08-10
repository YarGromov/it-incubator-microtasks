import React from 'react';
import {FilterType, MoneyType} from "./App";

type NewComponentPropsType = {
    currentMoney: Array<MoneyType>
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
                 <ul>
                     {props.currentMoney.map((objFromMoneyArr, id)=>{
                        return(
                            <li key={id}>
                                <span> {objFromMoneyArr.banknots}</span>
                                <span> {objFromMoneyArr.value}</span>
                                <span> {objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
               <div style={{marginLeft: '35px'}}>
                   <button onClick={()=>props.onClickFilterHandler('All')}>All</button>
                   <button onClick={()=>props.onClickFilterHandler('RUBLS')}>RUBLS</button>
                   <button onClick={()=>props.onClickFilterHandler('Dollars')}>Dollars</button>
               </div>
            </>
    );
};

