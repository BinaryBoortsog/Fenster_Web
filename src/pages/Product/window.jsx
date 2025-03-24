import React from "react";
import { productDatas, productImages } from "../../assets/temdegt";
import { assets } from "../../assets/assets";

const Window = () => {
  return (
    <div className="mx-auto flex flex-col justify-center max-w-full bg-white py-10 gap-4">
      {/* Window & Facade Section */}
      <div className="mt-32  bg-white flex flex-col justify-center rounded-2xl max-w-7xl mx-auto h-[592px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-transparent">
          {/* Col1 - text */}
          <div className="bg-transparent backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold text-black">
            Veka брэндийн хуванцар цонхны систем 
            </h1>
            <p className="text-lg text-customGreen leading-relaxed">
            Фенстер Монгол ХХК 2023 оноос хойш Veka брэндийн албан ёсны дистрьютерээр хамтран ажиллаж байна.
            </p>
            <p>
            1969 онд байгуулагдаж Германидаа төдийгүй дэлхийд даяар танигдсан 4 тивд 49 үйлдвэртэй, 
            хэрэглэгчдийнхээ итгэлийг хүлээж чадсан хуванцар цонх хаалганы тэргүүлэх зэргийн брэнд. 
            Veka брэндийн хуванцар хийц нь Монголын эрс тэс уур амьсгалын онцлогт тохирсон Европ 
            стандарт, Европийн холбооны чанарын үзүүлэлтүүдийг хангасан баталгаажсанаараа давуу 
            талтай.Хуванцар цонх хаалга нь загвар, хийцийн өргөн сонголттойгоор 70, 82мм-ийн 
            зузаантай, даацын ган төмөр бүтэцэн хүчитгэлтэй, 3 давхар хатаасан шилэн багцтай, хамгийн 
            уян хатан EPDM дарагч резинэн жийргэвчтэй,Германы Winkhaus activPilot рендийн тоноглолтой.
            </p>
          </div>
          {/* Card 2 - Facade */}
          <div className="bg-black bg-opacity-30  backdrop-blur-md rounded-2xl shadow-xl flex justify-center gap-6">
             <img src={productImages.Grohe} alt="window" className="w-full h-full rounded-2xl" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 p-4 bg-white w-full mt-5">
        <button className="flex items-center gap-2 border border-customGreen
         text-customGreen px-4 py-2 rounded-lg hover:bg-customGreen hover:text-white 
         transition duration-300">
            Үргэлжлүүлэх →
        </button>
        </div>
      </div>

      <div className="mx-auto  max-w-[100%] bg-white py-10">
        <div
          className="flex items-center justify-center w-full mt-20"
        >
          <img src={productImages.Grohe} alt="Banner" className="w-full h-auto" />
        </div>
        </div>

      {/* Product Section */}
      <div className="mx-auto max-w-7xl bg-white py-10 mt-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Хуванцар цонх, хаалга</h2>
          <button className="px-6 py-3 bg-customGreen shadow-md rounded-full hover:bg-emerald-500 text-white text-lg transition">
            Бүгдийг үзэх
          </button>
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
  );
};

export default Window;
