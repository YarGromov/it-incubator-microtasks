import React from 'react';

export const NewComponent = () => {
    return (
        <>
            //     <ul>
            //         {currentMoney.map((objFromMoneyArr, id)=>{
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
                   <button onClick={()=>onClickFilterHandler('All')}>All</button>
                   <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
                   <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
               </div>
            </>
    );
};

