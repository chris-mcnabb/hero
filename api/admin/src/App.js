import axios from "axios"
import './App.css';
import {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
function App() {

    useEffect(async()=>{
       try{
           const res = await axios.post("http://localhost:3040/", {success: "admin"})
           console.log(res.data)
       }catch(err){

       }
    },[])
  return (
  <Router>
      <Switch>
          <Route exact path="/admin">
              <div>
                  Hello
              </div>
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
