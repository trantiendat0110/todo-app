import React from 'react'

export default function Filler(props) {

  const handleChecked = (e) => {
    props.filler(e.target.value)
  }
  return (
    <div className='flex justify-around'>
      <div className='m-auto relative'>
        <input value={0} onChange={handleChecked} className='w-5 h-5 mr-2 hover:cursor-pointer' type="radio" name="status" id="" /><p className='leading-10 inline text-slate-500'>Low</p>
      </div>
      <div className='m-auto relative'>
        <input value={1} onChange={handleChecked} className='w-5 h-5 mr-2 hover:cursor-pointer' type="radio" name="status" id="" /><p className='leading-10 inline text-yellow-500'>Medium</p>
      </div>
      <div className='m-auto relative'>
        <input value={2} onChange={handleChecked} className='w-5 h-5 mr-2 hover:cursor-pointer' type="radio" name="status" id="" /><p className='leading-10 inline text-red-500'>Hight</p>
      </div>
      <div className='m-auto relative'>
        <input value={3} onChange={handleChecked}  className='w-5 h-5 mr-2 hover:cursor-pointer' type="radio" name="status" id="" /><p className='leading-10 inline text-red-500'>Finished</p>
      </div>
      <div className='m-auto relative'>
        <input value={4} onChange={handleChecked} defaultChecked className='w-5 h-5 mr-2 hover:cursor-pointer' type="radio" name="status" id="" /><p className='leading-10 inline text-red-500'>All</p>
      </div>
    </div>
  )
}
