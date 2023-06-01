import React from 'react'
import Header from '../components/Header';
import { LinkContainer } from 'react-router-bootstrap'
function login() {
  return (
    <div>
    <Header></Header>

<form class="mx-4">
  <div class="form-group ">
    <label class="mt-3" for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <br></br>
  <div class="mt-3 ">
    <LinkContainer to='/subscribe'>
    <button type="submit" class="btn btn-secondary text-black mt-5 mx-3 ">you have no account? subscribe</button>
    </LinkContainer>
   </div>
</form>
</div>
  )
}

export default login
