// "use client";

// import Link from "next/link";
// import { useEffect,useState } from "react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// function SideBar() {

//   const [href,setHref] = useState("")

//   const [accordiontoggle,setAccordionToggle] = useState(true)
//   const [productstoggle,setProductsToggle] = useState(true)

//   useEffect(()=>{

//   },[href])
//   return (
//   <div className="w-full flex flex-col items-center ">

//     <div className="w-full  flex flex-col mt-16  items-center px-4 ">
//         <Link href = "/dashboard" className={href.includes('/order/dashboard') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>DashBoard</Link>
//         {/* <Link href = "/order/products" className={href.includes('/order/products') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Products</Link> */}

//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger onClick = {()=>{

//           if(productstoggle === true ){

//           setProductsToggle(false)

//           }
//           else{
//             setProductsToggle(true)
//           }

//              }}>Products</AccordionTrigger>
//         <AccordionContent>
//         <Link href = "/products/products" className={href.includes('/products/products') ? `bg-white text-black border-2 border-[#EBEBEB] w-full flex justify-center px-[5rem] py-4 rounded-xl ` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{
//       setHref('/products/products')
//         }}>Products</Link>
//         </AccordionContent>
//         <AccordionContent>
//         <Link href = "/products/category" className={href.includes('/products/category') ? `bg-indigo-400 text-white w-full flex justify-center px-[5rem] py-4 rounded-xl ` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{
//       setHref('/products/category')
//         }}>Category</Link>
//         </AccordionContent>
//         <AccordionContent>

//         <Link href = "/products/inventory" className={href.includes('/products/inventory') ? `bg-indigo-400 text-white w-full flex justify-center px-[5rem] py-4 rounded-xl ` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{

//     setHref('/products/inventory')

//         }}>I </Link>
//         </AccordionContent>
//       </AccordionItem>
//       {/* <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem> */}
//     </Accordion>

