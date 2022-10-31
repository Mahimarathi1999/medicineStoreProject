import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = ({items1,setItems,isauth}) => {

    // const [photoPreview, setPhotoPreview] = useState();
    const[data,setData]=useState({
      name:'',
      category:'',
      mrp:"",
      description:'',
      photoPreview:''
    })

  const handleImage = (file) => {
    // if (file) {
    //   let reader = new FileReader();
    //   reader.onload = async () => {
        
    //       let preview = URL.createObjectURL(file);
    //       console.log(preview);

    //       setData({...data,photoPreview:preview});

    //     //   const formdata = new FormData();
    //     //   formdata.append("file", file);

    //     //   const fileName = await FileUpload(formdata);
    //     //   setPhoto(fileName);
    //     //   setError({ ...error, photo: "" });
        
    //   };
    //   reader.readAsDataURL(file);
    // }
    if (file) {
      let reader = new FileReader();
      reader.onload = async () => {
       
          // let preview = URL.createObjectURL(file);
          console.log(reader.result);
          setData({...data,photoPreview:reader.result});
          // setPhotoPreview(preview);

          // const formdata = new FormData();
          // formdata.append("file", file);

          // const fileName = await FileUpload(formdata);
          // setPhoto(fileName);
        //   setError({ ...error, photo: "" });
        
      };
      reader.readAsDataURL(file);
    }

  };


const clearState=()=>{
  setData({ name:'',
  category:'',
  mrp:"",
  description:'',
  photoPreview:''})
}

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(isauth){
    setItems([data])
    console.log("called")
   
    // var a = [];
    // a.push(JSON.parse(localStorage.getItem('MedItem')));
    // a.push(JSON.parse(data))
    // localStorage.setItem('MedItem', JSON.stringify(a));
    

    if(localStorage.length>0){
      var text=[]
       text = JSON.parse(localStorage.getItem("MedItem"))
      console.log(text)
      if(text){
        text.push(data)
        var myobj = JSON.stringify(text);
        localStorage.setItem("MedItem", myobj);
      }
      else{
        var myobj = JSON.stringify([data]);
        localStorage.setItem("MedItem", myobj);
      }
    }
    toast.success('Medicine added successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
//  alert("")
    clearState()
  }
  else{
  toast.error(' Please Login First to Add', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        clearState()  
  }
      
  }

    return ( 
        <div className="text-center" >
           <ToastContainer />
          {console.log(items1)}
          <h1 className="text-center">Add Medicine</h1>
            <div className="row mt-5 ">
        <div className="col-md-4"></div>
        <div className="col-md-4 pb-3  border rounded bg-light">
             <form>
             <div className="icon-upload">
                
            
                <input
                // style={{margin:"auto"}}
                className="custom-file-input mt-2"
                required={true}
                  type="file"
                  accept="image/*"
                  onClick={(e) => {
                    e.target.value = "";
                  }}
                  onChange={(e) => handleImage(e.target.files[0])}
                />
                  <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                  <div className="row">
                     
                     { data?.photoPreview&& <img
                     style={{margin:"auto"}}
                           src={data?.photoPreview }
                           className="rounded-circle"
                           alt="pic"
                           width="250px"
                       />}
               
          

            </div>
              </div>

            <div class="form-outline mb-2 mt-3">
              <label class="form-label" for="form1Example1">
                Name of Medicine
              </label>{" "}
              <input
                type="text"
                id="name"
                class="form-control"
                required={true}
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                  
                }}
                // onFocus={(e) => setError({ ...error, firstName: "" })}
                // onBlur={(e) => handleValidation("firstName")}
                

              />
               {/* {error && (
                    <span style={{ color: "red" }}>{error?.firstName}</span>
                  )} */}

            </div>
            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example12">
                Category
              </label>{" "}
              <input type="text" required={true} id="Category" class="form-control"
              value={data.category}
              onChange={(e) => {
                setData({ ...data, category: e.target.value });
              }} 
            //   onFocus={(e) => setError({ ...error, lastName: "" })}
            //   onBlur={(e) => handleValidation("lastName")}
                />
                {/* {error && (
                    <span style={{ color: "red" }}>{error?.lastName}</span>
                  )} */}

            </div>
            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example1">
                MRP
              </label>{" "}
              <input type="number" id="mrp" required={true} class="form-control" 
              value={data.mrp}
              onChange={(e) => {
                setData({ ...data, mrp: e.target.value });
              }}
            //   onFocus={(e) => setError({ ...error, email: "" })}
            //   onBlur={(e) => handleValidation("email")}

              />
               {/* {error && (
                    <span style={{ color: "red" }}>{error?.email}</span>
                  )} */}

            </div>

            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example2">
                Description
              </label>{" "}
              <input type="text" id="Description" required={true} class="form-control" 
              value={data.description}
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
            //   onFocus={(e) => setError({ ...error, password: "" })}
            //   onBlur={(e) => handleValidation("password")}

              />
               {/* {error && (
                    <span style={{ color: "red" }}>{error?.password}</span>
                  )} */}

            </div>
          

            <button type="submit" class="btn btn-primary " 
            onClick={(e)=>handleSubmit(e)}
            >
              Add
            </button>
            
          </form>
          </div>
        <div className="col-md-4"></div>
      </div>
        </div>
     );
}
 
export default Add;