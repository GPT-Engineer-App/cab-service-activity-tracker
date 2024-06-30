import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to CABs24</h1>
      <p className="text-lg">Your reliable cab service</p>
      <div className="space-x-4">
        <Button variant="primary" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button variant="secondary" onClick={() => navigate("/signup")}>
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Index;