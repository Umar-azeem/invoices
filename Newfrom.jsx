import { useState, useEffect } from "react";
import Add from "./Add.jsx";
import { useStore } from "./useStore.js";
import { useTodos } from "./useTodos.js";
import toast, { Toaster } from 'react-hot-toast';
import { useUpdate,useEidt } from "./useEidt.js";


function Newform() {
  const { formData, setFormData } = useStore();
  const { list, setList } = useTodos();
  const [open, setOpen] = useState([]);
  const [showlist, setShowlist] = useState();
  const [deleteAlart, setDeleteAlart] = useState();

  const [openForm, setOpenForm] = useState(false);
  const { isEdit, handleEidt } = useEidt();
  const { formUpdateData,setFormUpdateData } = useUpdate();

  const openAdd = () => {
    setOpen([...open, {}]);
  };
  const openDelete = (key) => {
    const openDeleteArray = open.filter((_, i) => i !== key);
    setOpen(openDeleteArray);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormUpdateData({ ...formUpdateData, [name]: value });
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("formUpdateData", JSON.stringify(formUpdateData));
    toast('Save data to the localStorage.');

  };

  const handleform = () => {
    setOpenForm(!openForm);
  };
  

  console.log("formUpdateData",formUpdateData);

  return (
    <>
      <section>
        <div className="container w-fit h-screen overflow-y-auto bg-gray-900 rounded-lg">
          <div className="ml-28 mr-4">
            <div className="container p-4">
              <div className="flex justify-between">
                <h1 className="text-indigo-600 w-20 font-semibold">
                  Bill From
                </h1>
               <button onClick={handleEidt} ><svg
                  class="w-6 h-6 text-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg></button> 
              </div>
              <p className="text-gray-500 mb-2 font-semibold">Street Address</p>
              <input
                type="text"
                value={formUpdateData.address}
                name="address"
                placeholder="Street Address"
                onChange={handleInputChange}
                className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
              />{" "}
              
              <div className="container flex flex-row mt-5">
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">City</p>
                  <input
                    value={formUpdateData.city}
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
                    value={formUpdateData.code}
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
                    value={formUpdateData.country}
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
                  value={formUpdateData.date}
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
                  value={formUpdateData.name}
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
                  value={formUpdateData.email}
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
                <button
                  onClick={() => {handleEidt();}}
                  className="text-gray-800 font-semibold bg-gray-300 ml-16 w-32 h-12 rounded-full"
                >
                  Cancel
                </button>
                 
                  <button
                    onClick={() => {
                      handleEidt();
                      saveToLocalStorage();
                      setList([...list, {...formData,type:'Save'}]);
                      setFormUpdateData({
                        address: "",
                        city: "",
                        code: "",
                        country: "",
                        date: "",
                        name: "",
                        email: "",
                        type: "save",
                      });
                    }}
                    className="bg-indigo-700 font-semibold text-white w-32 h-12 rounded-full"
                  >
                    Save Changes
                  </button>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newform;
