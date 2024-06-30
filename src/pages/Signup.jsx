import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/otp");
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google signup success:", response);
    navigate("/otp");
  };

  const handleGoogleLoginFailure = (response) => {
    console.log("Google signup failure:", response);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Signup</h1>
      <div className="mb-4">
        <label className="block mb-2">Country</label>
        <select className="border p-2">
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone Number</label>
        <input
          type="text"
          className="border p-2"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleNext}>
        Next
      </button>
      <div className="mt-4">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
        />
      </div>
    </div>
  );
};

export default Signup;