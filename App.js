import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems,MenuSection } from "@headlessui/react";
import down from "./img/down.svg";

function Input() {
  const [selectedStatus, setSelectedStatus] = useState(""); 

  const handleCheckboxChange = (value) => {
    setSelectedStatus(value);
  };

  return (
    <>
    
      <Menu>
        <MenuButton>
          <div className="flex items-center">
          <p className="text-md font-semibold">Filter by status</p>
          <button>
            <img src={down} width={25} height={25} className="pt-2"></img>
          </button>
          </div>        
        </MenuButton>
        <div className=""> 
        <MenuItems anchor="bottom" className="border border-gray-700 rounded-lg p-3" >
          <MenuItem>
            <div className="flex flex-row m-2">
              <input className="bg-transparent text-white"
                type="checkbox"
                value="Pending"
                checked={selectedStatus === "Pending"}
                onChange={() => handleCheckboxChange("Pending")}
              ></input>
              <p className="text-xs pl-3 font-semibold">Pending</p>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex flex-row m-2">
              <input
                type="checkbox"
                value="Paid"
                checked={selectedStatus === "Paid"}
                onChange={() => handleCheckboxChange("Paid")}
              ></input>
              <p className="text-xs pl-3 font-semibold">Paid</p>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex flex-row m-2">
              <input
                type="checkbox"
                value="Draft"
                checked={selectedStatus === "Draft"}
                onChange={() => handleCheckboxChange("Draft")}
              ></input>
              <p className="text-xs pl-3 font-semibold">Draft</p>
            </div>
          </MenuItem>
        </MenuItems>
        </div>
      </Menu>
     
    </>
  );
}

export default Input;
