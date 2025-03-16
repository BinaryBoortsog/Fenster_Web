import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";

export const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth > 1024) {
        setCardsToShow(projectsData.length);  // Show all cards on large screens
      } else {
        setCardsToShow(1);  // Show only one card on small screens
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  const toggleDescription = () => {
    setIsDescriptionVisible((prevState) => !prevState);
  };

  return (
    <div className='container bg-white mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full rounded-lg overflow-hidden' id='News'>
      <p className='text-xl underline underline-offset-4 sm:text-xl font-bold mb-2 text-center text-customGreen'>Сүүлийн мэдээлэл</p>
      <h1 className='text-center text-customBlue mb-8 max-w-80 mx-auto text-3xl font-bold'>
        Мэдээ мэдээлэл
      </h1>

      {/* News Cards */}
      <div className='flex justify-end items-center mb-8'>
        <button className='p-3 bg-gray-200 rounded mr-2 border-customBlue border-2' onClick={handlePrev} aria-label='Previous news'>
          <FaArrowLeft className='text-customGreen' />
        </button>
        <button className='p-3 bg-gray-200 rounded mr-2 border-customBlue border-2' onClick={handleNext} aria-label='Next news'>
          <FaArrowRight className='text-customGreen'/>
        </button>
      </div>

      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
          {projectsData.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 flex justify-end'>
              {/* Left Pane (Image) */}
              <div className='relative flex-shrink-0 w-full'>
                <img src={project.image} alt={project.title} className={`w-full h-auto transition-all duration-500 ease-in-out ${isDescriptionVisible ? 'opacity-0' : 'opacity-100'}`} />
                <button id="leftPaneButton" className='absolute flex top-64 h-20 w-20 cursor-pointer transition duration-500 hover:bg-white bg-customGray bg-opacity-70 text-customGreen items-center justify-center' onClick={toggleDescription}>
                  <IoMdMore className='text-3xl'/>
                </button>
                <div className='absolute left-0 right-0 bottom-5 flex justify-between'>
                  <h2 className='text-white bg-customGreen px-4 py-2 text-lg font-bold'>{project.title}</h2>
                </div>
              </div>

              {/* Right Pane (Description) */}
              <div className={`absolute top-0 right-0 bg-customGray bg-opacity-70 p-4 w-1/2 transition-all duration-500 ease-in-out ${isDescriptionVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className='flex items-center h-screen left-0 w-48'>
                  <button id="rightPaneButton" className='w-full h-48 flex items-center cursor-pointer transition duration-500 hover:bg-white bg-customGray bg-opacity-70 text-customGreen justify-center' onClick={toggleDescription}>
                    <IoMdMore className='text-3xl'/>
                  </button>
                  <div className='bg-white p-4 rounded-lg shadow-lg'>
                    <p className=''>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
