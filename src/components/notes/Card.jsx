import React from 'react'

const card = ({src}) => {
  return (
    <div className="my-4 mx-2 cursor-pointer flex-shrink-0 w-[160px] sm:w-[250px]">
      <div className='rounded-2xl overflow-hidden shadow-md'>
        <img src={src} alt=""
        className='w-full h-70 sm:h-90 object-contain' />
      </div>
    </div>
  )
}

export default card
