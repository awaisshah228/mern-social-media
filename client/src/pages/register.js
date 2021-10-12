import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory,Link} from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { register } from '../redux/actions/authAction';


const Register = () => {


    const {auth,alert} = useSelector(state => state)
    const history=useHistory()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(auth.token){
            history.push('/')
        }
    },[auth.token,history])  
    useEffect(()=>{
       
       
    },[])
    const handleChangeInput=(e)=>{
        const {name,value}=e.target
        setUserData({...userData,[name]:value})
        
    }
    const handleSubmit=e=>{
      e.preventDefault()
      //console.log(userData)
      dispatch(register(userData))
    }
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-6 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-5">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Full Name" onChange={handleChangeInput} name="fullname" value={fullname}
                    style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                    <label htmlFor="floatingInput">Full Name</label>
                    <small className="form-text text-danger  " style={{float: 'left'}}>
                        {alert.fullname ? alert.fullname : ''}
                    </small>
                  </div>
                  <div className="form-floating mb-5">
                    <input type="text" className="form-control" id="floatingInput" placeholder="User Name" onChange={handleChangeInput} name="username" value={username.toLowerCase().replace(/ /g,"")}
                    style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                    <label htmlFor="floatingInput">User Name</label>
                    <small className="form-text text-danger  " style={{float: 'left'}}>
                        {alert.username ? alert.username : ''}
                    </small>
                  </div>
                  <div className="form-floating mb-5">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChangeInput} name="email" value={email}
                    style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
                    <label htmlFor="floatingInput">Email address</label>
                    <small className="form-text text-danger  " style={{float: 'left'}}>
                        {alert.email ? alert.email : ''}
                    </small>
                  </div>
                  <div className="form-floating mb-5">
                    <input type={ typePass ? "text" : "password" }  className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChangeInput} name="password" value={password} 
                    style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}/>
                   
                    <label htmlFor="floatingPassword">Password</label>
                    <small onClick={() => setTypePass(!typePass)} style={{float:'right', position: 'absolute', bottom: '15px',right:'10px' }}>
                            {typePass ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </small>
                        <small className="form-text text-danger  " style={{float: 'left'}}>
                        {alert.password ? alert.password : ''}
                    </small>
                        
                   
                  </div>
                  <div className="form-floating mb-5">
                    <input type={ typeCfPass ? "text" : "password" }  className="form-control" id="floatingPassword" placeholder="Confirm Password" onChange={handleChangeInput} name="cf_password" value={cf_password}
                    style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}}/>
                    <small onClick={() => setTypeCfPass(!typeCfPass)} style={{float:'right', position: 'absolute', bottom: '15px',right:'10px' }}>
                            {typeCfPass ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </small>
                    <label htmlFor="floatingPassword">Confirm Password</label>
                    <small className="form-text text-danger  " style={{float: 'left'}}>
                        {alert.cf_password ? alert.cf_password : ''}
                    </small>
                   
                  </div>
                  <div className='mb-5 d-flex justify-content-start p-auto'>
                  <div className="form-check form-check-inline ">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="Male"
                        value="male"
                        defaultChecked
                        onChange={handleChangeInput}
                    />
                    <label className="form-check-label" htmlFor="Male">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="Female"
                        value="female"
                        onChange={handleChangeInput}
                    />
                    <label className="form-check-label" htmlFor="Female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="Other"
                        value="other"
                        onChange={handleChangeInput}
                    />
                    <label className="form-check-label" htmlFor="Other">Other</label>
                    </div>
                  </div>
                 
    
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" >Register
                      Now</button>
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
                    <Link to='/login'>Login Now</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register
