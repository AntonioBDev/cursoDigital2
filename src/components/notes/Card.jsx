import React from 'react'

const card = ({src}) => {
  return (
    <div className="my-0 mx-2 cursor-pointer flex-shrink-0 w-[200px] sm:w-[250px]">
      <div className='rounded-2xl overflow-hidden shadow-md'>
        <img src={src} alt=""
        className='w-full h-109 sm:h-110 object-contain' />
      </div>
    </div>
  )
}

export default card
