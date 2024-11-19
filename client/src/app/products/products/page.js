"use client"
import useStore from '@/app/store/store'
import Product from '@/app/snippets/newproduct/newproduct'

function Products() {
  const {new_product_toggle,setProductToggle} = useStore((state) => state)

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
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Active</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Active</td>

      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Active</td>

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




       

       

{new_product_toggle && <div className = "absolute top-0  w-[80vw] h-[100vh]  max-h-[100vh] opacity-[95] pt-7  z-10 flex justify-center  overflow-hidden bg-white"> <Product/> </div> }
      </div>
    </div>
  )
}

export default Products