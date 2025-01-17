import React from "react";
import { IoCloseCircle } from "react-icons/io5";
function NewItem({ setIntervalToggle }) {
  return (
    <div className="h-full w-full  backdrop-blur-[2px] flex justify-center items-center ">
      <div className="relative w-[480px] h-[50%] bg-white rounded-2xl p-2 ">
        <div
          className="absolute  right-0 top-0 h-[16vh]"
          onClick={() => {
            setIntervalToggle(false);
          }}
        >
          <IoCloseCircle  />
        </div>
        <div className=" w-full h-full rounded-2xl border-[1px] border-[#E9E9E9] relative py-12 px-4 ">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full mt-2  rounded-[0.4rem] bg-[#F4F4F6]"
            // ref={productRef}
          />
          <label className="form-control w-full  mt-2">
            <div className="label">
              <span className="label-text">Select an image</span>
            </div>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full bg-[#F4F4F6]"
              //   onChange={handleFileChange}
            />
          </label>

          <div className="flex justify-center mt-10">
            <input
              id="file-input"
              type="button"
              value="Submit"
              className="input input-bordered w-full   rounded-xl bg-[#4287f5] text-white"
              //   onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
``