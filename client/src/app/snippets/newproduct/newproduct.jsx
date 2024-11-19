"use client"
import useStore from "@/app/store/store"
import closebtn from '../../../../public/closebtn.png'
import Image from "next/image"
import Select from 'react-select'
import { useEffect, useRef, useState } from "react"
import interceptor from "@/app/utils/interceptor"

function ProductPopup() {
  const [categoryname, setCategoryName] = useState("")

  const { setProductToggle, categories_from_db_popup, setCategoryPopup } = useStore((state) => state)

  const productnameref = useRef("")
  const skuref = useRef("")
  const mrpref = useRef("")

  const sellingpriceref = useRef("")
  const shaperef = useRef("")




  const sizeref = useRef("")

  const thicknessref = useRef("")




  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  
 async function handleSubmit() {
    const productname = productnameref.current.value
    const sku = skuref.current.value
    const mrp = mrpref.current.value
    const sellingprice = sellingpriceref.current.value
    const shape = shaperef.current.value
    const size = sizeref.current.value
    const thickness = thicknessref.current.value
    const formData = {
      productname: productname,
      sku: sku,
      





      
      category : categoryname,
      mrp: mrp,

      productimage : image,
      sellingprice: sellingprice,
      shape: shape,
      size: size,
      thickness: thickness
    }
    console.log(formData)

  
  const res = await  interceptor.post(`${process.env.NEXT_PUBLIC_BASE}/createproduct`, formData)

  console.log(res.data)

  }
  const customStyles = {
    control: (provided) => ({
      ...provided,

      color: 'red', // This might not affect text color directly
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'red',
    }),
  };
  useEffect(() => {
    (async () => {

      const category_res = await interceptor.get(`${process.env.NEXT_PUBLIC_BASE}/getallcategories`)









      const options = category_res.data.categories[0].map((item) => ({
        value: item.category_name,
        label: item.category_name
      }))





      setCategoryPopup(options)
    })()
  }
    , [])
  return (



    <div className=" relative h-[40rem] flex flex-col justify-center rounded-xl  w-[27rem] max-h-[100%] border-slate-500 gap-y-[1rem] overflow-scroll border-2  ">
      <div className="absolute top-2 right-4">
        <Image
          src={closebtn}
          alt="closebtn"
          width={24}
          height={24}



          onClick={() => setProductToggle(false)}
        />
      </div>
      <div className="flex flex-col items-center gap-y-[1rem]">
        <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs rounded-[0.4rem]" ref = {productnameref}/>
        <input type="text" placeholder="Sku" className="input input-bordered w-full max-w-xs rounded-xl" ref = {skuref} />
        <Select
          options={categories_from_db_popup}
          className="w-[21vw] rounded-xl "

          onChange={(e) => {
            
            (async () => {
              try {
                setCategoryName(e.value)


              } catch (err) {



                console.log(err)
                // setStates(response.data.states);
              }
            })();
          }}
        />





      </div>









      <div className="w-full flex justify-between px-[3.4rem]">
        <input type="text" placeholder="Mrp" className="input input-bordered w-[8rem] max-w-xs rounded-xl" ref = {mrpref}/>
        <input type="text" placeholder="Selling price" className="input input-bordered w-[8rem] max-w-xs rounded-xl" ref = {sellingpriceref}/>

      </div>

      <div className="flex justify-center">
        


      <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select an image</span>
          </div>
          <input type="file" accept="image/*" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange} />
        </label>
      </div>








      <div className="flex flex-col items-center gap-y-[1rem]">


        <select className="select w-full max-w-xs rounded-[0.4rem]  border-[1px] ring-1 ring-slate-300" ref = {shaperef}>
          <option disabled selected>Shape</option>
          <option>Square</option>
          <option>Circle</option>
          <option>Butterfly</option>
          <option>Eye</option>
        </select>





      </div>

      {/* <div className="dropdown dropdown-hover px-[5rem] w-full ">
                <div tabIndex={0} role="button" className="input  input-bordered rounded-md flex items-center text-slate-400">Shape</div>
                <ul tabIndex={0} className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-[67%] p-2 shadow ">
                    <li><a>Category 1</a></li>
                    <li><a>Category 2</a></li>
                </ul>
            
        
        </div> */}




      <div className="">
        <div className="flex flex-col items-center gap-y-[1rem]">


          <select className="select w-full max-w-xs rounded-[0.4rem]  border-[1px] ring-1 ring-slate-300" ref = {sizeref}>
            <option disabled selected>Size</option>
            <option>6x8</option>
            <option>121x8</option>
            <option>16x12</option>
            <option>11x11</option>
          </select>





        </div>

        <div className="flex flex-col items-center gap-y-[1rem]">


          <select className="select w-full max-w-xs rounded-[0.4rem] mt-[1rem]  border-[1px] ring-1 ring-slate-300" ref = {thicknessref}>
            <option disabled selected>Thickness</option>
            <option>3 MM</option>
            <option>5 MM</option>
            <option>7 MM</option>
          </select>





        </div>

      </div>





      <div className="flex justify-center">

        <input type="button" value="Submit" className="input input-bordered w-full max-w-xs rounded-xl bg-[#4287f5] text-white" onClick={handleSubmit} />

      </div>
    </div>
  )
}

export default ProductPopup;