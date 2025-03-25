import React from "react";
import { assets } from "../../assets/assets";
import { logos, } from "../../assets/temdegt";


export const Tolgoi = () => {
  return (
    <div className="bg-customGray w-full flex flex-col items-center">
      {/* Header Section */}
      <div
        className="min-h-[50vx] mb-4 bg-cover bg-center flex items-center justify-center w-full relative mt-[119px] "
        style={{
          backgroundImage: `url(${assets.Banner})`,
        }}
        id="Header"
      >
        <div className=" text-center flex flex-col items-center mt-20">
          {/* Title Section */}
          <div className="max-w-[850px] p-6 rounded-lg mb-20">
            <h1 className="text-5xl font-default text-black">Ирээдүйн хөрөнгө оруулалт</h1>
            <p className="text-lg mt-4 text-black">
              Материал нийлүүлэлт - үйлдвэрлэл - угсралт
            </p>
          </div>

          {/* Grid Section */}
          <div className="mt-10 flex justify-center rounded-2xl  w-[1400px] h-[300px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-36  relative top-10">
              {/* Card 1 */}
              <div className="bg-transparent bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-xl flex justify-center gap-6">
                <img src={assets.window} alt="window" className="w-70 h-70 object-contain" />
                <div className="flex flex-col gap-4 items-end  p-4 ">
                  <h2 className="text-xl font-semibold text-black">Цонх, Хаалга</h2>
                  <p className="text-sm text-gray-700 leading-relaxed"> 
                    Veka брэндийн хуванцар хүрээтэй цонх, <br></br> хаалга. Akfa, Alutech брэндийн <br></br> металл хүрээтэй цонх хаалга.
                  </p>
                  <button className="mt-4 flex items-center gap-2 border border-customGreen text-white px-4 py-2 rounded-lg hover:bg-customGreen hover:text-white transition duration-300">
                    Үргэлжлүүлэх →
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-transparent bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-xl flex items-center gap-6">
                <img src={assets.facade} alt="window" className="w-70 h-70 object-contain" />
                <div className="flex flex-col gap-4 items-end p-4">
                  <h2 className="text-xl font-semibold text-black">Шилэн Фасад</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Alutech Akfa брэндийн шилэн фасадь Sibalux, Сиал, Аkfa брэндийн хөнгөн цагаан металл.
                  </p>
                  <button className="mt-4 flex items-center gap-2 border border-customGreen text-white px-4 py-2 rounded-lg hover:bg-customGreen hover:text-white transition duration-300">
                    Үргэлжлүүлэх →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-40 border-customGreen border-2 w-[156px] h-[40px] rounded-full text-white font-bold text-lg flex justify-center items-center 
      animate-bounce  transition duration-300">
        <img src={assets.down} alt="down" className="w-10 h-10" />
      </button>

      
        <div className="flex flex-wrap justify-center items-center gap-20 p-4 bg-customBlue w-full mt-20">
        {Object.keys(logos).map((key) => (
        <img
          key={key}
          src={logos[key]}
          alt={key}
          className="w-20 h-20 object-contain"
        />
      ))}
      </div>
    </div>
  );
};

export default Tolgoi;
