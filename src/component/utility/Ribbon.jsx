import React from 'react'

function Ribbon({setRibbon}) {
  return (
    <div className="flex justify-center items-center h-16 w-72 rounded-md bg-red-400 fixed left-[75vw] top-3 z-20">
      <p>Login to comments </p>
      <button  onClick={()=>setRibbon(false)} className={`  absolute right-0 top-0 bg-blue-700 px-1 `}>X</button>
    </div>
  )
}

export default Ribbon;
