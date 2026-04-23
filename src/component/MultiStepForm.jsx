import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/page4";
import Header from "./specialFunction/Header";

const MultiStepForm = () => {
  return (
    <div className="min-h-screen bg-[#F1F4F8]">
      
      {/* Optional Header */}
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/step-1" />} />
        
        <Route path="/step-1" element={<StepWrapper Page={Page1} next="/step-2" />} />
        <Route path="/step-2" element={<StepWrapper Page={Page2} next="/step-3" prev="/step-1" />} />
        <Route path="/step-3" element={<StepWrapper Page={Page3} next="/step-4" prev="/step-2" />} />
        <Route path="/step-4" element={<StepWrapper Page={Page4} prev="/step-3" />} />
      </Routes>

    </div>
  );
};

// Wrapper
const StepWrapper = ({ Page, next, prev }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [Page]);

  return (
    <Page 
      onNext={() => next && navigate(next)} 
      onPrev={() => prev && navigate(prev)} 
    />
  );
};

export default MultiStepForm;