"use client";
import useStore from "@/app/store/store";

import axiosInterceptor from "@/app/utils/interceptor";

import CategoryPopup from "@/app/snippets/category/category";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function Category() {
  const {
    new_category_toggle,
    setCategoryToggle,
    setCategory,
    categories_from_db,
  } = useStore((state) => state);

  useEffect(() => {
    (async () => {
      try {
        const category_res = await axiosInterceptor.get(
          `${process.env.NEXT_PUBLIC_BASE}/allcategories`
        );

        console.log(category_res.data, "hi");
        setCategory(category_res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [new_category_toggle]);
  return (
    <div className="h-full">
      <div className=" bg-[#F7F7F7] h-full rounded-xl">
        <div className="flex justify-end px-10 py-5 overflow-hidden mt-10">
          <div></div>
          <button
            className="px-5 py-3 bg-indigo-500 hover:bg-blue-400 text-white font-semibold rounded-xl"
            onClick={() => setCategoryToggle(true)}
          >
            Add Category
          </button>
        </div>

        <div className="mt-10">
          <div className="overflow-x-auto px-16">
            <table className="table flex justify-center">
              {/* head */}
              <thead className="bg-[#7F7F7F] text-white border-[#ECECEB] border-2 ">
                <tr>
                  <th>Index</th>
                  <th>Product Name</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {categories_from_db.map((i, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{i.category_name}</td>
                      <td>
                        <img
                          src={`http://localhost:5000/img/${i.filename}`}
                          alt="category"
                          className="w-10 h-10"
                        />
                      </td>
                    </tr>
                  );
                })}
                {/* row 2 */}
              </tbody>
            </table>

            <div className="join absolute right-10 mt-5">
              <button className="join-item btn">1</button>
              <button className="join-item btn btn-active">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">4</button>
            </div>
          </div>

          <div>
            <Toaster />
          </div>
          {new_category_toggle && (
            <div className="absolute top-0  w-[80vw] h-[100vh]  max-h-[100vh] opacity-[95] pt-7  z-10 flex justify-center  overflow-hidden">
              {" "}
              <CategoryPopup />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
