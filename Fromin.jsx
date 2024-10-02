function Add() {
  return (
    <>
    <div className="flex justify-between w-[700px] rounded-xl mb-5 h-20 mb- bg-gray-900">

      <div className="flex flex-row items-center pt-2 justify-between">
        <div className="flex text-center items-center"><p className="text-white p-4 font-semibold">Status</p> <button className="bg-gray-950 font-semibold text-white w-32 h-12 rounded-md">
          draft
          </button> </div>
        <div className="ml-20">
        <button className="text-gray-800 font-semibold text-sm bg-white w-28 h-11 rounded-full">
          Discord
        </button>
          <button className="bg-red-800 font-semibold text-md ml-2 text-white w-28 h-11 rounded-full">
            Delete
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
          <div className="" ><h1 className=" text-md font-semibold">Invoice ID</h1><p className="text-sm text-gray-400">#03447928295</p></div>
          <div><h1 className=" text-md font-semibold">Name</h1><p className="text-sm text-gray-400">Umar</p></div>
          <div><h1 className=" text-md font-semibold">Post Code</h1><p className="text-sm text-gray-400">40401</p></div>
          <div><h1 className=" text-md font-semibold">Invoice date</h1><p className="text-sm text-gray-400">no date</p></div>
           </div>
          <div className="flex flex-col m-6"><p className="text-sm text-gray-400">Chak 6nb Bhalwal <br />Bhalwal <br />Pakistan <br />umara4436@gmail.com</p></div>
          </div>
         <div className="flex flex-col p-10 m-4 bg-gray-800">
         <div className="flex justify-between w-[500px] m-8">
                <p className="text-white mb-2 font-semibold">Item Name</p>
                <p className="text-white mb-2 font-semibold">Qty.</p>
                <p className="text-white mb-2 font-semibold">Price</p>
                <p className="text-white mb-2 font-semibold">Total</p>
              </div>
           <div className="flex flex-row w-[500px] justify-between m-8">
           <p className="text-sm  text-gray-400">no date</p>
           <p className="text-sm  text-gray-400">no date</p>
           <p className="text-sm  text-gray-400">no date</p>
           <p className="text-sm  text-gray-400">no date</p>
           </div> 
           <div className="flex flex-row w-[570px] justify-between p-5 bg-gray-700">
            <p className="text-white mb-2 font-semibold">Total</p><p className="text-white font-bold mb-2 text-2xl">$3.00</p>
            </div> 
         </div>
         
    </div>
    </>
  );
}
export default Add;
