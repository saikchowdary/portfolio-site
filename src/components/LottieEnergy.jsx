// src/components/LottieEnergy.jsx
import React from "react";
import Lottie from "lottie-react";
import energyAnimation from "../animations/energy.json";

const LottieEnergy = () => {
  return (
    <div className="w-80 md:w-[28rem] lg:w-[32rem] mx-auto mt-4">

      <Lottie animationData={energyAnimation} loop={true} />
    </div>
  );
};

export default LottieEnergy;
