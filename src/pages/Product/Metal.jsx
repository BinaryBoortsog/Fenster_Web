import React from "react";
import { productDatas, productImages } from "../../assets/temdegt";
import { assets } from "../../assets/assets";

const Metal = () => {
  return (
    <div className="flex flex-col justify-center max-w-full bg-white gap-4">
      {/* Window & Facade Section */}
      <div className="mt-8 bg-white flex flex-col justify-center rounded-2xl max-w-full h-[755px]">
        <img
          src={productImages.metalTsonh}
          alt="Цонх ба фасад"
          className="w-full h-full rounded-2xl"
          loading="lazy"
        />
        <div className="flex justify-center items-center gap-10 p-4 bg-white w-full">
            <button className="flex items-center gap-2 border border-customGreen text-customGreen px-4 py-2 rounded-lg hover:bg-customGreen hover:text-white transition duration-300">
                Үргэлжлүүлэх →
            </button>
            </div>

      </div>

      {/* Product Info Section */}
      <div className="mt-20 bg-white flex flex-col justify-center rounded-2xl max-w-7xl mx-auto h-[592px]">
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

 

  
  <div className="h-[100%] bg-customGray py-10">
    <div className="flex items-center justify-center w-full my-20">
      <div className="relative w-full max-w-7xl overflow-hidden pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
          src="https://www.youtube.com/embed/s39PTBZNMEc?si=2KK1EsForThvf4Zw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>


      {/* Product Section */}
      <div className="mx-auto max-w-7xl bg-white py-10 mt-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Хуванцар цонх, хаалга</h2>
          <button
            className="px-6 py-3 bg-customGreen shadow-md rounded-full hover:bg-emerald-500 text-white text-lg transition"
            aria-label="Бүх бүтээгдэхүүнийг үзэх"
          >
            Бүгдийг үзэх
          </button>
        </div>

        {/* Product List */}
        <div className="flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden">
          {productDatas.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-xl min-w-[270px] flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg mb-3 w-full h-[180px] object-cover"
                loading="lazy"
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

export default Metal;
