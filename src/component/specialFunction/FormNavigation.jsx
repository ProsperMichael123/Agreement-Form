import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FormNavigation = ({ 
  onPrev, 
  onNext, 
  isNextDisabled, 
  showPrev = true, 
  showNext = true,
  nextLabel = "Next" 
}) => {

  // Scroll to top before navigating
  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onNext) onNext();
  };

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onPrev) onPrev();
  };

  return (
    <div className="flex w-full justify-between items-center gap-4 mt-5 pt-8 border-t border-slate-100">
      
      {/* Back Button */}
      <div className="flex-1">
        {showPrev && (
          <button 
            type="button"
            onClick={handlePrev}   // 
            className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase hover:text-[#1A2B42] transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
        )}
      </div>

      {/* Next Button */}
      {showNext && (
        <button 
          type="button"
          onClick={handleNext}   
          disabled={isNextDisabled}
          className={`px-4 py-2 rounded-full font-black text-xs tracking-widest uppercase transition-all flex items-center gap-2
            ${!isNextDisabled 
              ? 'bg-[#1A2B42] text-white shadow-xl hover:bg-slate-800 active:scale-95 animate-in fade-in zoom-in duration-300' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-70'}`}
        >
          {nextLabel}
          {!isNextDisabled && <ChevronRight className="w-3 h-4" />}
        </button>
      )}
    </div>
  );
};

export default FormNavigation;