import { useEffect, useState } from "react";
import { useTodos } from "./useTodos.js";
import { useEidt } from "./useEidt.js";
import { useNavigate, useParams } from "react-router-dom";
import side from "./img/side.png";
import dark from "./img/dark.svg";
import man from "./img/man.jpg";
import Alart from "./Alart.jsx";
import Newfrom from "./Newfrom.jsx";
function Fromin() {
  const { list, setListUpdates } = useTodos();
  const [back, setback] = useState(false);
  const [deleteAlart, setDeleteAlart] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [markPaid, setMarkpaid] = useState();
  const { isEdit, handleEidt } = useEidt();

  const handleChangeStatus = () => {
    setMarkpaid(!markPaid);
    if (markPaid) {
      setListUpdates("Paid");
    }
  };

  const handleDeleteAlart = () => {
    setDeleteAlart(deleteAlart);
  };

  const navigate = useNavigate();
  const handleFrominBack = () => {
    setback(!back);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const params = useParams();
  const id = params.id;
  const filteredData = list.find((v) => Number(v.id) === Number(id));

  useEffect(() => {
    console.log("List ", list);
  }, [list]);

  console.log("Retrieved formData from localStorage:", id);

  return (
    <>
      {" "}
      {true === isEdit && (
        <div className="absolute z-20">
          <Newfrom id={id} />
        </div>
      )}
      {}{" "}
      <div className="hidden lg:flex absolute z-20">
      <nav className="">
                <div className="bg-slate-700  md:w-full hidden md:flex h-screen  flex-col rounded-br-3xl rounded-tr-3xl justify-between">
                  <img
                    src={side}
                    className=" w-full h-auto"
                  ></img>
                 


                  <div className="bg-slate-700 flex flex-col justify-between rounded-br-3xl mt-[1px]">
                  <div className="flex justify-center ">
                    <button className="flex items-end">
                      <img
                        src={dark}
                        width={25}
                        height={25}
                        className="flex  mb-6"
                      ></img>
                    </button>
                  </div>
                  <hr className="bg-slate-900 h-[2px] border-transparent "></hr>

                  <img
                    src={man}
                    width={30}
                    height={30}
                    className="rounded-full flex items-center text-center m-8 justify-center"
                  ></img>
                </div>
                </div>
               
              </nav>
      </div>
      <section className=" grid items-center w-full mx-auto justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-transparent flex  font-semibold text-white text-start justify-center items-center md:w-32 md:h-12 rounded-md"
        >
          Go back
        </button>

        <div className="rounded-xl mb-4 bg-gray-900">
          <div className="flex items-center p-2 ">
            <div className="flex text-center ">
              <p className="text-white px-3  md:px-8 md:py-4 md:font-semibold">Status</p>
              <p className="bg-gray-950  px-3 md:px-8 md:py-4 md:text-lg text-xs md:font-semibold text-white  text-center rounded-md">
                {markPaid ? "Paid" : filteredData?.type}
              </p>
            </div>
            <div className="flex ml-5 sm:ml-10 md:ml-20">
              <button
                onClick={handleEidt}
                className="text-gray-800 font-semibold flex items-center justify-center text-center bg-gray-300  text-xs  px-3 md:px-8 md:py-4 rounded-full"
              >
                Eidt
              </button>
              <button
                onClick={handleDeleteAlart}
                className="bg-red-800 font-semibold text-xs md:text-md ml-2 text-white  px-3 md:px-8 md:py-4 rounded-full"
              >
                <div>
                  <button onClick={handleShowAlert}>Delete</button>
                  <Alart
                    isOpen={showAlert}
                    onClose={handleCloseAlert}
                    id={id}
                  />
                </div>
              </button>
              <button
                onClick={handleChangeStatus}
                className="bg-indigo-700 font-semibold text-xs md:text-sm text-white  px-3 py-1 md:px-8 md:py-4 rounded-full"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center w-full rounded-xl mb-5 h-auto bg-gray-900">
          <div className="grid grid-cols-2 justify-between">
            <div className="flex flex-col m-6">
              <h1 className="text-md font-semibold">Invoice ID</h1>
              <p className="text-sm text-gray-400">{id}</p>
              <h1 className="text-md font-semibold">Name</h1>
              <p className="text-sm text-gray-400">{filteredData?.name}</p>
              <h1 className="text-md font-semibold">Post Code</h1>
              <p className="text-sm text-gray-400">{filteredData?.code}</p>
              <h1 className="text-md font-semibold">Invoice date</h1>
              <p className="text-sm text-gray-400">{filteredData?.date}</p>
            </div>
            <div className="flex flex-col m-2 md:m-6">
              <p className="text-xs md:text-sm text-gray-400">
                {filteredData?.address} <br />
                {filteredData?.city} <br />
                {filteredData?.country} <br />
                {filteredData?.email}
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 m-4 bg-gray-800">
            <div className="flex justify-between w-fill m-6">
              <p className="text-white mb-2 font-semibold">Item Name</p>
              <p className="text-white mb-2 font-semibold">Qty.</p>
              <p className="text-white mb-2 font-semibold">Price</p>
              <p className="text-white mb-2 font-semibold">Total</p>
            </div>
            <div className="flex flex-row w-fix justify-between m-6">
              <p className="text-sm text-gray-400">no data</p>
              <p className="text-sm text-gray-400">no data</p>
              <p className="text-sm text-gray-400">no data</p>
              <p className="text-sm text-gray-400">no data</p>
            </div>
            <div className="flex flex-row w-full  justify-between bg-gray-700">
              <p className="text-white flex text-center items-center justify-center mb-2 pl-8 font-semibold">
                Total
              </p>
              <p className="text-white font-bold mb-2 pr-4 text-2xl">$3.00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fromin;
