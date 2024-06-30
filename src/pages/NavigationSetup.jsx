import { useNavigate } from "react-router-dom";

const NavigationSetup = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/tracking");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Real-Time Navigation Setup</h1>
      <button className="bg-blue-500 text-white p-2 rounded mb-4" onClick={() => console.log("Get current location")}>
        Get Current Location
      </button>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default NavigationSetup;