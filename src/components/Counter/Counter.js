import React, {useReducer} from 'react';

import './Counter.css';

const Counter = () => {
    const reducer = (state,action) => {
       switch (action.type){
           case 'inc1':
               return {...state,count1: state.count1+1}
           case 'inc2':
               return {...state,count2: state.count2+1}
           case 'inc3':
               return {...state,count3: state.count3+1}
           case 'dec1':
               return {...state,count1: state.count1-1}
           case 'dec2':
               return {...state,count2: state.count2-1}
           case 'dec3':
               return {...state,count3: state.count3-1}
           case 'reset1':
               return {...state,count1: state.count1=0}
           case 'reset2':
               return {...state,count2: state.count2=1}
           case 'reset3':
               return {...state,count3: state.count3=2}
           default:
               throw new Error('My Error')
       }
    }

    const [state,dispatch] = useReducer(reducer,{count1: 0,count2: 1,count3: 2});

    return (
        <div className={'wrap'}>

            <div className="counter1">
                <h2>{state.count1}</h2>
                <div className="buttons">
                    <button onClick={() => dispatch({type:'inc1'})}>increment</button>
                    <button onClick={() => dispatch({type:'dec1'})}>decrement</button>
                    <button onClick={() => dispatch({type:'reset1'})}>reset</button>
                </div>
            </div>

           <div className="counter2">
               <h2>{state.count2}</h2>
               <div className="buttons">
                   <button onClick={() => dispatch({type:'inc2'})}>increment</button>
                   <button onClick={() => dispatch({type:'dec2'})}>decrement</button>
                   <button onClick={() => dispatch({type:'reset2'})}>reset</button>
               </div>
           </div>

            <div className="counter3">
                <h2>{state.count3}</h2>
                <div className="buttons">
                    <button onClick={() => dispatch({type:'inc3'})}>increment</button>
                    <button onClick={() => dispatch({type:'dec3'})}>decrement</button>
                    <button onClick={() => dispatch({type:'reset3'})}>reset</button>
                </div>
            </div>

        </div>
    );
};

export default Counter;