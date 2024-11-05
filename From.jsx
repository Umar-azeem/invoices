import { useState, useEffect } from "react";
import Add from "./Add";
import { useStore, useTodos  } from "./Data.js";

function Form(props) {
  const { formData, setFormData } = useStore();
  const { list, setList } = useTodos();
  const [open, setOpen] = useState([]);
  const [showlist, setShowlist] = useState();
  const [deleteAlart,setDeleteAlart]= useState();
  const openAdd = () => {
    setOpen([...open, {}]);
  };




   const handleSaveType = () =>{
    props.handleShowDraft("Save");
   }

   const handleDraftType = () =>{
    props.handleShowDraft("Draft");
   }

   
  const openDelete = (key) => {
    const openDeleteArray = open.filter((_, i) => i !== key);
    setOpen(openDeleteArray);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const saveToLocalStorage = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved to local storage!");
  };

  
  return (
    <>
      <section>
        <div className="container w-fit h-screen overflow-y-auto bg-gray-900 rounded-lg">
          <div className="ml-28 mr-4">
            <div className="container p-4">
              <h1 className="text-indigo-600 w-20 font-semibold">Bill From</h1>
              <p className="text-gray-500 mb-2 font-semibold">Street Address</p>
              <input
                type="text"
                value={formData.address}
                name="address"
                placeholder="Street Address"
                onChange={handleInputChange}
                className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
              />{" "}
              {props.zulfi}
              <div className="container flex flex-row mt-5">
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">City</p>
                  <input
                    value={formData.city}
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={handleInputChange}
                    className="bg-gray-800 text-sm rounded-md mr-5 w-42 h-10 p-4"
                  />
                </div>
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">Post Code</p>
                  <input
                    value={formData.code}
                    name="code"
                    type="number"
                    placeholder="Post Code"
                    onChange={handleInputChange}
                    className="bg-gray-800 text-sm rounded-md mr-5 w-42 h-10 p-4"
                  />
                </div>
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">Country</p>
                  <input
                    value={formData.country}
                    name="country"
                    type="text"
                    placeholder="Country"
                    onChange={handleInputChange}
                    className="bg-gray-800 text-sm rounded-md w-42 h-10 p-4"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p className="text-gray-500 mb-2 font-semibold">Invoice Date</p>
                <input
                  value={formData.date}
                  name="date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  onChange={handleInputChange}
                  className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
                />
              </div>
              <h1 className="text-indigo-600 w-20 mt-10 font-semibold">
                Bill to
              </h1>
              <div className="mt-5">
                <p className="text-gray-500 mb-2 font-semibold">
                  Client's Name
                </p>
                <input
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Client's Name"
                  onChange={handleInputChange}
                  className="bg-gray-800 text-sm mb-2 rounded-md w-[615px] h-10 p-4"
                />
              </div>
              <div className="mt-5">
                <p className="text-gray-500 mb-2 font-semibold">
                  Client's Email
                </p>
                <input
                  value={formData.email}
                  name="email"
                  type="text"
                  placeholder="Client's Email"
                  onChange={handleInputChange}
                  className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
                />
              </div>
              {open.map((_, index) => (
                <Add
                  key={index}
                  i={index}
                  handleDelete={() => openDelete(index)}
                />
              ))}
              <button
                onClick={openAdd}
                className="bg-transparent text-indigo-600 text-md font-semibold hover:bg-white hover:scale-100 rounded-full w-[615px] h-10 mt-4"
              >
                + Add new Item
              </button>
              <div className="flex flex-row items-center pt-4 justify-between">
                <button onClick={() => { props.setOpen(false);}} className="text-gray-800 font-semibold bg-gray-300 ml-16 w-32 h-12 rounded-full">
                  Discord
                </button>
                
                <div>
                  <button
                  type="draft"
                    onClick={() => {                    
                      props.handleShowInvo();
                      props.setOpen(false);
                      setList([...list, formData]);
                      setFormData({
                        address: "",
                        city: "",
                        code: "",
                        country: "",
                        date: "",
                        name: "",
                        email: "",
                        type:"Draft",
                      });
                    }}
                    className="bg-gray-800 font-semibold text-white w-32 h-12 mr-2 rounded-full "
                               
>
                    Save as Draft
                  </button>
                  <button type="Save"
                    onClick={() => {
                      props.setOpen(false);
                      saveToLocalStorage();
                      setList([...list, formData]);
                      setFormData({
                        address: "",
                        city: "",
                        code: "",
                        country: "",
                        date: "",
                        name: "",
                        email: "",
                        type:"Save",
                       
                      });
                    }}
                    className="bg-indigo-700 font-semibold text-white w-32 h-12 rounded-full"
                  >
                    Save & Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
