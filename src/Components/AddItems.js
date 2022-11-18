import React,{useState} from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./formInput.css";
import "./AddItems.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



export function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
      <div className="formInput">
        <label>{label}</label>
        <input className="inputboxes"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    );
  };



const AddItems = () => {
    const [values, setValues] = useState({
        itemname: "",
        link: "",
        resourcename: "",
        description: "",
      });

    const inputs=[
        {
            id: 1,
            name: "Item Name",
            type: "text",
            placeholder: "Name of item",
            errorMessage:
              "Name should be 3-16 characters and shouldn't include any special character!",
            label: "Item Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "Link",
            type: "url",
            placeholder: "Link",
            errorMessage: "It should be a valid url!",
            label: "Link",
            required: true,
        },
        {
            id: 3,
            name: "Resource Name",
            type: "text",
            placeholder: "Name of Resource",
            errorMessage:
              "Name should be 3-16 characters and shouldn't include any special character!",
            label: "Resource Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 4,
            name: "Description",
            type: "text",
            placeholder: "Add about the items",
            errorMessage:
              "Description should be 20-100 characters and shouldn't include any special character!",
            label: "Description",
            pattern: "^[a-zA-Z0-9_ ]{20,100}$",
            required: true,
        },

    ];

    const handleSubmit = (e) => {

        // e.preventDefault();
        
          e.preventDefault();
          let data = {...values}
          console.log(data);
          axios.post("https://media-content.ccbp.in/website/react-assignment/add_resource.json",{
            data
          })
          .then(res=>console.log(toast.success(`Adding to db: ${res}`, {
                                  position: "bottom-center",
                                  autoClose: 5000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: "colored",
                                  })))
          .catch(err=>{
                      toast.error(`${err}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
            })
        }
      

    
      const onChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value });
      };

  return (
    <>
    <Link to ="/">
    <div className="mx-auto">
      <FaArrowLeft />
    </div>
    </Link>
    <div  className="px-4 mainbox ">
   
    <div className="add" >
    {/* <div style={{padding:"7rem", marginLeft:"5rem"}}> */}
    <form className="border"  onSubmit={handleSubmit}>
        <h2 className="mx-5 mt-3">Items Details</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="addBtn">CREATE</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      </form>
      
    {/* </div> */}
    </div>
    </div>
    </>
  )
}

export default AddItems;