import React from 'react'

function List(props) {
  return (
    <div className='ListBorder'>
        <p className='List'>{props.message}</p>
    </div>
  )
}

export default List