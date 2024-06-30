import { useEffect, useState } from "react";

const FlashActivity = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50">
      <h1 className="text-white text-4xl">Welcome to CABs24</h1>
    </div>
  );
};

export default FlashActivity;