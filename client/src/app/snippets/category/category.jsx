"use client";

import useStore from "@/app/store/store";
import axiosInterceptor from "@/app/utils/interceptor";
// import axios from 'axios';

import closebtn from "../../../../public/closebtn.png";
import Image from "next/image";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function CategoryPopup() {
  const { new_category_toggle, setCategoryToggle } = useStore((state) => state);
  const productRef = useRef("");
  const [image, setImage] = useState(null);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const handleSubmit = () => {
  //   const productName = productRef.current.value;

  //   const formData = {
  //     image: image,
  //     productName: productName
  //   };

  //   axiosInterceptor.post(`${process.env.NEXT_PUBLIC_BASE}/createcategory`, {img:formData,name:productName})
  //     .then((res) => {

  //       console.log(res.data)
  //       setCategoryToggle(false)
  //       toast("Category Created Successfully")
  //     }
  //     )
  //     .catch((err) => console.error(err));
  // };
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setUploadMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    formData.append("stock", productRef.current.value);

    // formData.append('category', JSON.stringify(categoryData))
    // Note: 'file' should match the field name in multer

    try {
      const response = await axiosInterceptor.post(
        "http://localhost:5000/createcategory",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadMessage(response.data); // Display success message
      setCategoryToggle(false);
      toast.success("Category Created Successfully");
    } catch (error) {
      console.error("Error uploading the file:", error.response.data.data);
      // setUploadMessage("Error uploading the file.");

      toast.error(error.response.data.data);
    }
  };

  return (
    // <form onSubmit={handleSubmit} className="relative flex flex-col justify-center w-[27rem] h-[40vh] max-h-[100%] rounded-xl gap-y-[1rem] overflow-hidden border-2 border-black">
    //   <div className="absolute top-2 right-4">
    //     <Image
    //       src={closebtn}
    //       alt="closebtn"
    //       width={24}
    //       height={24}
    //       onClick={() => setCategoryToggle(false)}
    //     />
    //   </div>
    //   <div className="flex flex-col items-center gap-y-[1rem]">
    //     <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs rounded-[0.4rem]" ref={productRef} />
    //     <label className="form-control w-full max-w-xs">
    //       <div className="label">
    //         <span className="label-text">Select an image</span>
    //       </div>
    //       <input type="file" accept="image/*" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange} />
    //     </label>

    //   </div>
    //   <div className="flex justify-center mt-5">
    //     <input id="file-input" type="button" value="Submit" className="input input-bordered w-full max-w-xs rounded-xl bg-[#4287f5] text-white" onClick={handleSubmit} />
    //   </div>
    //   <div><Toaster/></div>
    // </form>

    <div className="h-full w-full  backdrop-blur-[2px] flex justify-center items-center ">
      <div className="w-[480px] h-[50%] bg-white rounded-2xl p-2 ">
        <div className=" w-full h-full rounded-2xl border-[1px] border-[#E9E9E9] relative py-12 px-4 ">
          <div className="absolute top-3 right-4">
            <Image
              src={closebtn}
              alt="closebtn"
              width={24}
              height={24}
              className="hover:scale-110 cursor-pointer"
              onClick={() => setCategoryToggle(false)}
            />
          </div>

          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full mt-2  rounded-[0.4rem] bg-[#F4F4F6]"
            ref={productRef}
          />
          <label className="form-control w-full  mt-2">
            <div className="label">
              <span className="label-text">Select an image</span>
            </div>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full bg-[#F4F4F6]"
              onChange={handleFileChange}
            />
          </label>

          <div className="flex justify-center mt-10">
            <input
              id="file-input"
              type="button"
              value="Submit"
              className="input input-bordered w-full   rounded-xl bg-[#4287f5] text-white"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPopup;
