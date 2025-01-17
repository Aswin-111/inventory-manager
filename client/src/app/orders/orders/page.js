import React from 'react'

function Orders() {
  return (
    <div className="h-full">
    <div className=" bg-[#F7F7F7] h-full rounded-xl">
      <div className="flex justify-end px-10 py-5 overflow-hidden mt-10 ">
        <button className="px-5 py-3 bg-indigo-500 hover:bg-blue-400 text-white font-semibold rounded-xl">
          Create Orders

        </button>
      </div>

      <div className="flex pl-10 ">
        <p className="border-[1px] border-gray-300 px-4 py-1 rounded-l-md hover:bg-slate-200 cursor-pointer ">
          All Orders
        </p>
        <p className="border-[1px] border-gray-300 px-4 py-1 hover:bg-slate-200 cursor-pointer  ">
          New Order
        </p>
       
      </div>

      <div className="flex justify-end mt-8 px-10">
        {/* <div className=" flex gap-3">
          <button className="bg-gray-700 text-white px-7 py-1 rounded-lg hover:bg-gray-500">
            Copy
          </button>
          <button className="bg-teal-400 text-white px-7 py-1 rounded-lg hover:bg-teal-300">
            Excel
          </button>
          <button className="bg-blue-400 text-white px-7 py-1 rounded-lg hover:bg-blue-300">
            CSV
          </button>
        </div> */}
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
             <th>Order</th>
             <th>Date</th>
             <th>Customer</th>
             <th>Payment Status</th>
             <th>Fullfillment stauts</th>
             <th>Total</th>
             

           </tr>
         </thead>
         <tbody>

          <tr>
            <td>Clock</td>
            <td>1</td>
            <td>100</td>
            <td>Electronics</td>
          </tr>
       
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
  </div>
  )
}

export default Orders