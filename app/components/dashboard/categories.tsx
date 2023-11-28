import React from "react";
import Image from "next/image";

const getCategories = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading categories: ", error);
  }
};

const Categories = async () => {
  const { categories } = await getCategories();

  return (
    <main className="categories-wrapper p-6 w-full">
      <div className="entire-categories-section flex flex-col gap-4">
        <span className="text-white text-xl">Categories</span>

        {categories ? (
          <div className="category-group grid grid-cols-2 gap-4">
            {categories.map((c: any) => (
              <div
                key={c._id}
                className="cat-container relative flex flex-col p-4 bg-[#1C1C1E] rounded-lg"
              >
                <div className="left w-full flex flex-col items-start gap-2">
                  <div
                    style={{ backgroundColor: c.color }}
                    className="icon-container w-10 h-10 rounded-full flex items-center justify-center bg-[#0A84FF]"
                  >
                    <Image src={c.icon} width={25} height={25} alt="" />
                  </div>
                  <span className="text-[#98989F] font-semibold">
                    {c.categoryName}
                  </span>
                </div>

                <div className="right w-full flex items-end justify-end">
                  <div className="flex absolute flex-col items-end">
                    <span className="text-white text-4xl font-semibold">4</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-category-message bg-[#39393C] text-[#98989F] p-4 rounded-lg">
            Add a category to group your To-do&apos;s
          </div>
        )}
      </div>
    </main>
  );
};

export default Categories;
