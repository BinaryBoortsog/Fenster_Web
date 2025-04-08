import React  ,{ useState }from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
} from "@material-tailwind/react";
import { assets } from "../assets/assets";
import emailjs from '@emailjs/browser';

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
    companyName: "",
    position: "", 
    role : "", 
    nameofPerson: "",
    phoneNumber: "",
    address: "",
   
  });

  const handleRoleSelection =(selectionRole)=>{
    const updatedData = {
      ...formData,
      role: selectionRole,
    };
    setFormData(updatedData);
    setActiveStep(1);
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const serviceId = "service_nmlnj9i";
      const templateId = "template_hnp2ijc";
      const publicKey = "MuFXNPpBjj0IgMJvm";
      const templateParams = {
        projectCount: formData.projectCount,
        projectName: formData.projectName,
        projectType: formData.projectType,
        projectDuration: formData.projectDuration,
        employees: formData.employees,
        productInterest: formData.productInterest,
        pastPartners: formData.pastPartners,
        projectDetails: formData.projectDetails,
        email: formData.email,
        resume: formData.resume.name,
        description: formData.description,
        companyName: formData.companyName,
        position: formData.position, 
        role : formData.role, 
        nameofPerson: formData.nameofPerson,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response.status, response.text);
          // Reset form data after successful submission
          setFormData({
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
            companyName: "",
            position: "", 
            role : "", 
            nameofPerson: "",
            phoneNumber: "",
            address: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }




  return (
    <div className="bg-white flex flex-col items-center justify-center">
      {/* Header зураг */}
      <div
        className="bg-cover bg-center flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${assets.header_img})`, height: "50vh" }}
      ></div>

      {/* Main card */}
      <div className="bg-white -mt-40 w-[90%] md:w-[70%] min-h-[80vh] flex flex-col items-center justify-center p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center pb-4 mt-14">
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
  className="w-full flex items-center justify-between p-10 rounded-lg mt-10"
>
  {/* Step 1 */}
  <Step
  onClick={() => setActiveStep(0)}
  className={`relative border-2 rounded-full p-4 cursor-pointer transition duration-300
    ${activeStep >= 0 ? "border-customGreen" : "border-customGraymore"}
    flex items-center justify-center w-16 h-16`}
>
    
<p className="absolute bottom-24 text-center w-full font-sans text-customBlue whitespace-nowrap">
  tanii tuhai
</p>
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
    className={`relative border-2 rounded-full p-4 cursor-pointer transition duration-300 ${
      activeStep >= 1 ? "border-customGreen bg-white" : "border-customGraymore bg-gray-100"
    } flex items-center justify-center w-16 h-16 hover:bg-customGreen`}
  >
    <p className="absolute bottom-24 right-4 text-center w-full font-sans text-customBlue whitespace-nowrap">
    Худалдан авалт

</p>
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
    className={`relative border-2 rounded-full p-4 cursor-pointer transition duration-300 ${
      activeStep === 2 ? "border-customGreen bg-white" : "border-customGraymore bg-gray-100"
    } flex items-center justify-center w-16 h-16 hover:bg-customGreen`}
  >
     <p className="absolute bottom-24 right-4 text-center w-full font-sans text-customBlue whitespace-nowrap">
    Holboo barih

</p>
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

<div className="w-full p-4 ">
            {activeStep === 0 && (
              <div className="flex flex-row justify-center gap-10 items-center">
                <button className="w-1/3 border border-customBlue p-4 rounded-3xl flex items-center justify-center"
                onClick={() => setActiveStep(1)}>
                  <span className="text-sm font-medium">Huvi hun</span>
                </button>
                <button className="w-1/3 border p-4 border-customBlue rounded-3xl flex items-center justify-center"
                onClick={() => { setActiveStep(1); handleRoleSelection("tosol heregjuulegch"); }}>
                  <span className="text-sm font-medium">tosol heregjuulegch</span>

                </button>
              </div>
            )}

            {activeStep === 1 && (
              <div className="flex flex-col gap-y-20">
              <div className="grid grid-cols-2 gap-10">
               <div className="flex flex-col gap-y-5">
                <label htmlFor="projectCount" className="text-sm font-medium">
                Танай байгууллага жилд дунджаар хэдэн төсөл хэргэжүүлдэг вэ?
                </label>
                <input id="projectCount" type="text" name="projectCount" value={formData.projectCount} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                <div className="flex flex-col gap-y-10">
                <label htmlFor="projectName" className="text-sm font-medium">
                Төслийн нэр ба байршил ?
                </label>
                <input id="projectName" type="text" name="projectName" value={formData.projectName} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className="flex flex-col gap-y-5">
                <label htmlFor="projectType" className="text-sm font-medium">
                Тosliin torol
                </label>
                <input id="projectType" type="text" name="projectType" value={formData.projectType} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className="flex flex-col gap-y-5">
                <label htmlFor="projectDuration" className="text-sm font-medium">
               tosliin hugatsaa
                </label>
                <input id="projectDuration" type="text" name="projectDuration" value={formData.projectDuration} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className="flex flex-col gap-y-5">
                <label htmlFor="employees" className="text-sm font-medium">
                Танай байгууллага жилд дунджаар хэдэн ажилтан ажилладаг вэ?
                </label>
                <input id="employees" type="text" name="employees" value={formData.employees} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className="flex flex-col gap-y-5">
                <label htmlFor="productInterest" className="text-sm font-medium">
                Танай sonirhoj bui buteegdehuuunii torol ?
                </label>
                <input id="productInterest" type="text" name="productInterest" value={formData.productInterest} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className="flex flex-col gap-y-5">
                <label htmlFor="pastPartners" className="text-sm font-medium">
               omno hamtran ajillaj baisan baiguullaga baigaa eseh ?
                </label>
                <input id="pastPartners" type="text" name="pastPartners" value={formData.pastPartners} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                
              </div>

              <div className="flex flex-col gap-y-5">
                <label htmlFor="projectDetails" className="text-sm font-medium">
                Төслийн талаар дэлгэрэнгүй мэдээллийг бичнэ үү
                </label>
                <input id="projectDetails" type="text" name="projectDetails" value={formData.projectDetails} 
                onChange={handleChange} className="w-full p-2 border  h-[172px] rounded-2xl" />
                </div>


                <div className="flex flex-col gap-y-5">
                    <label htmlFor="resume-upload" className="text-sm font-medium mb-1">
                      Төслийн зураг, түүвэр болон хавсаргах файлыг оруулна уу
                    </label>

                    <label
                      htmlFor="resume-upload"
                      className="w-full h-[172px] flex items-center justify-center bg-customGreen bg-opacity-20 rounded-2xl border cursor-pointer hover:bg-opacity-30 transition"
                    >
                       <span className="text-white font-semibold text-sm items-center flex flex-row justify-center bg-customGreen rounded-md w-[191px] h-[33px]">
                            {formData.resume ? formData.resume.name : "Файл нэмэх"}
                         </span>
                    </label>

                    <input
                      id="resume-upload"
                      type="file"
                      name="resume"
                      className="hidden"
                      onChange={(e) =>
                        setFormData({ ...formData, resume: e.target.files[0] })
                      }
                    />
                  </div>


              </div>
              
            )}

            {activeStep === 2 && (
              <div className="flex flex-col gap-y-20">
              <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-y-5">
                <label htmlFor="companyName" className="text-sm font-medium">
                Байгууллагын нэр
                </label>
                <input id="companyName" type="text" name="companyName" value={formData.companyName} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>


                <div className="flex flex-col gap-y-5">
                <label htmlFor="position" className="text-sm font-medium">
                Албан тушаал
                </label>
                <input id="position" type="text" name="position" value={formData.position} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                <div className="flex flex-col gap-y-5">
                <label htmlFor="nameofPerson" className="text-sm font-medium">
                Нэр
                </label>
                <input id="nameofPerson" type="text" name="nameofPerson" value={formData.nameofPerson} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                <div className="flex flex-col gap-y-5">
                <label htmlFor="email" className="text-sm font-medium">
                И-мэйл хаяг
                </label>
                <input id="email" type="text" name="email" value={formData.email} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                <div className="flex flex-col gap-y-5">
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                Утасны дугаар
                </label>
                <input id="phoneNumber" type="text" name="phoneNumber" value={formData.phoneNumber} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                <div className="flex flex-col gap-y-5">
                <label htmlFor="address" className="text-sm font-medium">
                Байршил
                </label>
                <input id="address" type="text" name="address" value={formData.address} 
                onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                
                  </div>
                </div>
            )}
          </div>
</div>
{/* Navigation Buttons */}
<div className="mt-12 flex justify-end w-full pr-8 gap-8 h-20">
  <div className="flex items-center gap-14 bg-white mr-28">
    {/* Always show Prev button */}
    <Button
      onClick={handlePrev}
      disabled={isFirstStep}
      variant="outlined"
      className="border-customGreen text-customGreen shadow-xl shadow-customGreen/40 hover:shadow-customGreen/30"
    >
      Өмнөх
    </Button>

    {activeStep === 2 ? (
      // Submit button only on step 2
      <Button
        onClick={handleSubmit}
        className="border-customGreen text-white shadow-xl shadow-customGreen/40 hover:shadow-customGreen/30 bg-customGreen"
      >
        Илгээх
      </Button>
    ) : (
      // Next button on steps 0 and 1
      <Button
        onClick={handleNext}
        disabled={isLastStep}
        className="border-customGreen text-white shadow-xl shadow-customGreen/40 hover:shadow-customGreen/30 bg-customGreen"
      >
        Дараах
      </Button>
    )}
  </div>
</div>



      </div>
    </div>
  );
};

export default Contact;
