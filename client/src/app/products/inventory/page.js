"use client";
import React from "react";
import useStore from "@/app/store/store";

import NewItem from "@/app/snippets/inventory/newitem";

function Inventory() {
  const { inventory_toggle, setInventoryToggle } = useStore((state) => {
    return state;
  });
  return (
    <div className="h-full">
      <div className=" bg-[#F7F7F7] h-full rounded-xl">
        <div className="flex justify-end px-10 py-5 overflow-hidden mt-10">
          <div></div>
          <button
            className="px-5 py-3 bg-indigo-500 hover:bg-blue-400 text-white font-semibold rounded-xl"
            onClick={() => setInventoryToggle(true)}
          >
            Add New
          </button>
        </div>

        <div className="mt-10">
          <div className="overflow-x-auto px-16">
            <table className="table flex justify-center">
              {/* head */}
              <thead className="bg-[#7F7F7F] text-white border-[#ECECEB] border-2 ">
                <tr>
                  <th>Material</th>
                  <th> Unit</th>
                  <th>Inventory</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Clock</td>
                  <td>1</td>
                  <td>100</td>
                  <td>Electronics</td>
                </tr>
                {/* row 1

             {categories_from_db.map((i, index) => {
               return (
                 <tr key={index}>
                   <th>{index + 1}</th>
                   <td>{i.category_name}</td>
                   <td>
                     <img
                      //  src={`http://localhost:5000/img/${i.filename}`}
                      //  alt="category"
                      //  className="w-10 h-10"
                     />
                   </td>
                 </tr>
               );
             })} */}
                {/* row 2 */}
              </tbody>
            </table>

            <div className="join absolute right-10 mt-5">
              <button className="join-item btn">1</button>
              <button className="join-item btn btn-active">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">4</button>
            </div>
          </div>
        </div>
      </div>

      {inventory_toggle && (
        <div className="absolute top-0  w-[80vw] h-[100vh]  max-h-[100vh]  pt-7  z-10 flex justify-center  overflow-hidden bg-transparent">
          <NewItem setIntervalToggle={setInventoryToggle} />
        </div>
      )}
    </div>
  );
}

export default Inventory;
