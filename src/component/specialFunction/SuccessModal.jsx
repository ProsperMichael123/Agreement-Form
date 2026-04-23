import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
     
      <ScrollReveal className="w-full max-w-[240px] sm:max-w-[400px]">
        
        <div className="bg-white rounded-2xl p-5 sm:p-8 text-center shadow-2xl border border-slate-100 flex flex-col justify-center items-center">
          
          
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shrink-0">
            <Check className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[3px]" />
          </div>

          
          <h2 className="text-base sm:text-xl font-bold text-[#1A2B42] mb-2 leading-tight">
            Subscription successful!
          </h2>

          
          <p className="text-slate-500 text-[12px] sm:text-[14px] leading-relaxed mb-6 px-2">
            Thank you for your business! You can immediately start using 
            <span className="text-[#0052CC] font-semibold"> Swift Recov Services</span>. 
          </p>

          
          <button 
            onClick={() => {
                onClose();
                window.location.href = "https://chat.whatsapp.com/GaPz6oEbAL45LtUnyNIbIs?mode=gi_t";
              }}
            className="w-full bg-[#45a551] text-white text-[11px] sm:text-xs font-bold py-3 sm:py-4 rounded-full transition-all active:scale-95 shadow-md shrink-0 uppercase tracking-wider"
          >
            Join WhatsApp Group
          </button>

        </div>
      </ScrollReveal>
    </div>
  );
};

export default SuccessModal;