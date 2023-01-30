import React from 'react'

export default function Text(props) {
  return (
    <p className='font-light text-sm my-auto w-1/2'>Có {props.count.length} việc cần làm</p>
  )
}
