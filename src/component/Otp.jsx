import React from 'react'

function Otp() {
    const verifyOtp=()=>{
        
    }
  return (
    <div>
      <div>
        <form className=''>
            <label htmlFor="otp">Enter OTP:</label><br />
            <input className='border border-black rounded-md p-1 text-center' type="text"  name="otp" size={1} maxLength={1}/>&nbsp;
            <input className='border border-black rounded-md p-1 text-center' type="text"  name="otp" size={1}/>&nbsp;
            <input className='border border-black rounded-md p-1 text-center' type="text"  name="otp" size={1}/>&nbsp;
            <input className='border border-black rounded-md p-1 text-center' type="text"  name="otp" size={1}/>&nbsp;
            <input className='border border-black rounded-md p-1 text-center' type="text"  name="otp" size={1}/><br/>&nbsp;
            <button onClick={verifyOtp}>Verify</button>
        </form>
      </div>
    </div>
  )
}

export default Otp;
