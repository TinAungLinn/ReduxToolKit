import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './Features/CounterSlice';

const Two = () => {

    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment(500))} className=" text-3xl w-15 pb-1 px-3 bg-yellow-500 text-white rounded ml-10">+</button>
      <button onClick={() => dispatch(decrement(500))} className=" text-3xl w-15 pb-1 px-3 bg-yellow-500 text-white rounded ml-10">-</button>
    </div>
  )
}

export default Two
