import React from "react";
import { assets } from "../../assets/assets";
import { logos, } from "../../assets/temdegt";


export const Tolgoi = () => {
  return (
    <div className="bg-customGray w-full flex flex-col items-center">
      {/* Header Section */}
      <div
        className="h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full relative mt-[119px] pt-[80px]"
        style={{
          backgroundImage: `url(${assets.Banner})`,
        }}
        id="Header"
      >
        <div className="pt-0 text-center flex flex-col items-center mt-10">
          {/* Title Section */}
          <div className="max-w-[850px] p-6 rounded-lg mb-16">
            <h1 className="text-5xl font-medium text-black">Ирээдүйн Хөрөнгө Оруулалт</h1>
            <p className="text-lg mt-4 text-black">
              Материал нийлүүлэлт - үйлдвэрлэл - угсралт
            </p>
          </div>

          {/* Grid Section */}
          <div className="mt-6 flex justify-center rounded-2xl  w-[1200px] h-[300px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative top-0">
              {/* Card 1 */}
              <div className="bg-transparent bg-opacity-30 backdrop-blur-xl rounded-3xl p-6 shadow-xl flex items-center gap-6">
                <img src={assets.window} alt="window" className="w-70 h-70 object-contain" />
                <div className="flex flex-col gap-4 items-end p-4 ">
                  <h2 className="text-xl font-semibold text-white">Цонх, Хаалга</h2>
                  <p className="text-xs text-white text-right leading-relaxed"> 
                    Veka брэндийн хуванцар хүрээтэй цонх, хаалга. Akfa, Alutech брэндийн металл хүрээтэй цонх хаалга.
                  </p>
                  <button className="mt-4 flex items-center gap-2 border border-white text-white px-4 py-2 rounded-lg hover:bg-customGreen hover:text-white transition duration-300">
                    Үргэлжлүүлэх →
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-transparent bg-opacity-30 backdrop-blur-xl rounded-3xl p-6 shadow-xl flex items-center gap-6">
                <img src={assets.facade} alt="window" className="w-70 h-70 object-contain" />
                <div className="flex flex-col gap-4 items-end p-4">
                  <h2 className="text-xl font-semibold text-white">Гадна Фасад</h2>
                  <p className="text-xs text-white text-right leading-relaxed">
                    Alutech Akfa брэндийн шилэн фасад, Sibalux, Сиал, Аkfa брэндийн хөнгөн цагаан металл.
                  </p>
                  <button className="mt-4 flex items-center gap-2 border border-white text-white px-4 py-2 rounded-lg hover:bg-customGreen hover:text-white transition duration-300">
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
