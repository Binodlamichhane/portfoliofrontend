import React from 'react'

function Loader() {
  return (
    <div className='h-[90vh]  flex justify-center items-center '>
    <div className=' bg-gray-800 relative rounded-full border-[10px]  h-16 w-16 animate-loader '>
      {/* <p className=' bg-gray-800 absolute  rounded-full -top-2  h-4 w-4   '></p> */}
    </div>
    </div>
  )
}

export default Loader;
