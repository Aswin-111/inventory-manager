// import AddLead from "@/app/snippets/addNewLead/addLead";
// import React from "react";

// function Leads() {
//   return (
//     <div className="h-full relative">
//       <div className=" bg-[#F7F7F7] h-full rounded-xl">
//         <div className="flex justify-end px-10 py-5 overflow-hidden mt-10 ">
//           <button className="px-5 py-3 bg-indigo-500 hover:bg-blue-400 text-white font-semibold rounded-xl">
//             Add New Lead
//           </button>
//         </div>

//         <div className="flex pl-10 ">
//           <p className="border-[1px] border-gray-300 px-4 py-1 rounded-l-md hover:bg-slate-200 cursor-pointer ">
//             All
//           </p>
//           <p className="border-[1px] border-gray-300 px-4 py-1 hover:bg-slate-200 cursor-pointer  ">
//             New
//           </p>
//           <p className="border-[1px] border-gray-300 px-4 py-1 hover:bg-slate-200 cursor-pointer  ">
//             Won
//           </p>
//           <p className="border-[1px] border-gray-300 px-4 py-1 hover:bg-slate-200 cursor-pointer  ">
//             Follow Up
//           </p>
//         </div>

//         <div className="flex justify-between mt-8 px-10">
//           <div className=" flex gap-3">
//             <button className="bg-gray-700 text-white px-7 py-1 rounded-lg hover:bg-gray-500">
//               Copy
//             </button>
//             <button className="bg-teal-400 text-white px-7 py-1 rounded-lg hover:bg-teal-300">
//               Excel
//             </button>
//             <button className="bg-blue-400 text-white px-7 py-1 rounded-lg hover:bg-blue-300">
//               CSV
//             </button>
//           </div>
//           <div>
//             <input
//               placeholder="Search"
//               type="search"
//               className="h-full w-[400px] border-2 border-gray-300 rounded-lg outline-none p-2"
//             />
//           </div>
//         </div>

//         <div className="mt-10">
//        <div className="overflow-x-auto px-10">
//          <table className="table flex justify-center">
//            {/* head */}
//            <thead className="bg-[#7F7F7F] text-white border-[#ECECEB] border-2 ">
//              <tr>
//                <th>Name</th>
//                <th> Phone</th>
//                <th>Rating</th>
//                <th>Status</th>
//                <th>Action</th>

//              </tr>
//            </thead>
//            <tbody>

//             <tr>
//               <td>Clock</td>
//               <td>1</td>
//               <td>100</td>
//               <td>Electronics</td>
//             </tr>

//            </tbody>
//          </table>

//          <div className="join absolute right-10 mt-5">
//            <button className="join-item btn">1</button>
//            <button className="join-item btn btn-active">2</button>
//            <button className="join-item btn">3</button>
//            <button className="join-item btn">4</button>
//          </div>
//        </div>

//      </div>

//       </div>

//     <div className="absolute top-0">
//     <AddLead/>
//     </div>
//     </div>
//   );
// }

// export default Leads;
"use client";

import AddLead from "@/app/snippets/addNewLead/addLead";
import interceptor from "@/app/utils/interceptor";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoGift } from "react-icons/io5";
import { IconContext } from "react-icons";
import Delete from "@/app/snippets/editlead/editlead";
import EditLead from "@/app/snippets/editlead/editlead";
function Leads() {
  const [showAddLead, setShowAddLead] = useState(false);

  const [data, setData] = useState([]);

  const [edittoggle, setEditToggle] = useState({ tog: false, id: 0 });

  useEffect(() => {
    async function getleads() {
      try {
        const response = await interceptor.get(
          `${process.env.NEXT_PUBLIC_BASE}/getleads`
        );

        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getleads();
  }, [showAddLead]);
  const handleToggleAddLead = (value) => {
    setShowAddLead(value);
  };

  return (
    <div className="h-full relative">
      <div className="bg-[#F7F7F7] h-full rounded-xl">
        <div className="flex justify-end px-10 py-5 overflow-hidden mt-10">
          <button
            onClick={() => handleToggleAddLead(true)}
            className="px-5 py-3 bg-indigo-500 hover:bg-blue-400 text-white font-semibold rounded-xl"
          >
            Add New Lead
          </button>
        </div>

        <div className="flex pl-10">
          <p className="border-[1px] border-gray-300 px-4 py-1 rounded-l-md hover:bg-slate-200 cursor-pointer">
            All
          </p>
          <p className="border-[1px] border-gray-300 px-4 py-1 hover:bg-slate-200 cursor-pointer">
            New
          </p>
          <p className="border-[1px] border-gray-300 px-4 py-1 hover:bg-slate-200 cursor-pointer">
            Won
          </p>
          <p className="border-[1px] border-gray-300 px-4 py-1 hover:bg-slate-200 cursor-pointer">
            Follow Up
          </p>
        </div>

        <div className="flex justify-between mt-8 px-10">
          <div className="flex gap-3">
            <button className="bg-gray-700 text-white px-7 py-1 rounded-lg hover:bg-gray-500">
              Copy
            </button>
            <button className="bg-teal-400 text-white px-7 py-1 rounded-lg hover:bg-teal-300">
              Excel
            </button>
            <button className="bg-blue-400 text-white px-7 py-1 rounded-lg hover:bg-blue-300">
              CSV
            </button>
          </div>
          <div>
            <input
              placeholder="Search"
              type="search"
              className="h-full w-[400px] border-2 border-gray-300 rounded-lg outline-none p-2"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="overflow-x-auto px-10">
            <table className="table flex justify-center">
              {/* head */}
              <thead className="bg-[#7F7F7F] text-white border-[#ECECEB] border-2 ">
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((i, key) => {
                  return (
                    <tr key={key}>
                      <td>{i.name}</td>
                      <td>{i.phone}</td>
                      <td>{i.rating}</td>
                      <td>{i.status}</td>

                      <td className="w-[40%] flex justify-around">
                        <button
                          className="px-5  text-white bg-indigo-500 rounded-lg"
                          onClick={() =>
                            setEditToggle({ tog: true, id: i._id })
                          }
                        >
                          Edit
                        </button>
                        <button className="px-5  text-white bg-indigo-500 rounded-lg">
                          Delete
                        </button>
                        <button className="px-5  text-white bg-indigo-500 rounded-lg">
                          Order
                        </button>
                      </td>
                    </tr>
                  );
                })}
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

      {/* Conditionally render AddLead */}
      {showAddLead && (
        <div className="absolute top-0 w-full h-full">
          <AddLead
            handleToggleAddLead={handleToggleAddLead}
            id={edittoggle.id}
          />
        </div>
      )}
      {edittoggle.tog && (
        <div className="absolute top-0 w-full h-full">
          <EditLead handleToggleAddLead={setEditToggle} />
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default Leads;
