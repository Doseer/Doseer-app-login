import React from "react"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Admin_Login from "./pages/Admin_Login"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

function App() {
  return (
    <Router>
        <div>
            <Switch>
              <Route path="/Admin_login">
                  <Admin_Login/>                                
              </Route>
              <Route path="/login">
                  <Login/>                                
              </Route>
              <Route path="/SignUp">
                  <SignUp/>                                
              </Route>
            </Switch>
        </div>
    </Router> 
  );
}

export default App;
