import axios from "axios"
import './App.css';
import {useEffect} from "react";

function App() {

    useEffect(async()=>{
       try{
           const res = await axios.post("http://localhost:3040/", {success: "admin"})
           console.log(res.data)
       }catch(err){

       }
    },[])
  return (
    <div className="App">
     Admin
    </div>
  );
}

export default App;
