import {BrowserRouter as Router,Route} from 'react-router-dom'
import { useEffect } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import PageRender from './PageRender'
import Alert from './components/alert/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toasts from './components/alert/Toasts'
import { useSelector,useDispatch } from 'react-redux'
import {refreshToken} from './redux/actions/authAction'
import axios from 'axios'
axios.defaults.withCredentials=true
function App() {
     const auth = useSelector(state => state.auth)
     const dispatch = useDispatch()
     useEffect(() => {
       dispatch(refreshToken())
     }, [dispatch])
  return (
    <Router>
      
         <Alert/>
         {/* <Toasts /> */}
      <input type="checkbox"  id="theme" />
        <div className="App">
          <div className="main">
           <Route exact path='/' component={auth.token ? Home : Login} ></Route>
           <Route exact path='/:page' component={PageRender} ></Route>
           <Route exact path='/:page/:id' component={PageRender} ></Route>
          </div>
         </div>
    </Router>
   
  );
}

export default App;
