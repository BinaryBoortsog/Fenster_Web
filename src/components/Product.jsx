import React, { useState } from "react";
import { assets } from "../assets/assets";

const categories = [
  { id: 1, name: "Цонх хаалга" },
  { id: 2, name: "Гадна Фасад" },
  { id: 3, name: "Сангийн тоноглол" },
];

const Product = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-[#121726] text-white p-6 lg:px-44 lg:py-14 ">
        <div className="mb-8 ">
        <h1 className="text-3xl font-bold text-center text-customGreen">Sanal Bolgoj bui</h1>
        <p className=" text-5xl text-center text-gray-300 mt-2 pb-10">
        Бүтээгдэхүүн
        </p>
        </div>

      {/* Tabs Section */}
      <div className="flex justify-center bg-gray-700 p-2 rounded-2xl shadow-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`w-full p-3  rounded- text-lg font-semibold transition-all ${
              activeTab === category.id
                ? "bg-[#121726] text-white"
                : "bg-gray-700"
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      {/* Content Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 space-x-10 mt-8 ">
  {/* Left Side (Text Boxes) */}
  <div className="lg:col-span-1 space-y-14">
    <div className="bg-[#1a2333] p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold py-2">Хуванцар Цонх</h2>
      <p className="text-gray-300 mt-2 text-xl">
        Байгаль нарны гэрлийн нөлөөнд гандахгүй, ус, бороо, чийгэнд
        деформацид орохгүй, хатдаггүй, зэвэрдэггүй Герман хөнгөн цагаанаар
        үйлдвэрлэгдсэн VEKA Softline 82 систем нь урт насалдаг, эрчим хүч
        хэмнэх чанараараа таныг 100% сэтгэл хангалуун байлгаж чадна.
      </p>
    </div>

    <div className="bg-[#1a2333] p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold py-2">Хуванцар Хаалга</h2>
      <p className="text-gray-300 mt-2 text-xl">
        Байгаль нарны гэрлийн нөлөөнд гандахгүй, ус, бороо, чийгэнд
        деформацид орохгүй, хатдаггүй, зэвэрдэггүй Герман хөнгөн цагаанаар
        үйлдвэрлэгдсэн VEKA Softline 82 систем нь урт насалдаг, эрчим хүч
        хэмнэх чанараараа таныг 100% сэтгэл хангалуун байлгаж чадна.
      </p>
    </div>
  </div>

  {/* Right Side (Image Section) */}
  <div className="lg:col-span-2 bg-[#1a2333] rounded-lg shadow-lg ">
    <img
      src={assets.header_img}
      alt="Product"
      className="rounded-lg h-full  object-cover object-center "
    />
  </div>
</div>

    </div>
  );
};

export default Product;
