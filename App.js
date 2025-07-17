  import "./App.css";
import side from "./img/side.png";
import dark from "./img/dark.svg";
import man from "./img/man.jpg";
import Invodata from "./Invodata";
import inbg from "./img/inbg.svg";
import From from "./From";
import Input from "./Inputs";
import { useState } from "react";
import { useTodos } from "./Data";
import { Link } from "react-router-dom";
function App(props) {
  const [open, setOpen] = useState(false);
  const { list } = useTodos();
  const [showFromIn, setShowFromIn] = useState(false);
  const [showInvo, setShowInvo] = useState(false);

  const handleSaveClick = () => {
    setShowFromIn(!showFromIn);
  };


  const handleShowInvo = () => {
    setShowInvo(!showInvo);
  };
  
  true === showInvo && <Invodata />
  const openForm = () => {
    setOpen(!open);
  };


  return(
    <>
      <section className="container">
        <div className="container flex  flex-row ">
          <div className="absolute z-20">
            <Link to="/">
              {" "}
              <nav className="container">
                <div className="bg-slate-700 w-auto h-auto flex flex-col rounded-tr-3xl justify-between">
                  <img
                    src={side}
                    width={120}
                    height={120}
                    className="mb-10"
                  ></img>
                  <div className="flex justify-center mt-80">
                    <button>
                      <img
                        src={dark}
                        width={25}
                        height={25}
                        className="mb-5"
                      ></img>
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
            </Link>
          </div>
          <div className="absolute z-10">
           {true === open && (
              <From
              
                openForm={openForm}
                handleSaveClick={handleSaveClick}
                setOpen={setOpen}
                handleShowInvo={handleShowInvo}
              />
            )}{" "}
          </div>
          <div className="container relative z-0 flex flex-col  pl-28 justify-center">
            <div className="flex flex-row p-20 justify-between">
              <div>
                <h1 className="text-3xl font-bold">Invoices</h1>
                <p className="text-gray-300 text-sm">
                  There are 0 total invoices
                </p>
              </div>
              <div className="flex ">
                <div className="">
                  <Input />
                </div>
                <button
                  onClick={openForm}
                  className="inline-flex items-center p-2 text-center justify-between w-50 h-14 bg-indigo-600 rounded-full"
                >
                  <div className="bg-white text-indigo-600 flex items-center text-center justify-center p-1 mr-4 font-bold rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <p className="text-md font-medium ">new Invoices</p>
                </button>
              </div>
            </div>
            <div className="ml-64">
              {list.length !== 0 ? (
                <Invodata  />
              ) : (
                  <div className="flex flex-col items-center pt-4 justify-center">
                    <img src={inbg} width={300} height={300} className=""></img>
                    <h1 className="text-base font-bold">
                      There is nothing here
                    </h1>
                    <p className="text-center text-gray-300 text-xs pt-1">
                      Create an invoice by clicking the New <br></br>
                      Invoice button and get started
                    </p>
                  </div>
                 
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
