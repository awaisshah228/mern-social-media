import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";
import Alert from "./components/alert/Alert";
import Header from "./components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <Alert /> 
      {/* <Toasts /> */}
      <input
        type="checkbox"
        checked={theme ? true : false}
        readOnly
        id="theme"
      />
      <div className="App">
        <div className="main">
          {auth.token && <Header />}
          <Route exact path="/" component={auth.token ? Home : Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <PrivateRouter
            exact
            path="/:page"
            component={PageRender}
          ></PrivateRouter>
          <PrivateRouter
            exact
            path="/:page/:id"
            component={PageRender}
          ></PrivateRouter>
        </div>
      </div>
    </Router>
  );
}

export default App;
