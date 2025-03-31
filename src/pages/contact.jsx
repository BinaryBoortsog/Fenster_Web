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
    email: "",
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
    <div className="flex flex-col items-center bg-white">
      {/* Hero Section */}
      <div
        className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      ></div>

      {/* Form Container */}
      <div className="relative bottom-48 w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Хамтран ажиллах</h1>
        <p className="text-black text-center px-6 mb-6">
          Сайн байна уу, та бидэнд мэдээллээ үлдээнэ үү. Бид таны хүсэлттэй танилцаад, эргээд холбогдох болно.
        </p>

        {/* Progress Bar */}
        <div className="flex items-center justify-between w-full mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300
                  ${step.completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
              >
                {step.completed ? <FaCheck /> : index + 1}
              </div>
              <span className="text-sm mt-2">{step.label}</span>
              {index < steps.length - 1 && (
                <div className="w-full h-1 bg-gray-300 mt-2">
                  <div className={`h-full transition-all duration-300 ${currentStep > index + 1 ? "bg-green-500 w-full" : "w-0"}`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Form Section */}
        <form className="w-full space-y-4">
          {currentStep === 1 && (
            <div className="grid gap-4">
              <label className="text-sm font-medium">
                Танай байгууллага жилд дунджаар хэдэн төсөл хэргэжүүлдэг вэ?
                <input type="text" name="projectCount" value={formData.projectCount} onChange={handleChange} className="input-field" />
              </label>

              <label className="text-sm font-medium">
                Төслийн нэр ба байршил?
                <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} className="input-field" />
              </label>

              <label className="text-sm font-medium">
                Төслийн төрөл
                <input type="text" name="projectType" value={formData.projectType} onChange={handleChange} className="input-field" />
              </label>

              <label className="text-sm font-medium">
                Төслийн хугацаа
                <input type="text" name="projectDuration" value={formData.projectDuration} onChange={handleChange} className="input-field" />
              </label>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid gap-4">
              <label className="text-sm font-medium">
                Танай байгууллага хэдэн ажилтантай вэ?
                <input type="text" name="employees" value={formData.employees} onChange={handleChange} className="input-field" />
              </label>

              <label className="text-sm font-medium">
                Таны сонирхож буй бүтээгдэхүүний төрөл
                <input type="text" name="productInterest" value={formData.productInterest} onChange={handleChange} className="input-field" />
              </label>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid gap-4">
              <label className="text-sm font-medium">
                Таны имэйл
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" />
              </label>

              <label className="text-sm font-medium">
                Таны товч танилцуулга
                <textarea name="description" value={formData.description} onChange={handleChange} className="input-field h-24"></textarea>
              </label>
            </div>
          )}
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-8 space-x-4">
          {currentStep > 1 && (
            <button onClick={prevStep} className="btn-secondary">
              Буцах
            </button>
          )}
          {currentStep < steps.length ? (
            <button onClick={nextStep} className="btn-primary">
              Дараах
            </button>
          ) : (
            <button onClick={() => alert("Form submitted!")} className="btn-success">
              Илгээх
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
