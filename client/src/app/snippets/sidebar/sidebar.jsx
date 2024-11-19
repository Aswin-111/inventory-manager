"use client";

import Link from "next/link";
import { useEffect,useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
function SideBar() {
  
  const [href,setHref] = useState("")




  






  const [accordiontoggle,setAccordionToggle] = useState(true)
  const [productstoggle,setProductsToggle] = useState(true)





  useEffect(()=>{
    
  },[href])
  return (
  <div className="w-full flex flex-col items-center ">
    
    <div className="w-full  flex flex-col mt-16  items-center px-4 ">
        <Link href = "/dashboard" className={href.includes('/order/dashboard') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>DashBoard</Link>
        {/* <Link href = "/order/products" className={href.includes('/order/products') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Products</Link> */}
        

    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger onClick = {()=>{
          
          
          

          if(productstoggle === true ){
          
          setProductsToggle(false)

          }
          else{
            setProductsToggle(true)
          }
    
     
             }}>Products</AccordionTrigger>
        <AccordionContent>
        <Link href = "/products/products" className={href.includes('/products/products') ? `bg-indigo-400 text-white w-full flex justify-center px-[5rem] py-4 rounded-xl ` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{
      setHref('/products/products')
        }}>Products</Link>
        </AccordionContent>
        <AccordionContent>
        <Link href = "/products/category" className={href.includes('/products/category') ? `bg-indigo-400 text-white w-full flex justify-center px-[5rem] py-4 rounded-xl ` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{
      setHref('/products/category')
        }}>Category</Link>
        </AccordionContent>
        <AccordionContent>

        <Link href = "/products/inventory" className={href.includes('/products/inventory') ? `bg-indigo-400 text-white w-full flex justify-center px-[5rem] py-4 rounded-xl ` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{
  
  



    setHref('/products/inventory')
  
        }}>Inventory</Link>
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>


{productstoggle && 
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger onClick = {()=>{
          
          if(accordiontoggle === true ){
          
            setAccordionToggle(false)
  
            }
            else{
              setAccordionToggle(true)
            setProductsToggle(true)

            }

        }}>Orders</AccordionTrigger>
        <AccordionContent className = "w-full">
        <AccordionContent>
        <Link href = "/orders/orders" className={href.includes('/order/orders') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" } onClick = {()=>{
     setHref('/orders/orders')
        }}>Orders</Link>
        </AccordionContent>
        <Link href = "/orders/leads" className={href.includes('/order/leads') ? `bg-indigo-400 text-white w-full flex justify-center py-4 px-5 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-[100%] flex justify-center  rounded-xl  px-[5rem] py-4"} onClick = {()=>{
     setAccordionToggle(true)
  
  setHref('/orders/leads')
        }}>Leads</Link>
        </AccordionContent>
        <AccordionContent>
        <Link href = "/orders/tasks" className={href.includes('/order/orders') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center  rounded-xl px-[5rem] py-4" }   onClick = {()=>{
      setHref('/orders/tasks')
        }}>Tasks</Link>
        </AccordionContent>
       
      
{/* acc */}

      </AccordionItem>


      

      </Accordion>
        
      }
        { (accordiontoggle && productstoggle) && <>
        <Link href = "/printing" className={href.includes('/printing') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Printing</Link>
        <Link href = "/shipping" className={href.includes('/shipping') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Shipping</Link>
        <Link href = "/designing" className={href.includes('/designing') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Designing</Link>
        <Link href = "/report" className={href.includes('/report') ? `bg-indigo-400 text-white w-full flex justify-center py-4 rounded-xl` : "hover:bg-indigo-400 hover:text-white w-full flex justify-center py-4 rounded-xl gap-y-2" }>Report</Link>
   



   </>
}
    </div>
    </div>
  
  )
}

export default SideBar;