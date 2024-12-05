"use client"
import useStore from '@/app/store/store'
import Product from '@/app/snippets/newitem/newitem'
import Edit from '@/app/snippets/edititem/edititem';
import { useEffect,useState } from 'react'
import Image from 'next/image'
import axiosInterceptor from "@/app/utils/interceptor"
import toast, { Toaster } from 'react-hot-toast'

import edit from "../../../../public/edit.svg"
import up from "../../../../public/delete.svg"

function Products() {
  const [toggle,setToggle] = useState(false)


  const [edittoggle,setEditToggle] = useState({tog : false, id : 0})
  const {new_product_toggle,setProductToggle,stocks_from_db, setStocks} = useStore((state) => state)
  
  useEffect(()=>{



    



    (async () => {
      
    

      

      try{
    const category_res = await axiosInterceptor.get(`${process.env.NEXT_PUBLIC_BASE}/getallstocks`)
     
   

    

 
    
    
    console.log(category_res.data,'hi')
    setStocks(category_res.data) 

    
  }
      
      
      
    
      
      
     
  
  


  
      catch(err){
        console.log(err)
      } 
    })()
  },[new_product_toggle,toggle])

  
  async function handleProductDelete(id){
    try{
      console.log(id,'id')
      const delete_stock = await axiosInterceptor.post(`${process.env.NEXT_PUBLIC_BASE}/deletestock`, {id})

      console.log(delete_stock)
      toast.success("Product Deleted Successfully")
      
      
      setToggle(!toggle)
    }
    catch(err){
      console.log(err)
      
      
    
    
      toast.error(err.response.data.data) 
    }
  }
  return (
    <div>
      

        <div className = "flex justify-between px-10 py-5 overflow-hidden">
          <div></div>
          <button className = "px-5 py-5 bg-indigo-500 text-white font-semibold rounded-xl" onClick = {()=>setProductToggle(true)}>Add Products</button>
        
      </div>



      <div className = "mt-10">
      
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Products</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {stocks_from_db.map((item, index) => (
        <tr key = {index}>
        <th></th>
        <td>{item.name}</td>
        <td>{item.selling_price}</td>
        <td>{item.status}</td>
        
        <td className='flex cursor-pointer'><Image src = {edit} alt = "edit" width = {30} height = {30} onClick = {()=>setEditToggle({tog : true, id : item._id})}/>
        <Image src = {up} alt = "delete" width = {20} height = {20} onClick={()=>handleProductDelete(item._id)} />
        
        
       
        </td>
      </tr>
      ))}
      
     
    </tbody>
  </table>

  <div className="join absolute right-10 mt-5">
  <button className="join-item btn">1</button>
  <button className="join-item btn btn-active">2</button>
  <button className="join-item btn">3</button>
  <button className="join-item btn">4</button>
</div>
</div>

<Toaster/>


       

       

{new_product_toggle && <div className = "absolute top-0  w-[80vw] h-[100vh]  max-h-[100vh] opacity-[95] pt-7  z-10 flex justify-center  overflow-hidden bg-white"> <Product/> </div> }
{edittoggle.tog && <div className = "absolute top-0  w-[80vw] h-[100vh]  max-h-[100vh] opacity-[95] pt-7  z-10 flex justify-center  overflow-hidden bg-white"> <Edit edittoggle = {edittoggle} setEditToggle = {setEditToggle}/> </div> }
      </div>
    </div>
  )
}

export default Products