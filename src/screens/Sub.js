import React from 'react'
import Header from '../components/Header';

function sub() {
  return (

    <div>
      <Header></Header>
        <form class="mx-4">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" class="mt-3">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Alger</option>
        <option>Oran</option>
        <option>Tlemcen</option>
        <option>Setif</option>
      </select>
    </div>
 
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Sign in</button>
</form>
      
    </div>
  )
}

export default sub
