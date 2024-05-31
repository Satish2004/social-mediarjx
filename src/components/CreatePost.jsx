import React from 'react'

const CreatePost = () => {
  return (
    <div className="form_compo">
    <form className='totalForm'>
    <div className="mb-3 form-component">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1"> I agree all terms and conditions</label>
    </div>
   <a href="#"> <button type="submit" className="btn btn-primary">Submit</button></a>
  </form>
  </div>
  )
}

export default CreatePost