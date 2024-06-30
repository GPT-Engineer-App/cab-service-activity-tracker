import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Select User Type</h1>
      <div className="mb-4">
        <button
          className={`p-2 rounded ${userType === "passenger" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setUserType("passenger")}
        >
          Passenger
        </button>
        <button
          className={`p-2 rounded ml-4 ${userType === "driver" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setUserType("driver")}
        >
          Driver
        </button>
      </div>
      {userType && (
        <div className="mb-4">
          <label className="block mb-2">{userType === "passenger" ? "Customer Name" : "Driver Name"}</label>
          <input
            type="text"
            className="border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default UserTypeSelection;