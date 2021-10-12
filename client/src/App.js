import {BrowserRouter as Router,Route} from 'react-router-dom'
import { useEffect } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import PageRender from './PageRender'
import Alert from './components/alert/Alert'
import Header from './components/Header'
import { useSelector,useDispatch } from 'react-redux'
import {refreshToken} from './redux/actions/authAction'
import axios from 'axios'
axios.defaults.withCredentials=true
function App() {
     const {auth,theme} = useSelector(state => state)
     const dispatch = useDispatch()
     useEffect(() => {
       dispatch(refreshToken())
     }, [dispatch])
  return (
    <Router>
      
         <Alert/>
         {/* <Toasts /> */}
      <input type="checkbox" checked={theme? true : false}  id="theme" />
        <div className="App">
          <div className="main">
            {auth.token && <Header/>}
           <Route exact path='/' component={auth.token ? Home : Login} ></Route>
           <Route exact path='/:page' component={PageRender} ></Route>
           <Route exact path='/:page/:id' component={PageRender} ></Route>
          </div>
         </div>
    </Router>
   
  );
}

export default App;