// {productstoggle &&
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger onClick = {()=>{

//           if(accordiontoggle === true ){

//             setAccordionToggle(false)

//             }
//             else{
//               setAccordionToggle(true)
//             setProductsToggle(true)

//             }

//         }}>Orders</AccordionTrigger>
//         <AccordionContent className = "w-full">
//         <AccordionContent>
//         <Link href = "/orders/orders" className={href.includes('/order/orders') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{
//      setHref('/orders/orders')
//         }}>Orders</Link>
//         </AccordionContent>
//         <Link href = "/orders/leads" className={href.includes('/order/leads') ? `bg-indigo-400 text-white w-full flex justify-center py-4 px-5 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-[100%] flex justify-center  rounded-xl  px-[5rem] py-4"} onClick = {()=>{
//      setAccordionToggle(true)

//   setHref('/orders/leads')
//         }}>Leads</Link>
//         </AccordionContent>
//         <AccordionContent>
//         <Link href = "/orders/tasks" className={href.includes('/order/orders') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" }   onClick = {()=>{
//       setHref('/orders/tasks')
//         }}>Tasks</Link>
//         </AccordionContent>

// {/* acc */}

//       </AccordionItem>

//       </Accordion>

//       }
//         { (accordiontoggle && productstoggle) && <>
//         <Link href = "/printing" className={href.includes('/printing') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Printing</Link>
//         <Link href = "/shipping" className={href.includes('/shipping') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Shipping</Link>
//         <Link href = "/designing" className={href.includes('/designing') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Designing</Link>
//         <Link href = "/report" className={href.includes('/report') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Report</Link>

//    </>
// }
//     </div>
//     </div>

//   )
// }

// export default SideBar;

// import React from "react";
// import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { FaCartArrowDown } from "react-icons/fa";
// import { IoIosListBox } from "react-icons/io";
// import { LuPenTool } from "react-icons/lu";
// import { IoPrintSharp } from "react-icons/io5";
// import { FaShippingFast } from "react-icons/fa";

// function sidebar() {
//   return (
//     <div className="px-4 mt-10 ">
//       <div className=" text-black  border-[#DADBDB] rounded-lg  p-2 flex items-center gap-4">
//         <RiDashboardHorizontalFill className="text-[#999D9E]"  /> Dashboard
//       </div>
//       <div className=" text-black border-2 border-[#DADBDB] rounded-lg items-center  p-2 flex gap-4">
//         < FaCartArrowDown className="text-[#999D9E]" /> Products
//       </div>

//       <div className=" text-black border-[#DADBDB] rounded-lg  p-2 flex  items-center  gap-4">
//         <IoIosListBox className="text-[#999D9E]" /> Orders
//       </div>
//       <div className=" text-black border-[#DADBDB] rounded-lg  p-2 flex items-center gap-4">
//         <LuPenTool  className="text-[#999D9E]"/> Designing
//       </div>
//       <div className=" text-black  border-[#DADBDB] rounded-lg  p-2 flex items-center gap-4">
//         <IoPrintSharp className="text-[#999D9E]" /> Printing
//       </div>
//       <div className=" text-black border-[#DADBDB] rounded-lg  p-2 flex items-center gap-4">
//         <FaShippingFast className="text-[#999D9E]" /> Shipping
//       </div>
//     </div>
//   );
// }

// export default sidebar;


"use client"

// import React, { useState } from "react";
// import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { FaCartArrowDown } from "react-icons/fa";
// import { IoIosListBox } from "react-icons/io";
// import { LuPenTool } from "react-icons/lu";
// import { IoPrintSharp } from "react-icons/io5";
// import { FaShippingFast } from "react-icons/fa";

// function Sidebar() {
//   const [active, setActive] = useState("Dashboard");
//   const [showSubMenu, setShowSubMenu] = useState(false);

//   const menuItems = [
//     { name: "Dashboard", icon: <RiDashboardHorizontalFill />, subMenu: [] },
//     {
//       name: "Products",
//       icon: <FaCartArrowDown />,
//       subMenu: ["All Products", "Category", "Inventory"],
//     },
//     { name: "Orders", 
//       icon: <IoIosListBox />, 
//       subMenu: ["Leads","Tasks","All Orders "] },
//     { name: "Designing", icon: <LuPenTool />, subMenu: [] },
//     { name: "Printing", icon: <IoPrintSharp />, subMenu: [] },
//     { name: "Shipping", icon: <FaShippingFast />, subMenu: [] },
//   ];

//   const handleMenuClick = (item) => {
//     setActive(item.name);
//     if (item.subMenu.length > 0) {
//       setShowSubMenu((prev) => (active === item.name ? !prev : true));
//     } else {
//       setShowSubMenu(false);
//     }
//   };

//   return (
//     <div className="px-4 mt-10">
//       {menuItems.map((item) => (
//         <div key={item.name}>
//           <div
//             className={`text-black rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
//               active === item.name
//                 ? "border-2 border-[#DADBDB] text-black"
//                 : "border border-transparent text-[#999D9E]"
//             }`}
//             onClick={() => handleMenuClick(item)}
//           >
//             <div
//               className={`${
//                 active === item.name ? "text-black" : "text-[#999D9E]"
//               }`}
//             >
//               {item.icon}
//             </div>
//             {item.name}
//           </div>
//           {item.subMenu.length > 0 && active === item.name && showSubMenu && (
//             <div className="ml-8 mt-2">
//               {item.subMenu.map((subItem) => (
//                 <div
//                   key={subItem}
//                   className="text-[#999D9E] rounded-lg p-2 cursor-pointer hover:text-black hover:border-l-4 hover:border-[#DADBDB]"
//                   onClick={() => setActive(subItem)}
//                 >
//                   {subItem}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;


// import React, { useState } from "react";
// import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { FaCartArrowDown, FaThList, FaWarehouse } from "react-icons/fa";
// import { IoIosListBox } from "react-icons/io";
// import { LuPenTool } from "react-icons/lu";
// import { IoPrintSharp } from "react-icons/io5";
// import { FaShippingFast } from "react-icons/fa";
// import { BsBoxSeam } from "react-icons/bs";

// function Sidebar() {
//   const [active, setActive] = useState("Dashboard");
//   const [showSubMenu, setShowSubMenu] = useState(false);

//   const menuItems = [
//     { name: "Dashboard", icon: <RiDashboardHorizontalFill />, subMenu: [] },
//     {
//       name: "Products",
//       icon: <FaCartArrowDown />,
//       subMenu: [
//         { name: "All Products", icon: <BsBoxSeam /> },
//         { name: "Category", icon: <FaThList /> },
//         { name: "Inventory", icon: <FaWarehouse /> },
//       ],
//     },
//     { name: "Orders", icon: <IoIosListBox />, subMenu: [] },
//     { name: "Designing", icon: <LuPenTool />, subMenu: [] },
//     { name: "Printing", icon: <IoPrintSharp />, subMenu: [] },
//     { name: "Shipping", icon: <FaShippingFast />, subMenu: [] },
//   ];

//   const handleMenuClick = (item) => {
//     setActive(item.name);
//     if (item.subMenu.length > 0) {
//       setShowSubMenu((prev) => (active === item.name ? !prev : true));
//     } else {
//       setShowSubMenu(false);
//     }
//   };

//   return (
//     <div className="px-4 mt-10">
//       {menuItems.map((item) => (
//         <div key={item.name}>
//           <div
//             className={`text-black rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
//               active === item.name
//                 ? "border-2 border-[#DADBDB] text-black"
//                 : "border border-transparent text-[#999D9E]"
//             }`}
//             onClick={() => handleMenuClick(item)}
//           >
//             <div
//               className={`${
//                 active === item.name ? "text-black" : "text-[#999D9E]"
//               }`}
//             >
//               {item.icon}
//             </div>
//             {item.name}
//           </div>
//           {item.subMenu.length > 0 && active === item.name && showSubMenu && (
//             <div className="ml-6 mt-2">
//               {item.subMenu.map((subItem) => (
//                 <div
//                   key={subItem.name}
//                   className={`text-black rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
//                     active === subItem.name
//                       ? "border-2 border-[#DADBDB] text-black"
//                       : "border border-transparent text-[#999D9E]"
//                   }`}
//                   onClick={() => setActive(subItem.name)}
//                 >
//                   <div
//                     className={`${
//                       active === subItem.name ? "text-black" : "text-[#999D9E]"
//                     }`}
//                   >
//                     {subItem.icon}
//                   </div>
//                   {subItem.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;

// import React, { useState } from "react";
// import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { FaCartArrowDown, FaThList, FaWarehouse } from "react-icons/fa";
// import { IoIosListBox } from "react-icons/io";
// import { LuPenTool } from "react-icons/lu";
// import { IoPrintSharp } from "react-icons/io5";
// import { FaShippingFast } from "react-icons/fa";
// import { BsBoxSeam } from "react-icons/bs";

// function Sidebar() {
//   const [active, setActive] = useState("Dashboard");
//   const [activeSubMenu, setActiveSubMenu] = useState("");

//   const menuItems = [
//     { name: "Dashboard", icon: <RiDashboardHorizontalFill />, subMenu: [] },
//     {
//       name: "Products",
//       icon: <FaCartArrowDown />,
//       subMenu: [
//         { name: "All Products", icon: <BsBoxSeam /> },
//         { name: "Category", icon: <FaThList /> },
//         { name: "Inventory", icon: <FaWarehouse /> },
//       ],
//     },
//     { name: "Orders", icon: <IoIosListBox />, subMenu: [] },
//     { name: "Designing", icon: <LuPenTool />, subMenu: [] },
//     { name: "Printing", icon: <IoPrintSharp />, subMenu: [] },
//     { name: "Shipping", icon: <FaShippingFast />, subMenu: [] },
//   ];

//   const handleMenuClick = (item) => {
//     setActive(item.name);
//     if (item.subMenu.length > 0) {
//       setActiveSubMenu(""); // Reset submenu when switching main menu
//     }
//   };

//   const handleSubMenuClick = (subItem) => {
//     setActiveSubMenu(subItem.name);
//   };

//   return (
//     <div className="px-4 mt-10">
//       {menuItems.map((item) => (
//         <div key={item.name}>
//           <div
//             className={`text-black rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
//               active === item.name
//                 ? "border-2 border-[#DADBDB] text-black bg-white"
//                 : "border border-transparent text-[#999D9E]"
//             }`}
//             onClick={() => handleMenuClick(item)}
//           >
//             <div
//               className={`${
//                 active === item.name ? "text-black" : "text-[#999D9E]"
//               }`}
//             >
//               {item.icon}
//             </div>
//             {item.name}
//           </div>
//           {item.subMenu.length > 0 && active === item.name && (
//             <div className="ml-6 mt-2">
//               {item.subMenu.map((subItem) => (
//                 <div
//                   key={subItem.name}
//                   className={`rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
//                     activeSubMenu === subItem.name
//                       ? " text-black bg-white"
//                       : "border border-transparent text-[#999D9E]"
//                   }`}
//                   onClick={() => handleSubMenuClick(subItem)}
//                 >
//                   <div
//                     className={`${
//                       activeSubMenu === subItem.name
//                         ? "text-black"
//                         : "text-[#999D9E]"
//                     }`}
//                   >
//                     {subItem.icon}
//                   </div>
//                   {subItem.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;


// import React, { useState } from "react";
// import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { FaCartArrowDown, FaThList, FaWarehouse } from "react-icons/fa";
// import { IoIosListBox } from "react-icons/io";
// import { LuPenTool } from "react-icons/lu";
// import { IoPrintSharp } from "react-icons/io5";
// import { FaShippingFast } from "react-icons/fa";
// import { BsBoxSeam } from "react-icons/bs";
// import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "lucide-react";

// function Sidebar() {
//   const [active, setActive] = useState("Dashboard");
//   const [activeSubMenu, setActiveSubMenu] = useState("");

//   const menuItems = [
//     { name: "Dashboard", icon: <RiDashboardHorizontalFill />, subMenu: [] },
//     {
//       name: "Products",
//       icon: <FaCartArrowDown />,
//       subMenu: [
//         { name: "All Products", icon: <BsBoxSeam /> ,Link},
//         { name: "Category", icon: <FaThList /> },
//         { name: "Inventory", icon: <FaWarehouse /> },
//       ],
//     },
//     { name: "Orders", icon: <IoIosListBox />, subMenu: [] },
//     { name: "Designing", icon: <LuPenTool />, subMenu: [] },
//     { name: "Printing", icon: <IoPrintSharp />, subMenu: [] },
//     { name: "Shipping", icon: <FaShippingFast />, subMenu: [] },
//   ];

//   const handleMenuClick = (item) => {
//     setActive((prev) => (prev === item.name ? "" : item.name));
//     if (item.subMenu.length > 0 && active !== item.name) {
//       setActiveSubMenu(""); // Reset submenu when switching main menu
//     }
//   };

//   const handleSubMenuClick = (subItem) => {
//     setActiveSubMenu(subItem.name);
//   };

//   return (
//     <div className="px-4 mt-10">
//       {menuItems.map((item) => (
//         <div key={item.name}>
//           <div
//             className={`text-black rounded-lg p-2 flex items-center justify-between gap-4 cursor-pointer ${
//               active === item.name
//                 ? "border-2 border-[#DADBDB] text-black bg-white"
//                 : "border border-transparent text-[#999D9E]"
//             }`}
//             onClick={() => handleMenuClick(item)}
//           >
//             <div className="flex items-center gap-4">
//               <div
//                 className={`${
//                   active === item.name ? "text-black" : "text-[#999D9E]"
//                 }`}
//               >
//                 {item.icon}
//               </div>
//               {item.name}
//             </div>
//             {item.subMenu.length > 0 && (
//               <IoIosArrowDown
//                 className={`transition-transform duration-300 ${
//                   active === item.name ? "rotate-180" : ""
//                 }`}
//               />
//             )}
//           </div>
//           {item.subMenu.length > 0 && (
//             <div
//               className={`ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
//                 active === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               {item.subMenu.map((subItem) => (
//                 <div
//                   key={subItem.name}
//                   className={`rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
//                     activeSubMenu === subItem.name
//                       ? "text-black bg-white"
//                       : "border border-transparent text-black"
//                   }`}
//                   onClick={() => handleSubMenuClick(subItem)}
//                 >
//                   <div
//                     className={`${
//                       activeSubMenu === subItem.name
//                         ? "text-black"
//                         : "text-[#999D9E]"
//                     }`}
//                   >
//                     {subItem.icon}
//                   </div>
//                   {subItem.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;




import React, { useState } from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaCartArrowDown, FaThList, FaWarehouse, FaTasks } from "react-icons/fa";
import { IoIosListBox, IoMdPricetags, IoMdCheckmarkCircle } from "react-icons/io";
import { LuPenTool } from "react-icons/lu";
import { IoPrintSharp } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsBoxSeam, BsFillPeopleFill, BsClipboardData } from "react-icons/bs";

