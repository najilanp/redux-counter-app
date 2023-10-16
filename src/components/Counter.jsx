import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement,increment,reset,incrementByAnum} from '../redux/counterSlice'

function Counter() {
  const dispatch=useDispatch()
  const count=useSelector(state=>state.counterReducer.count)
  return (
    <div style={{height:'60vh'}}  className='d-flex justify-content-center align-items-center w-100 '>
     <div className='border rounded p-5 w-25 d-flex justify-content-center align-items-center flex-column '>
       <h1>{count}</h1>
       <div  className='d-flex justify-content-between w-100 mt-4'>
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
        <button  onClick={()=>dispatch(increment())} className='btn btn-success'>increment</button>
       </div>
       <button  onClick={()=>dispatch(incrementByAnum(5))} className='btn btn-success mt-4'>incrementByAnum</button>

     </div>
    </div>
  )
}

export default Counter