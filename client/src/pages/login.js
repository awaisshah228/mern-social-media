import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import {useDispatch, useSelector} from 'react-redux'
import '../styles/login.css'

const Login = () => {
    const initialState={email:'',password:''}
    const [userData, setUserData] = useState(initialState)
    const [typePass, setTypePass] = useState(false)
    const {email,password}=userData
    const {auth}=useSelector(state=>state)
    const dispatch = useDispatch()
    const history=useHistory()


    useEffect(() => {
      if(auth.token) history.push("/")
  }, [auth.token, history])
    const handleChangeInput=(e)=>{
        const {name,value}=e.target
        setUserData({...userData,[name]:value})
    }
    const handleSubmit=e=>{
      e.preventDefault()
      //console.log(userData)
      dispatch(login(userData))
    }
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChangeInput} name="email" value={email} />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type={ typePass ? "text" : "password" }  className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChangeInput} name="password" value={password}/>
                    <label htmlFor="floatingPassword">Password</label>
                    <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                  </div>
    
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" disabled={email && password ?false: true}>Sign
                      in</button>
                  </div>
                  <hr className="my-4"/>
                  {/* <div className="d-grid mb-2">
                    <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                    </button>
                  </div> */}
                  <div className="text-center">
                    <Link to='/register'>Create Account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login
