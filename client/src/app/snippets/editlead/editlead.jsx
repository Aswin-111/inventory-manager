import React, { useEffect, useRef } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import interceptor from "@/app/utils/interceptor";
function EditLead({ handleToggleAddLead, id }) {
  const firstnameRef = useRef("");
  const phoneRef = useRef("");
  const leadownerRef = useRef("");

  const ratingRef = useRef("");
  const statusRef = useRef("");
  const noteRef = useRef("");

  useEffect(() => {
    (async () => {
      const res = await interceptor.get(
        `${process.env.NEXT_PUBLIC_BASE}/getleadbyid/?id=${id}`
      );

      console.log(res);
      firstnameRef.current.value = res.data.name;
      phoneRef.current.value = res.data.phone;
      ratingRef.current.value = res.data.rating;
      statusRef.current.value = res.data.status;
      noteRef.current.value = res.data.note;
    })();
  }, []);
  const handleSubmit = async () => {
    try {
      const firstName = firstnameRef.current.value;
      const phone = phoneRef.current.value;

      const rating = ratingRef.current.value;
      const status = statusRef.current.value;
      const note = noteRef.current.value;

      if (
        firstName.length > 0 &&
        phone.length > 0 &&
        rating.length > 0 &&
        status.length > 0 &&
        note.length > 0
      ) {
        const res = await interceptor.post(
          `${process.env.NEXT_PUBLIC_BASE}/updatelead`,
          {
            name: firstName,
            phone,
            rating,

            leadowner: "bibin",
            status,
            note,
          }
        );
        console.log(res);
        toast.success("Lead Added Successfully");
        handleToggleAddLead(false);
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-full w-full  backdrop-blur-[2px] flex justify-center items-center ">
      <div className="w-[480px] h-[85%] bg-white rounded-2xl p-2 ">
        <div className=" w-full h-full rounded-2xl border-[1px] border-[#E9E9E9] relative py-12 px-4 ">
          <span
            onClick={() => handleToggleAddLead(false)}
            className="absolute top-0 right-3 text-5xl rotate-45 text-gray-500 cursor-pointer hover:text-gray-600 hover:scale-110"
          >
            +
          </span>
          <input
            type="text"
            placeholder="First Name"
            ref={firstnameRef}
            className="input input-bordered w-full  rounded-xl bg-[#F4F4F6]"
          />

          <input
            type="text"
            placeholder="Phone"
            ref={phoneRef}
            className="input input-bordered w-full  rounded-xl bg-[#F4F4F6] mt-4"
          />

          <div className="flex justify-between mt-4 gap-4">
            <select
              className="select w-full mt-4 rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6]"
              ref={ratingRef}
            >
              <option disabled selected>
                Rating
              </option>
              <option>Hot</option>
              <option>Warm</option>
              <option>Cold</option>
              <option>Junk</option>
            </select>{" "}
            <select
              className="select w-full mt-4 rounded-[0.4rem] border-[1px] ring-1 ring-slate-300  bg-[#F4F4F6]"
              ref={statusRef}
            >
              <option disabled selected>
                Status
              </option>
              <option>New</option>

              <option>Follow up</option>
              <option>Won</option>
            </select>
          </div>

          <textarea
            placeholder="Note"
            ref={noteRef}
            className="mt-4  bg-[#F4F4F6] outline-none p-3 rounded-[0.4rem] border-[1px] ring-1 ring-slate-300"
            cols={46}
            rows={4}
            name=""
            id=""
          ></textarea>
          <button
            className="btn w-full mt-4 rounded-xl bg-[#4287f5] text-white hover:bg-[#3266c4] "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditLead;
