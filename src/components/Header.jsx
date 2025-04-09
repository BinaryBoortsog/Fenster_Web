import React, { useState } from 'react';
import { assets } from '../assets/assets';

export const Header = () => {
  const [selected, setSelected] = useState('mergejliin');

  const options = [
    { key: 'mergejliin', label: 'Мэргэжлийн' },
    { key: 'tosol', label: 'Төсөл хэрэгжүүлэгч' },
    { key: 'huv', label: 'Хувь хүн' },
  ];

  return (
    <div className="bg-customGray w-full overflow-hidden">
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden top-3 relative mt-[119px]"
        style={{
          backgroundImage: `url(${assets.header_img})`,
          width: "95%",
          height: "808px",
          left: "2.5%",
          right: "2.5%",
          borderRadius: "2%",
        }}
        id="Header"
      >
        <div className="text-white flex flex-col">
          <div className="max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
            <h1 className="md:text-5xl sm:text-6xl text-3xl font-bold md:py-6">
              <span className="text-customGray">Ирээдүйн хөрөнгө оруулалт</span>
              <br />
            </h1>

            <p className="md:text-xl sm:text-2xl text-lg font-normal md:py-6 text-customGraymore">
              Дээд зэргийн материал, угсралт, тоног төхөөрөмж
            </p>

            <button className="bg-transparent border border-customGreen text-customGreen rounded-full px-6 py-3 mt-4 text-base font-semibold hover:border-white hover:text-white transition duration-300">
            Үргэлжлүүлэх 
            </button>
            
          </div>
         
        </div>
        
        
      </div>
      <div className="bg-white rounded-2xl p-3 flex gap-1 shadow-lg  w-[85%] mx-auto relative -mt-10 z-10 mb-11">
              {options.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSelected(opt.key)}
                  className={`w-full text-sm sm:text-base px-4 py-2 rounded-full transition-all duration-200 ${
                    selected === opt.key
                      ? 'hover:bg-customGreen text-black bg-customGray'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

      <div className="bg-white rounded-2xl p-3 flex gap-1 shadow-lg  w-[85%] mx-auto relative -mt-10 z-10 mb-11">
        <div className="w-full text-sm sm:text-base px-4 py-2 rounded-full transition-all duration-200 bg-white text-gray-700">
          {selected === 'mergejliin' && (
            <div className="grid grid-cols-2 items-center justify-center p-40 gap-4">
              <div className='flex flex-col space-y-4'>
              <h1 className='text-2xl font-semibold'>Ирээдүйн Хөрөнгө <br></br>Оруулалт</h1>
              <text className='text-base'>дээд зэргийн материал, угсралт, тоног төхөөрөмж дээд зэргийн материал, 
                угсралт, тоног төхөөрөмж дээд зэргийн материал, угсралт, тоног төхөөрөмж</text>

              <button className="bg-customGreen border border-customGreen text-white rounded-xl shadow-2xl shadow-customGreenmore drop-shadow-xl w-1/4 py-2 mt-4 text-xs font-semibold hover:border-white transition duration-300">
                Үргэлжлүүлэх  
                  </button>
            </div>
              
                <div className='flex justify-center'>
                  <img src={assets.project_img_1} alt="mergejliin" className='w-[551px] h-[486px]'/>
                </div>
            </div>
          )}
          {selected === 'tosol' && (
            <div className="text-center">
              <h2 className="text-lg font-semibold">Төсөл хэрэгжүүлэгч</h2>
              <p className="text-gray-600">төхөөрөмж</p>
            </div>
          )}
          {selected === 'huv' && (
            <div className="text-center">
              <h2 className="text-lg font-semibold">Хувь хүн</h2>
              <p className="text-gray-600">Таны хувь хүний мэдээлэл энд байна.</p>
            </div>
          )}
        </div>
        </div>
    </div>
  );
};

export default Header;
