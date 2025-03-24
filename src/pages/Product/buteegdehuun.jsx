import React from "react";
import { productDatas ,productImages} from "../../assets/temdegt";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="w-full bg-black">
        <div className="mx-auto  max-w-[100%] bg-white py-10">
        <div className="mx-auto  max-w-[85%]">
        {/* Title & Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Хуванцар цонх, хаалга</h2>
          <Link to="/window" className="px-6 py-3 bg-customGreen shadow-md rounded-full hover:bg-emerald-500 text-white text-lg transition">
            Бүгдийг үзэх
          </Link>
        </div>

        {/* Product List */}
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {productDatas.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-xl min-w-[270px] flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg mb-3 w-full h-[180px] object-cover"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <button className="mt-3 px-4 py-2 border rounded-lg text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition">
                Үргэлжлүүлэх →
              </button>
            </div>
          ))}
        </div>
        </div>
    </div>
    <div className="mx-auto  max-w-[100%] bg-customGray py-10">
        <div className="mx-auto  max-w-[85%] ">
        {/* Title & Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Metal Pasad</h2>
          <Link to="/pasad" className="px-6 py-3 bg-customGreen shadow-md rounded-full hover:bg-emerald-500 text-white text-lg transition">
            Бүгдийг үзэх
          </Link>
        </div>

        {/* Product List */}
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {productDatas.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-xl min-w-[270px] flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg mb-3 w-full h-[180px] object-cover"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <button className="mt-3 px-4 py-2 border rounded-lg text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition">
                Үргэлжлүүлэх →
              </button>
            </div>
          ))}
        </div>
        </div>
    </div>
    <div className="mx-auto  max-w-[100%] bg-white py-10">
        <div className="mx-auto  max-w-[85%] ">
        {/* Title & Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Shilen Pasad</h2>
          <Link to="/pasad" className="px-6 py-3 bg-customGreen shadow-md rounded-full hover:bg-emerald-500 text-white text-lg transition">
            Бүгдийг үзэх
          </Link>
        </div>

        {/* Product List */}
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {productDatas.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-xl min-w-[270px] flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg mb-3 w-full h-[180px] object-cover"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <button className="mt-3 px-4 py-2 border rounded-lg text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition">
                Үргэлжлүүлэх →
              </button>
            </div>
          ))}
        </div>
        </div>
        <div
        className="flex items-center justify-center w-full mt-20"
        >
        <img src={productImages.Grohe} alt="Banner" className="w-full h-auto" />
        <div className="absolute flex flex-col items-center justify-center h-[80%]">
            <h2 className="text-5xl font-sans text-white mt-60">Grohe brendiin alban yosnii toloologch</h2>
            <p className="text-white text-lg mt-4">Since 2014</p>
            <button className="px-6 py-3 bg-customGreen shadow-md rounded-full hover:bg-emerald-500 text-white text-lg transition mt-auto">
                Бүгдийг үзэх
            </button>
        </div>
        </div>
    </div>
    

    </div>
  );
};

export default ProductList;
