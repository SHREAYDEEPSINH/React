import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='d-flex justify-content-center my-5 gap-4'>
        <button className='btn btn-success'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button className='btn btn-success'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}