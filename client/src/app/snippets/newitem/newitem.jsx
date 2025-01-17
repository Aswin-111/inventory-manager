"use client";
import useStore from "@/app/store/store";
import closebtn from "../../../../public/closebtn.png";
import Image from "next/image";
import Select from "react-select";
import { useEffect, useRef, useState } from "react";

import interceptor from "@/app/utils/interceptor";
import toast, { Toaster } from "react-hot-toast";

function ProductPopup() {
  const [categoryname, setCategoryName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { setProductToggle, categories_from_db_popup, setCategoryPopup } =
    useStore((state) => state);

  const productnameref = useRef("");
  const skuref = useRef("");
  const mrpref = useRef("");
  const sellingpriceref = useRef("");
  const shaperef = useRef("");
  const sizeref = useRef("");
  const thicknessref = useRef("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }

      setImage(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      setError("");
    }
  };

  const validateForm = () => {
    if (!productnameref.current.value) return "Product name is required";
    if (!skuref.current.value) return "SKU is required";
    if (!categoryname) return "Category is required";
    if (!mrpref.current.value) return "MRP is required";
    if (!sellingpriceref.current.value) return "Selling price is required";
    if (!shaperef.current.value || shaperef.current.value === "Shape")
      return "Shape is required";
    if (!sizeref.current.value || sizeref.current.value === "Size")
      return "Size is required";
    if (
      !thicknessref.current.value ||
      thicknessref.current.value === "Thickness"
    )
      return "Thickness is required";
    if (!image) return "Product image is required";
    return null;
    
  };

  async function handleSubmit() {
    try {
      setError("");
      setSuccess("");

      // Validate form
      const validationError = validateForm();
      if (validationError) {
        setError(validationError);
        toast.error(validationError)
        return;
      
      }

      setIsSubmitting(true);

      // Create FormData object
      const formData = new FormData();
      formData.append("productname", productnameref.current.value);
      formData.append("sku", skuref.current.value);
      formData.append("category", categoryname);
      formData.append("mrp", mrpref.current.value);
      formData.append("sellingprice", sellingpriceref.current.value);
      formData.append("shape", shaperef.current.value);
      formData.append("size", sizeref.current.value);
      formData.append("thickness", thicknessref.current.value);
      formData.append("productimage", image);

      const res = await interceptor.post(
        `${process.env.NEXT_PUBLIC_BASE}/createstock`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // setSuccess("Product created successfully!");
      toast.success("Product created successfully!");

      // Reset form after successful submission
      setTimeout(() => {
        setProductToggle(false);
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.data);
      console.error("Error uploading product:", error.response.data.data);
      setError(
        error.response?.data?.error ||
          "Error creating product. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const category_res = await interceptor.get(
          `${process.env.NEXT_PUBLIC_BASE}/allcategories`
        );

        console.log(category_res.data, "hi");
        const options = category_res.data.map((item) => ({
          value: item.category_name,
          label: item.category_name,
          id: item._id,
        }));
        setCategoryPopup(options);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Error loading categories");
      }
    })();
  }, []);

  return (
    // <div className="relative h-[45rem]  flex flex-col justify-center rounded-xl w-[27rem] max-h-[100%] border-slate-500  overflow-y-scroll border-2">
    //   <Toaster />

    //   <div className="flex flex-col gap-y-[1rem]">
    //     <div className="absolute top-2 right-4">
    //       <Image
    //         src={closebtn}
    //         alt="closebtn"
    //         width={24}
    //         height={24}
    //         onClick={() => setProductToggle(false)}
    //         className="cursor-pointer"
    //       />
    //     </div>

    //     {error && (
    //       <div className="mx-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
    //         {error}
    //       </div>
    //     )}

    //     {success && (
    //       <div className="mx-4 p-2 bg-green-100 text-green-700 rounded-md text-sm">
    //         {success}
    //       </div>
    //     )}

    //     <div className="mt-5 flex flex-col items-center gap-y-[1rem] px-3">
    //      <div className="flex gap-4">
    //      <input
    //         type="text"
    //         placeholder="Product Name"
    //         className="input input-bordered w-full max-w-xs rounded-[0.4rem]"
    //         ref={productnameref}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Sku"
    //         className="input input-bordered w-full max-w-xs rounded-xl"
    //         ref={skuref}
    //       />
    //      </div>

    //      <div className="flex ">
    //      <Select
    //         options={categories_from_db_popup}
    //         className=" rounded-xl bg-[#F4F4F6]"
    //         onChange={(e) => setCategoryName(e.value)}
    //         placeholder="Select Category"
    //       />
    //     </div>

    //     <div className="w-full flex justify-between ">
    //       <input
    //         type="number"
    //         placeholder="MRP"
    //         className="input input-bordered  max-w-xs rounded-xl"
    //         ref={mrpref}
    //       />
    //       <input
    //         type="number"
    //         placeholder="Selling price"
    //         className="input input-bordered  max-w-xs rounded-xl"
    //         ref={sellingpriceref}
    //       />
    //     </div>
    //      </div>

    //     <div className="flex flex-col items-center gap-4">
    //       <label className="form-control w-full max-w-xs">
    //         <div className="label">
    //           <span className="label-text">Select product image</span>
    //         </div>
    //         <input
    //           type="file"
    //           accept="image/*"
    //           className="file-input file-input-bordered w-full max-w-xs"
    //           onChange={handleFileChange}
    //         />
    //       </label>

    //       {/* {imagePreview && (
    //       <div className="w-5 h-5 relative">
    //         <Image
    //           src={imagePreview}
    //           alt="Preview"
    //           fill
    //           className="object-cover rounded-md"
    //         />
    //       </div>
    //     )} */}
    //     </div>

    //     <div className="flex flex-col items-center gap-y-[1rem]">
    //       <select
    //         className="select w-full max-w-xs rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6] outline-none"
    //         ref={shaperef}
    //       >
    //         <option disabled selected>
    //           Shape
    //         </option>
    //         <option>Square</option>
    //         <option>Circle</option>
    //         <option>Butterfly</option>
    //         <option>Eye</option>
    //       </select>

    //       <select
    //         className="select w-full max-w-xs rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6]"
    //         ref={sizeref}
    //       >
    //         <option disabled selected>
    //           Size
    //         </option>
    //         <option>6x8</option>
    //         <option>121x8</option>
    //         <option>16x12</option>
    //         <option>11x11</option>
    //       </select>

    //       <select
    //         className="select w-full max-w-xs rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6]"
    //         ref={thicknessref}
    //       >
    //         <option disabled selected>
    //           Thickness
    //         </option>
    //         <option>3 MM</option>
    //         <option>5 MM</option>
    //         <option>7 MM</option>
    //       </select>
    //     </div>

    //     <div className="flex justify-center mt-4 mb-6">
    //       <button
    //         className={`btn w-full max-w-xs rounded-xl bg-[#4287f5] text-white hover:bg-[#3266c4] ${
    //           isSubmitting ? "loading" : ""
    //         }`}
    //         onClick={handleSubmit}
    //         disabled={isSubmitting}
    //       >
    //         {isSubmitting ? "Creating..." : "Create Product"}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="h-full w-full  backdrop-blur-[2px] flex justify-center items-center ">
      <div className="w-[550px] h-[84%] bg-white rounded-2xl p-2 ">

        <div className=" w-full h-full rounded-2xl border-[1px] border-[#E9E9E9] relative py-12 px-4 ">
        
          <div className="absolute top-2 right-4">
            <Image
              src={closebtn}
              alt="closebtn"
              width={24}
              height={24}
              onClick={() => setProductToggle(false)}
              className="cursor-pointer hover:scale-110"
            />
          </div>

          <div className="flex gap-4 ">
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full  rounded-xl bg-[#F4F4F6]"
              ref={productnameref}
            />
            <input
              type="text"
              placeholder="Stock keeping Unit"
              className="input input-bordered w-full rounded-xl bg-[#F4F4F6]"
              ref={skuref}
            />
          </div>

          <div className="flex gap-4 mt-4">
            <div className="w-[50%] h-full">
              <Select
                options={categories_from_db_popup}
                className=" rounded-xl  h-full bg-[#F4F4F6]"
                onChange={(e) => setCategoryName(e.value)}
                placeholder="Select Category"
              />
            </div>

            <div className="flex  w-[50%] gap-4">
              <input
                type="number"
                placeholder="MRP"
                className="input input-bordered w-1/2  rounded-xl bg-[#F4F4F6]"
                ref={mrpref}
              />
              <input
                type="number"
                placeholder="Selling price"
                className="input input-bordered  w-1/2  rounded-xl bg-[#F4F4F6]"
                ref={sellingpriceref}
              />
            </div>
          </div>

          <div>
            <label className="form-control w-full ">
              <div className="label w-full">
                <span className="label-text">Select product image</span>
              </div>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full bg-[#F4F4F6]"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <select
            className="select w-full mt-4 rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6] outline-none"
            ref={shaperef}
          >
            <option disabled selected>
              Shape
            </option>
            <option>Square</option>
            <option>Circle</option>
            <option>Butterfly</option>
            <option>Eye</option>
          </select>

          <select
            className="select w-full mt-4 rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6]"
            ref={sizeref}
          >
            <option disabled selected>
              Size
            </option>
            <option>6x8</option>
            <option>121x8</option>
            <option>16x12</option>
            <option>11x11</option>
          </select>

          <select
            className="select w-full mt-4 rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6]"
            ref={thicknessref}
          >
            <option disabled selected>
              Thickness
            </option>
            <option>3 MM</option>
            <option>5 MM</option>
            <option>7 MM</option>
          </select>
        <div>
        <button
             className={`btn w-full mt-4 rounded-xl bg-[#4287f5] text-white hover:bg-[#3266c4] ${
               isSubmitting ? "loading" : ""
             }`}
             onClick={handleSubmit}
             disabled={isSubmitting}
           >
             {isSubmitting ? "Creating..." : "Create Product"}
           </button>
        </div>
        </div>

      </div>
    </div>
  );
}

export default ProductPopup;
