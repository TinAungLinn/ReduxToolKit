import React from 'react'
import { useSelector } from 'react-redux'

const One = () => {

    const {value} = useSelector(state => state.counter)

    console.log(value)

  return (
    <div>
      One - {value}
    </div>
  )
}

export default One
