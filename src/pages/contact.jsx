import React from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
} from "@material-tailwind/react";
import { assets } from "../assets/assets";

const Contact = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(true);

  const handleNext = () => {
    if (!isLastStep) setActiveStep((cur) => cur + 1);
  };

  const handlePrev = () => {
    if (!isFirstStep) setActiveStep((cur) => cur - 1);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center">
      {/* Header зураг */}
      <div
        className="bg-cover bg-center flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${assets.header_img})`, height: "50vh" }}
      ></div>

      {/* Main card */}
      <div className="bg-white -mt-40 w-[90%] md:w-[70%] min-h-[80vh] flex flex-col items-center justify-center p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center pb-4">
          Хамтран ажиллах
        </h1>
        <p className="text-black text-center px-6 mb-6">
          Сайн байна уу, та бидэнд мэдээллээ үлдээнэ үү. Бид таны хүсэлттэй
          танилцаад, эргээд холбогдох болно.
        </p>
        <div className="w-full mt-6 max-w-3xl">

        {/* Stepper */}
        <Stepper
  activeStep={activeStep}
  isLastStep={(value) => setIsLastStep(value)}
  isFirstStep={(value) => setIsFirstStep(value)}
  className="w-full flex items-center justify-between p-10 rounded-lg"
>
  {/* Step 1 */}
  <Step
  onClick={() => setActiveStep(0)}
  className={`relative border-2 rounded-full p-10 cursor-pointer transition duration-300
    ${activeStep >= 0 ? "border-customGreen" : "border-customGraymore"}
    flex items-center justify-center w-16 h-16`}
>
  <Typography
    variant="h4"
    className={`text-center ${
      activeStep >= 0 ? "text-customGreen" : "text-customGraymore"
    }`}
  >
    1
  </Typography>
</Step>

  {/* Line */}
  <div className="flex-1 h-1 relative">
    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full"></div>
    <div
      className="absolute top-1/2 left-0 h-1 bg-customGreen rounded-full transition-all duration-300"
      style={{ width: activeStep >= 1 ? "100%" : "0%" }}
    ></div>
  </div>

  {/* Step 2 */}
  <Step
    onClick={() => setActiveStep(1)}
    className={`relative border-2 rounded-full p-10 cursor-pointer transition duration-300 ${
      activeStep >= 1 ? "border-customGreen bg-white" : "border-customGraymore bg-gray-100"
    } flex items-center justify-center w-16 h-16 hover:bg-customGreen`}
  >
    <Typography
       variant="h4"
       className={`text-center ${
         activeStep >= 1 ? "text-customGreen" : "text-customGraymore"
       }`}
    >
      2
    </Typography>
  </Step>

  {/* Line */}
  <div className="flex-1 h-1 relative">
    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full"></div>
    <div
      className="absolute top-1/2 left-0 h-1 bg-customGreen rounded-full transition-all duration-300"
      style={{ width: activeStep >= 2 ? "100%" : "0%" }}
    ></div>
  </div>

  {/* Step 3 */}
  <Step
    onClick={() => setActiveStep(2)}
    className={`relative border-2 rounded-full p-10 cursor-pointer transition duration-300 ${
      activeStep === 2 ? "border-customGreen bg-white" : "border-customGraymore bg-gray-100"
    } flex items-center justify-center w-16 h-16 hover:bg-customGreen`}
  >
    <Typography
      variant="h4"
      className={`text-center ${
        activeStep === 2 ? "text-customGreen" : "text-customGraymore"
      }`}
    >
      3
    </Typography>
  </Step>
</Stepper>


        {/* Step бүрийн контент (хүсвэл өөр өөр form оруулах хэсэг) */}
        <div className="mt-10 w-full px-4">
          {activeStep === 0 && (
            <div className="text-center text-gray-700">Хувийн мэдээлэл оруулах хэсэг</div>
          )}
          {activeStep === 1 && (
            <div className="text-center text-gray-700">Сонголтууд оруулах хэсэг</div>
          )}
          {activeStep === 2 && (
            <div className="text-center text-gray-700">Баталгаажуулж илгээх хэсэг</div>
          )}
        </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between w-full max-w-md">
          <Button
            onClick={handlePrev}
            disabled={isFirstStep}
            variant="outlined"
            color="blue"
          >
            Өмнөх
          </Button>
          <Button
            onClick={handleNext}
            disabled={isLastStep}
            color="blue"
          >
            Дараах
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
