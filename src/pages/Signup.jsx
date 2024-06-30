import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNext = () => {
    if (!phoneNumber || !country) {
      toast({
        title: "Error",
        description: "Country and phone number are required.",
        variant: "destructive",
      });
      return;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        title: "Error",
        description: "Invalid phone number format.",
        variant: "destructive",
      });
      return;
    }
    navigate("/otp");
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google signup success:", response);
    toast({
      title: "Success",
      description: "Google signup successful.",
      variant: "success",
    });
    navigate("/otp");
  };

  const handleGoogleLoginFailure = (response) => {
    console.log("Google signup failure:", response);
    toast({
      title: "Error",
      description: "Google signup failed.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl mb-6">Signup</h1>
      <div className="mb-4 w-64">
        <label className="block mb-2">Country</label>
        <Select onValueChange={setCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4 w-64">
        <label className="block mb-2">Phone Number</label>
        <Input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <Button variant="primary" onClick={handleNext}>
        Next
      </Button>
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