import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/navigation-setup");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">OTP Verification</h1>
      <div className="mb-4">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleVerify}>
        Verify
      </button>
      <button className="mt-4 text-blue-500" onClick={() => console.log("Generate new OTP")}>
        Generate New OTP
      </button>
    </div>
  );
};

export default Otp;