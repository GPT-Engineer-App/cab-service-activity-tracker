import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserTypeSelection = () => {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (userType === "passenger") {
      navigate("/passenger");
    } else if (userType === "driver") {
      navigate("/driver");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl mb-6">Select User Type</h1>
      <div className="mb-4 space-x-4">
        <Button
          variant={userType === "passenger" ? "primary" : "outline"}
          onClick={() => setUserType("passenger")}
        >
          Passenger
        </Button>
        <Button
          variant={userType === "driver" ? "primary" : "outline"}
          onClick={() => setUserType("driver")}
        >
          Driver
        </Button>
      </div>
      {userType && (
        <div className="mb-4 w-64">
          <label className="block mb-2">{userType === "passenger" ? "Customer Name" : "Driver Name"}</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      <Button variant="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default UserTypeSelection;