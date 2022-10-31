// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import Login from './components/login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/signup';
import { useEffect, useState } from 'react';
import AboutUs from './components/aboutUs';
import Add from './components/add';
import Home from './components/home';
import Footer from './components/Footer';
import Upload from './components/Upload';

function App() {
  const[isauth,setIsAuth]=useState()
    const[private1,setPrivate1]=useState()
const[items,setItems]=useState([])
const[items1,setItems1]=useState([])


  useEffect(() => {
    var token1=localStorage.getItem("MedTtoken")
    console.log('ye h token abhi',token1)
    if (token1==='true'){ setIsAuth(true,console.log('yha hua true',isauth))}
    else {setIsAuth(false,console.log('yha hua false',isauth))};
 
    }, [private1]);

useEffect(()=>{

  if(localStorage.length>0){
    var text=[]
     text = JSON.parse(localStorage.getItem("MedItem"))
    if(text){
      setItems1(text)
    }
  }

},[items])

  return (
    <div style={{ 
      backgroundImage: `url("img.jpg")` 
    }} >
     {/* console.log("hih") */}
     <BrowserRouter>
      <Navbar isauth={isauth} setIsAuth={setIsAuth} />
          <Switch>
          <Route exact path="/login"   render={props => <Login private1={private1} setPrivate1={setPrivate1}  isauth={isauth} setIsAuth={setIsAuth}/>} />
          <Route exact path="/prescription" component={Upload} />
     <Route exact path="/signup" component={Signup} />
     <Route exact path="/about" component={AboutUs} />
     <Route exact path="/add"  render={props => <Add  items1={items1} setItems={setItems} isauth={isauth} />}  />
     <Route  path="/"  render={props => <Home  items1={items1} isauth={isauth} />}  />
     </Switch>
       <Footer />

        </BrowserRouter>
      
    </div>
  );
}

export default App;
