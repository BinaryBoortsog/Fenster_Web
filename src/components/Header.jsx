import React, { useState } from 'react';
import { assets } from '../assets/assets';

export const Header = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  return (
    <div className="bg-customGray w-full overflow-hidden">
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden top-3 relative mt-[119px]"
        style={{
          backgroundImage: "url('/header_img.png')",
          width: "95%",
          height: "808px",
          left: "2.5%",
          right: "2.5%",
          borderRadius: "2%",
        }}
        id="Header"
      >
        <div className="text-white">
          <div className='max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>  
          <h1 className='md:text-5xl sm:text-6xl text-3xl font-bold md:py-6'>
        <span className="text-customGray">chanartai material</span> 
        <span className="text-customGreen"> naidvartai ugsralt</span>
        <br />
        <span className="text-customGray">hurdtai</span> 
        <span className="text-customGray"> guitsetgel</span>
        </h1>

            <p className='md:text-xl sm:text-2xl text-lg font-normal md:py-6 text-customGraymore'>
              Deed zergiin material ugsralt tonog tohooromj 
            </p>
            <div className='relative top-10 flex space-x-8 mt-6 py-10'>

              {/* Checkbox 1 */}
              <div className='bg-white w-48 h-28 flex flex-col items-center p-4 rounded-3xl relative space-y-8 
              select-none transition transform duration-500 hover:scale-110 hover:shadow-lg '>
                <input 
                  type='checkbox'
                  checked={isChecked1}
                  onChange={() => setIsChecked1(!isChecked1)}
                  className="appearance-none w-6 h-6 rounded-full border-2 border-customGreen checked:bg-customGreen checked:border-customGreen 
                  transition-all duration-300 relative left-14 bottom-1"
                />
                <span className='mt-2 text-black text-base'>mergejliin</span>
              </div>

              {/* Checkbox 2 */}
              <div className='bg-white w-48 h-28 flex flex-col items-center p-4 rounded-3xl space-y-8 select-none transition transform duration-500 hover:scale-110 hover:shadow-lg'>
                <input 
                  type='checkbox'
                  checked={isChecked2}
                  onChange={() => setIsChecked2(!isChecked2)}
                  className="appearance-none w-6 h-6 rounded-full border-2 border-customGreen checked:bg-customGreen checked:border-customGreen transition-all duration-300 relative left-14 bottom-1"
                />
                <span className='mt-2 text-black text-base'>Tosol Heregjuulegch</span>
              </div>

              {/* Checkbox 3 */}
              <div className='bg-white w-48 h-28 flex flex-col items-center p-4 rounded-3xl space-y-8 select-none transition transform duration-500 hover:scale-110 hover:shadow-lg'>
                <input 
                  type='checkbox'
                  checked={isChecked3}
                  onChange={() => setIsChecked3(!isChecked3)}
                  className="appearance-none w-6 h-6 rounded-full border-2 border-customGreen checked:bg-customGreen checked:border-customGreen transition-all duration-300 relative left-14 bottom-1"
                />
                <span className='mt-2 text-black text-base'>Checkbox 3</span>
              </div>
            </div>

            {/* Button with bounce animation */}
            <button className='border-customGreen  border-2 w-44 h-14 rounded-full text-white font-bold text-lg relative top-20 animate-bounce'>
              {/* Corrected image tag */}
              <img src={assets.down} alt='down' className='w-10 h-10 relative left-16' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
