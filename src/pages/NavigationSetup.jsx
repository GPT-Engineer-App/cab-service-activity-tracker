import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavigationSetup = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/tracking");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl mb-6">Real-Time Navigation Setup</h1>
      <Button variant="primary" onClick={() => console.log("Get current location")}>
        Get Current Location
      </Button>
      <Button variant="secondary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default NavigationSetup;