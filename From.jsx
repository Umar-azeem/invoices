import { useState } from "react";
import Add from "./Add";

function Form() {
  const [open, setOpen] = useState([]);
  const openAdd = () => {
    setOpen([...open, {}]); 
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
                placeholder="Street Address"
                className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
              />
              <div className="container flex flex-row mt-5">
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">City</p>
                  <input
                    type="text"
                    placeholder="City"
                    className="bg-gray-800 text-sm rounded-md mr-5 w-42 h-10 p-4"
                  />
                </div>
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">Post Code</p>
                  <input
                    type="text"
                    placeholder="Post Code"
                    className="bg-gray-800 text-sm rounded-md mr-5 w-42 h-10 p-4"
                  />
                </div>
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">Country</p>
                  <input
                    type="text"
                    placeholder="Country"
                    className="bg-gray-800 text-sm rounded-md w-42 h-10 p-4"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p className="text-gray-500 mb-2 font-semibold">Invoice Date</p>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
                />
              </div>
              <h1 className="text-indigo-600 w-20 mt-10 font-semibold">Bill to</h1>
              <div className="mt-5">
                <p className="text-gray-500 mb-2 font-semibold">Client's Name</p>
                <input
                  type="text"
                  placeholder="Client's Name"
                  className="bg-gray-800 text-sm mb-2 rounded-md w-[615px] h-10 p-4"
                />
              </div>
              <div className="mt-5">
                <p className="text-gray-500 mb-2 font-semibold">Client's Email</p>
                <input
                  type="text"
                  placeholder="Client's Email"
                  className="bg-gray-800 text-sm rounded-md w-[615px] h-10 p-4"
                />
              </div>
              <div className="flex justify-between w-[500px] m-2">
                <p className="text-gray-500 mb-2 font-semibold">Item Name</p>
                <p className="text-gray-500 mb-2 font-semibold">Qty.</p>
                <p className="text-gray-500 mb-2 font-semibold">Price</p>
                <p className="text-gray-500 mb-2 font-semibold">Total</p>
              </div>
              
                  {open.map((_, index) => (
                <Add key={index} />
              ))}

              <button
                onClick={openAdd}
                className="bg-transparent text-indigo-600 text-md font-semibold hover:bg-white hover:scale-100 rounded-full w-[615px] h-10 mt-4"
              >
                + Add new Item
              </button>

              <div className="flex flex-row items-center pt-4 justify-between">
                <button className="text-gray-800 font-semibold bg-gray-300 ml-16 w-32 h-12 rounded-full">
                  Edit
                </button>
                <div>
                  <button className="bg-gray-800 font-semibold text-white w-32 h-12 rounded-full">
                    Delete
                  </button>
                  <button className="bg-indigo-700 font-semibold text-white w-32 h-12 rounded-full">
                    Mark as paid
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
