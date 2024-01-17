import React from 'react'

function form() {
  return (
    <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required/><br />
        <label htmlFor="email">Email Address:</label><br />
        <input type="email" id="email" name="email"/><br />
        <small className="error"></small><br />
        <input type="submit" value="Submit"/>
        
    </form>
  )
}

export default form
