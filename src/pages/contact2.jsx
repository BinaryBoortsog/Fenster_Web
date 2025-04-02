import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { assets } from "../assets/assets";
const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectCount: "",
    projectName: "",
    projectType: "",
    projectDuration: "",
    employees: "",
    productInterest: "",
    pastPartners: "",
    projectDetails: "",
    email: "",
    resume: "",
    description: "",
  });

  const steps = [
    { label: "Таны тухай", completed: currentStep > 1 },
    { label: "Худалдан авалт", completed: currentStep > 2 },
    { label: "Холбоо барих", completed: currentStep > 3 },
  ];

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <div
        className="bg-cover bg-center flex items-center justify-center w-full"
        style={{backgroundImage: `url(${assets.header_img})` , height: "50vh" }}
      ></div>
     
        <div className="bg-white relative bottom-52 w-[50%] min-h-[80vh] flex flex-col items-center justify-center p-6 shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center pb-4">Хамтран ажиллах</h1>
          <p className="text-black text-center px-6 mb-6">
            Сайн байна уу, та бидэнд мэдээллээ үлдээнэ үү. Бид таны хүсэлттэй танилцаад, эргээд холбогдох болно.
          </p>

          {/* Progress Bar */}
          <div className="flex items-center w-full pb-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold 
                      ${step.completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
                  >
                    {step.completed ? <FaCheck /> : index + 1}
                  </div>
                  <span className="text-sm mt-2">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1/6 h-1 bg-gray-300 flex">
                    <div
                      className={`h-full rounded transition-all duration-300 
                        ${currentStep > index + 1 ? "bg-green-400 w-full" : "bg-gray-300 w-0"}`}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Form Sections */}
          <div className="w-full p-4 border rounded-lg shadow-md">
            {currentStep === 1 && (
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm font-medium">Танай байгууллага жилд дунджаар хэдэн төсөл хэргэжүүлдэг вэ?</label>
                <input type="text" name="projectCount" value={formData.projectCount} onChange={handleChange} className="w-full p-2 border rounded" />

                <label className="text-sm font-medium">Төслийн нэр ба байршил?</label>
                <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} className="w-full p-2 border rounded" />

                <label className="text-sm font-medium">Төслийн төрөл</label>
                <input type="text" name="projectType" value={formData.projectType} onChange={handleChange} className="w-full p-2 border rounded" />

                <label className="text-sm font-medium">Төслийн хугацаа</label>
                <input type="text" name="projectDuration" value={formData.projectDuration} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm font-medium">Танай байгууллага хэдэн ажилтантай вэ?</label>
                <input type="text" name="employees" value={formData.employees} onChange={handleChange} className="w-full p-2 border rounded" />

                <label className="text-sm font-medium">Таны сонирхож буй бүтээгдэхүүний төрөл</label>
                <input type="text" name="productInterest" value={formData.productInterest} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            )}

            {currentStep === 3 && (
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm font-medium">Таны имэйл</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />

                <label className="text-sm font-medium">Таны товч танилцуулга</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded h-20"></textarea>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end w-full mt-8 pt-8 pr-8 gap-8">
            {currentStep > 1 && (
              <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">
                Буцах
              </button>
            )}
            {currentStep < steps.length ? (
              <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Дараах
              </button>
            ) : (
              <button onClick={() => alert("Form submitted!")} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Илгээх
              </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default Contact;
