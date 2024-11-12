import { useState } from "react";
import Add from "./Add.jsx";
import { useEidt, useUpdate } from "./useEidt.js";
import { useTodos } from "./useTodos.js";
import toast from "react-hot-toast";

function Newfrom({ id }) {
  const [open, setOpen] = useState([]);
  const { handleEidt } = useEidt();
  const { formUpdateData, setFormUpdateData } = useUpdate();
  const { setEidtUpdate } = useTodos();

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
  const saveUpdate = () => {
    toast("Update data");
  };

  console.log("formUpdateData", formUpdateData);
  return (
    <>
      <section>
        <div className="container w-fit h-screen overflow-y-auto bg-gray-900 rounded-lg">
          <div className="md:ml-28 mr-4">
            <div className=" container p-1 lg:p-4">
              <div className="flex justify-between">
                <h1 className="text-indigo-600 w-full font-semibold">
                  Bill From
                </h1>
                <button onClick={handleEidt}>
                  <svg
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
                  </svg>
                </button>
              </div>
              <p className="text-gray-500 mb-2 font-semibold">Street Address</p>
              <input
                type="text"
                value={formUpdateData.address}
                name="address"
                placeholder="Street Address"
                onChange={handleInputChange}
                className="bg-gray-800 text-sm rounded-md w-full  md:h-10 p-1 lg:p-4"
              />{" "}
              <div className="container grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-3 mt-5">
                <div>
                  <p className="text-gray-500 mb-2 font-semibold">City</p>
                  <input
                    value={formUpdateData.city}
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={handleInputChange}
                    className="bg-gray-800 text-sm rounded-md mr-5 w-full h-10 p-1 lg:p-4"
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
                    className="bg-gray-800 text-sm rounded-md mr-5 w-full h-10 p-1 lg:p-4"
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
                    className="bg-gray-800 text-sm rounded-md w-full h-10 p-1 lg:p-4"
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
                  className="bg-gray-800 text-sm rounded-md w-full h-6 md:h-10 p-2 lg:p-4"
                />
              </div>
              <h1 className="text-indigo-600 w-20 mt-2 lg:mt-10 font-semibold">
                Bill to
              </h1>
              <div className="mt-2 lg:mt-5">
                <p className="text-gray-500 mb-2 font-semibold">
                  Client's Name
                </p>
                <input
                  value={formUpdateData.name}
                  name="name"
                  type="text"
                  placeholder="Client's Name"
                  onChange={handleInputChange}
                  className="bg-gray-800 text-sm mb-2 rounded-md  w-full h-6 md:h-10 p-2 lg:p-4"
                />
              </div>
              <div className="mt-2 md:mt-5">
                <p className="text-gray-500 mb-2 font-semibold">
                  Client's Email
                </p>
                <input
                  value={formUpdateData.email}
                  name="email"
                  type="text"
                  placeholder="Client's Email"
                  onChange={handleInputChange}
                  className="bg-gray-800 text-sm rounded-md   w-full h-6 md:h-10 p-2 lg:p-4"
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
                className="bg-transparent text-indigo-600 text-md font-semibold hover:bg-white hover:scale-100 rounded-full w-72  md:w-[615px] h-6 md:h-10 mt-4"
              >
                + Add new Item
              </button>
              <div className="flex flex-row items-center pt-4 justify-between">
                <button
                  onClick={() => {
                    handleEidt();
                  }}
                  className="text-gray-800 font-semibold bg-gray-300 md:ml-16 text-xs p-2 md:w-32 md:h-12 rounded-full"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    handleEidt();
                    saveUpdate();
                    setEidtUpdate(id, formUpdateData);
                    setFormUpdateData({
                      id: "",
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

export default Newfrom;
