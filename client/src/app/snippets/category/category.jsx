"use client"

import useStore from "@/app/store/store"
import axiosInterceptor from "@/app/utils/interceptor"
// import axios from 'axios';

import closebtn from '../../../../public/closebtn.png'
import Image from "next/image"
import { useRef, useState } from "react"
import toast from "react-hot-toast"
function CategoryPopup() {
  const { new_category_toggle, setCategoryToggle } = useStore((state) => state)
  const productRef = useRef("")
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const productName = productRef.current.value;

    const formData = {
      image: image,
      productName: productName
    };

    axiosInterceptor.post(`${process.env.NEXT_PUBLIC_BASE}/createcategory`, {img:formData,name:productName})
      .then((res) => {
        
        console.log(res.data)
        setCategoryToggle(false)
        toast("Category Created Successfully")
      }
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="relative flex flex-col justify-center w-[27rem] h-[40vh] max-h-[100%] rounded-xl gap-y-[1rem] overflow-scroll border-2 border-black">
      <div className="absolute top-2 right-4">
        <Image
          src={closebtn}
          alt="closebtn"
          width={24}
          height={24}
          onClick={() => setCategoryToggle(false)}
        />
      </div>
      <div className="flex flex-col items-center gap-y-[1rem]">
        <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs rounded-[0.4rem]" ref={productRef} />
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select an image</span>
          </div>
          <input type="file" accept="image/*" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange} />
        </label>
      </div>
      <div className="flex justify-center mt-5">
        <input id="file-input" type="button" value="Submit" className="input input-bordered w-full max-w-xs rounded-xl bg-[#4287f5] text-white" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default CategoryPopup;