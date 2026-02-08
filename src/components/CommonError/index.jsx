import React from 'react'

function CommonErr({message}) {
  return (
    <div>
        <p className='text-sm text-red-500'>{message}</p>
    </div>
  )
}

export default CommonErr