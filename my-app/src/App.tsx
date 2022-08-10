import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'All' | 'RUBLS' | 'Dollars'
export type MoneyType = {
    banknots: 'Dollars' | 'RUBLS'
    value: number
    number: string
}

function App() {

    const [money, setMoney] = useState<Array<MoneyType>>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const[filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money

    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney)=> filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney)=> filteredMoney.banknots === 'Dollars')
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponent
                onClickFilterHandler={onClickFilterHandler}
                currentMoney={currentMoney}
            />
        </>
       // <>
       //     <ul>
       //         {currentMoney.map((objFromMoneyArr, id)=>{
       //             return(
       //                 <li key={id}>
       //                     <span> {objFromMoneyArr.banknots}</span>
       //                     <span> {objFromMoneyArr.value}</span>
       //                     <span> {objFromMoneyArr.number}</span>
       //                 </li>
       //             )
       //         })}
       //     </ul>
       //    <div style={{marginLeft: '35px'}}>
       //        <button onClick={()=>onClickFilterHandler('All')}>All</button>
       //        <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
       //        <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
       //    </div>
       // </>
    );
}

export default App;
