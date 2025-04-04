import React from 'react';
import { productImages } from "../assets/temdegt";

const Niitlel = () => {
  return (
    <div className="flex flex-col justify-center max-w-full bg-white gap-4">
      {/* Hero Section */}
      <section className="relative text-center py-16 bg-gray-100">
        <div className="relative flex flex-col justify-center rounded-2xl max-w-full h-[369px] overflow-hidden">
          {/* Image */}
          <img
            src={productImages.nitlel}
            alt="Цонх ба фасад"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-transparent bg-opacity-50 px-6">
            <h2 className="text-3xl font-bold">Мэдээ мэдээлэл</h2>
            
          </div>
        </div>
      </section>

      <div className="bg-white flex flex-col justify-center rounded-2xl max-w-7xl mx-auto h-[592px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-transparent">
                {/* Col1 - Text Content */}
                <div className="bg-transparent backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center gap-6">
                  <h1 className="text-4xl font-bold text-black">
                  Цонхны чанар, эдэлгээ, бат бөх байдал профайл системээс эхэлдэг
                  </h1>
                  <p className="text-lg text-customGreen leading-relaxed">
                  DIN ISO 9001 стандарт нь Veka-ийн үйлдвэрлэлээс эхлээд удирдлага,
                  ложистик хүртэлх бүх салбарыг хамардаг.
                  </p>
                  <p>
                    Veka брэндийн хувьд Европт хүчин төгөлдөр мөрдөгдөж буй цонхны
                    профайлын хамгийн хатуу чанарын стандартыг дагаж мөрддөг. Veka-ийн
                    бүх цонх, хаалганы профиль нь DIN EN 12608 стандартын дагуу
                    хананы зузаантай, А зэрэглэлийн чанараар үйлдвэрлэгддэг.
                  </p>
                  <button className="flex items-center gap-2 border border-customGreen text-customGreen px-4 py-2 rounded-lg hover:bg-customGreen hover:text-white transition duration-300">
                    Үргэлжлүүлэх →
                    </button>
                </div>
      
                {/* Col2 - Image */}
                <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl shadow-xl flex justify-center gap-6">
                  <img
                    src={productImages.uildver3}
                    alt="Veka үйлдвэр"
                    className="w-full h-full rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>


            <div className="h-[100%] bg-customGray py-10 flex justify-center items-center">
                <div className="relative w-[500px] flex flex-row overflow-hidden bg-white rounded-3xl ">
                <input
          type="text"
          placeholder="Хайлт хийх..."
          className="w-[378px]  p-3  focus:outline-none  rounded-3xl"
        />
        <button className=" my-2 w-[122px] mx-3 bg-customGreen text-white  hover:bg-green-600 transition duration-300 rounded-3xl">
            Хайх
        </button>
                </div>
      </div>

      {/* News Cards Section */}
      <section className="container mx-auto py-16 px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={productImages.nitlel}
              alt="Crescent for Bangladesh event"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">
                Crescent for Bangladesh: Photos from the First-Ever Rock N’ Roll Benefit Show
              </h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula mollis justo, nec sagittis libero.
              </p>
              <button className="mt-4 px-4 py-2 border border-customGreen text-customBlue rounded-md hover:bg-customGreen hover:text-white transition">
                Дэлгэрэнгүй унших
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Niitlel;