import Link from "next/link"; // Import Next.js Link component

function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: <RiDashboardHorizontalFill />, to: "/dashboard", subMenu: [] },
    {
      name: "Products",
      icon: <FaCartArrowDown />,
      to: "",
      subMenu: [
        { name: "All Products", icon: <BsBoxSeam />, to: "/products/products" },
        { name: "Category", icon: <FaThList />, to: "/products/category" },
        { name: "Inventory", icon: <FaWarehouse />, to: "/products/inventory" },
      ],
    },
    { name: "Orders", icon: <IoIosListBox />, to: "", subMenu: [
      { name: "Leads", icon: <BsFillPeopleFill />, to: "/orders/leads" },
      { name: "Tasks", icon: <FaTasks />, to: "/orders/tasks" },
      { name: "All Orders", icon: <IoMdPricetags />, to: "/orders/orders" },


    ] },
    { name: "Designing", icon: <LuPenTool />, to: "", subMenu: [
      { name: "All Tasks", icon: <BsClipboardData />, to: "" },
      { name: "Pending", icon: <IoMdCheckmarkCircle />, to: "" },

    ] },
    { name: "Printing", icon: <IoPrintSharp />, to: "/printing", subMenu: [] },
    { name: "Shipping", icon: <FaShippingFast />, to: "/shipping", subMenu: [] },
  ];

  const handleMenuClick = (item) => {
    setActive((prev) => (prev === item.name ? "" : item.name));
    if (item.subMenu.length > 0 && active !== item.name) {
      setActiveSubMenu(""); // Reset submenu when switching main menu
    }
  };

  const handleSubMenuClick = (subItem) => {
    setActiveSubMenu(subItem.name);
  };

  return (
    <div className="px-4 mt-10">
      {menuItems.map((item) => (
        <div key={item.name}>
          <Link
            href={item.to || "#"} // Add navigation to main menu
            className={`text-black rounded-lg p-2 flex items-center justify-between gap-4 cursor-pointer ${
              active === item.name
                ? "border-2 border-[#DADBDB] text-black bg-white"
                : "border border-transparent text-[#999D9E]"
            }`}
            onClick={() => handleMenuClick(item)}
          >
            <div className="flex items-center gap-4">
              <div
                className={`${
                  active === item.name ? "text-black" : "text-[#999D9E]"
                }`}
              >
                {item.icon}
              </div>
              {item.name}
            </div>
            {item.subMenu.length > 0 && (
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  active === item.name ? "rotate-180" : ""
                }`}
              />
            )}
          </Link>
          {item.subMenu.length > 0 && (
            <div
              className={`ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                active === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.subMenu.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.to || "#"} // Add navigation to submenu
                  className={`rounded-lg p-2 flex items-center gap-4 cursor-pointer ${
                    activeSubMenu === subItem.name
                      ? "text-black bg-white"
                      : "border border-transparent text-black"
                  }`}
                  onClick={() => handleSubMenuClick(subItem)}
                >
                  <div
                    className={`${
                      activeSubMenu === subItem.name
                        ? "text-black"
                        : "text-[#999D9E]"
                    }`}
                  >
                    {subItem.icon}
                  </div>
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
