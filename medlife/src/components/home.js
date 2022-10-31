import React from 'react';
import "../cssFile/home.css"
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {  IconButton, Badge } from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
const Home = ({items1,isauth}) => {

    const[cart,setCart]=useState([])
    const[show,setShow]=useState(true)

    const handleLike = (index) => {
        if(isauth){
        var favourite = items1[index];
        if (cart && cart.includes(favourite)) {
        //   var x = cart.indexOf(favourite);
        //   console.log(x);
        //   var fav2 = [...cart];
        //   fav2.splice(x, 1);
        //   setCart(fav2);
        //   toast.error(' Removed from cart ', {
        //     position: "top-right",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: false,
        //     draggable: true,
        //     progress: undefined,
        //     })
          // alert('removed from like')
        } else {
          setCart([...cart, favourite]);
          // alert('Added to like')
          toast.success('Added to cart ', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            })
        }}
        else{
            toast.error(' Please Login First ', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  })
                //   clearState()  
            }
      };
      
      const handleLike2=(index)=>{
          console.log("remove")
          var favourite = cart[index];
        //   if (cart && cart.includes(favourite)) {
            var x = cart.indexOf(favourite);
            console.log(x);
            var fav2 = [...cart];
            fav2.splice(x, 1);
            setCart(fav2);
            toast.error(' Removed from cart ', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              })
            // alert('removed from like')
      }

useEffect(()=>{
setCart([])
},[isauth])

    return ( 
        <div>
              <ToastContainer />
            {console.log("cart",cart)}
           <h1 className='text-center'>{show?"All":"My"} Medicines</h1>
         { isauth && <div className='text-center'>
               
                <button
            className="btn btn-danger btn-lg"
            onClick={() => setShow(!show)}
          >
             { show? "My Items": " All Medicines"}
         
              <span class="badge  badge-pill badge-warning">{show && cart!==[] && cart.length!=0 && cart.length}</span>
          </button>
           </div>}
         
           <div className="row p-5">

          
          {show?  items1&&
           items1.map((item,index)=>(
               <div key={index} style={{
                backgroundColor: cart.includes(item)
                  ? "rgb(0, 0, 0,0.2)"
                  : "white",
              }} className='card col-md-4 mt-2 mb-2'>
                   <p className='pt-2'><b>S.No - {index+1}</b></p>
                   {/* {console.log(item)} */}
                   <img
                     style={{margin:"auto"}}
                           src={item.photoPreview }
                           className="rounded "
                           alt="pic"
                           width="250px"
                       /><hr></hr>
                       <div className="text-center ">
                       <p><b>Name -</b> {item.name}</p> 
                       <p><b>M.R.P -</b> &#x20B9; {item.mrp}</p>
                       <p><b>Category -</b> {item.category}</p>
                       <p><b>Description -</b> {item.description}</p>
                       <div className="text-center">
               { !cart.includes(item) ? <button className="btn btn-danger btn-sm m-2" onClick={() => handleLike(index)} >Add to cart</button>
               :
               <button  className="btn btn-dark btn-sm m-2"  onClick={() => handleLike2(index)}>Remove from cart</button>
               }
              </div>
                       
                           </div>
                   </div>
           ))
        :
        cart&& cart.length!==0?
            cart.map((item,index)=>(
                <div key={index} style={{
                 backgroundColor: cart.includes(item)
                   ? "rgb(0, 0, 0,0.2)"
                   : "white",
               }} className='card col-md-4 mt-2 mb-2'>
                    <p className='pt-2'><b>S.No - {index+1}</b></p>
                    {/* {console.log(item)} */}
                    <img
                      style={{margin:"auto"}}
                            src={item.photoPreview }
                            className="rounded "
                            alt="pic"
                            width="250px"
                        /><hr></hr>
                        <div className="text-center ">
                        <p><b>Name -</b> {item.name}</p> 
                        <p><b>M.R.P -</b> &#x20B9; {item.mrp}</p>
                        <p><b>Category -</b> {item.category}</p>
                        <p><b>Description -</b> {item.description}</p>
                        <div className="text-center">
                { !cart.includes(item) ? <button className="btn btn-danger btn-sm m-2" onClick={() => handleLike(index)} >Add to cart</button>
                :
                <button  className="btn btn-dark btn-sm m-2"  onClick={() => handleLike2(index)}>Remove from cart</button>
                }
               </div>
                        
                            </div>
                    </div>
            )):
            <h1 className="ml-5 mt-5 text-center">No items Added to cart</h1>
        } </div>
        </div>
     );
}
 
export default Home;