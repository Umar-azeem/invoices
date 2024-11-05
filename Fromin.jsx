import { useState } from "react";
import { useTodos } from "./Data.js";
import { useNavigate, useParams } from "react-router-dom";
import side from "./img/side.png";
import dark from "./img/dark.svg";
import man from "./img/man.jpg";
import Alart from "./Alart.jsx";
function Fromin() {
  const { list, setListUpdate } = useTodos();
  const [back, setback] = useState(false);
  const [deleteAlart, setDeleteAlart] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteAlart = () => {
    setDeleteAlart(!deleteAlart);
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
  const filteredData = list.find((v) => v.id === Number(id));
  console.log("formData", filteredData);
  return (
    <>
      {" "}
      <div className="absolute z-20">
        <nav className="container">
          <div className="bg-slate-700 w-auto h-auto flex flex-col rounded-tr-3xl justify-between">
            <img src={side} width={120} height={120} className="mb-10"></img>
            <div className="flex justify-center mt-80">
              <button>
                <img src={dark} width={25} height={25} className="mb-5"></img>
              </button>
            </div>
          </div>
          <div className="bg-slate-700 flex justify-center rounded-br-3xl mt-[1px]">
            <img
              src={man}
              width={30}
              height={30}
              className="rounded-full m-[31px]"
            ></img>
          </div>
        </nav>
      </div>
      <section className=" flex flex-col items-center w-screen justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-transparent flex font-semibold text-white text-start justify-center items-center w-32 h-12 rounded-md"
        >
          Go back
        </button>

        <div className="flex justify-between w-[700px] rounded-xl mb-5 h-20 bg-gray-900">
          <div className="flex flex-row items-center pt-2 justify-between">
            <div className="flex text-center items-center">
              <p className="text-white p-4 font-semibold">Status</p>
              <p className="bg-gray-950 font-semibold text-white w-32 flex justify-center text-center items-center h-12 rounded-md">
              {filteredData?.type}
              </p>
            </div>
            <div className="ml-20">
              <button className="text-gray-800 font-semibold text-sm bg-white w-28 h-11 rounded-full">
                Discord
              </button>
              <button
                onClick={handleDeleteAlart}
                className="bg-red-800 font-semibold text-md ml-2 text-white w-28 h-11 rounded-full"
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
              <button className="bg-indigo-700 font-semibold text-sm text-white w-32 h-12 ml-2 rounded-full">
                Save & send
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[700px] rounded-xl mb-5 h-auto bg-gray-900">
          <div className="flex flex-row justify-between">
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
            <div className="flex flex-col m-6">
              <p className="text-sm text-gray-400">
                {filteredData?.address} <br />
                {filteredData?.city} <br />
                {filteredData?.country} <br />
                {filteredData?.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col  m-4 bg-gray-800">
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
            <div className="flex flex-row w-full  justify-between  bg-gray-700">
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
