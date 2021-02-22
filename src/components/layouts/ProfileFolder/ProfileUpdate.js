import React from 'react'

export default function ProfileUpdate() {
    return (
        <div className="container">
  
  <form action="/   ">
    <div className="form-group">
      <label htmlFor="fname">First Name:</label>
      <input type="text" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="Lname">Last Name:</label>
      <input type="text" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number:</label>
      <input type="text" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Upload Avatar:</label>
      <input type="file" className="form-control" id="email" />
    </div>
   
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
</div>

    )
}
