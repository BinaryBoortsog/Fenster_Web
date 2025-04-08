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

            <button className="bg-transparent border border-customGreen text-customGreen rounded-full px-6 py-3 mt-4 text-base font-semibold hover:bg-green-600 transition duration-300">
              urgeljluuleh 
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
    </div>
  );
};

export default Header;
