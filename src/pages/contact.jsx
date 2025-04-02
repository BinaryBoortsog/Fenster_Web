import { useState } from "react";
import { assets } from '../assets/assets';

export default function CollaborationForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden top-3 relative"
        style={{
          backgroundImage: `url(${assets.header_img})`,
          width: "1440px",
          height: "50vh",
        }}
        id="Header"> 
        <div className="bg-white shadow-xl rounded-2xl p-10 width-1100px w-full max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Хамтран ажиллах</h2>
          <p className="text-gray-600 ">Сайн байна уу, та бидэнд мэдээллээ үлдээнэ үү. Бид таны хүсэлттэй танилцаад, эргээд холбоо барих болно.</p>

          <div className="flex justify-center items-center space-x-0 mb-8">
          {[1, 2, 3].map((num, index) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-10 h-10 flex justify-center items-center rounded-full border-[1.3px] text-gray-600 font-default transition-all ${
                  step >= num ? "border-green-500" : "border-gray-300"
                }`}
              >
                {num}
              </div>
              {num < 3 && <div className="w-12 h-[1.3px] bg-gray-300"></div>}
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
