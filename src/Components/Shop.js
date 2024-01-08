import {useSelector, useDispatch} from 'react-redux';
import  {actionCreators} from '../Action/Index';
import {bindActionCreators} from 'redux';

 
import React from 'react'
 
export const Shop = () => {
 
    const {amount} = useSelector(state => state);
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div>shop
        <h1> deposit /withdraw money</h1>
        <br></br>
        Amount is {amount}
        <br />
        <button className='btn btn-primary' onClick={()=>depositMoney(100)}> + </button>
        Update Balance
        <button className='btn btn-primary'onClick={()=>withdrawMoney(100)}> - </button>
    </div>
   
  )
}