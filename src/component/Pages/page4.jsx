import { db } from "../../firebase";
import { ref, push } from "firebase/database";
import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  PenLine, 
  FileSignature, 
  Loader2 
} from 'lucide-react';
import FormNavigation from '../specialFunction/FormNavigation';
import Header from '../specialFunction/Header';
import ScrollReveal from '../specialFunction/ScrollReveal';
import SuccessModal from '../specialFunction/SuccessModal';

const Page4 = ({ onPrev }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  
  // State to handle form data
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    subscriberType: '',
    address: '',
    emailPhone: '',
    whatsappNumber: '',
    subscriberNamePrint: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setFormData(prev => ({ ...prev, subscriberType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = true;
    if (!formData.subscriberType) newErrors.subscriberType = true;
    if (!formData.subscriberNamePrint) newErrors.subscriberNamePrint = true;
    if (!formData.date) newErrors.date = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      // Save to Firebase
      await push(ref(db, "agreements"), {
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      console.log("Saved to Firebase");
      setShowSuccess(true);
    } catch (error) {
      console.error("Error saving form:", error);
      alert("Failed to save agreement. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form validation for button state
  const isFormFilled =
    formData.fullName &&
    formData.subscriberType &&
    formData.subscriberNamePrint &&
    formData.date;

  return (
    <div className="min-h-screen bg-[#F1F4F8] font-sans text-slate-800 p-4 md:p-8 pt-20">
      
      <Header />
      
      {/* Success Modal Overlay */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 text-start relative">
        
        {/* Loading Overlay for the entire card */}
        {isSubmitting && (
          <div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-[#1A2B42] animate-spin mb-4" />
            <p className="font-bold text-[#1A2B42] animate-pulse text-lg">Processing Agreement...</p>
            <p className="text-xs text-slate-500 mt-2">Please wait while we secure your data.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-4 md:p-16">
          
          <section className="mb-16">
            <ScrollReveal>
              <div className="mb-10 border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#1A2B42] uppercase tracking-tight">
                  7. Subscriber <br/> Information
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ScrollReveal delay={0.1} className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <div className={`border-b-2 py-2 transition-colors ${errors.fullName ? 'border-red-500' : 'border-slate-200 focus-within:border-[#1A2B42]'}`}>
                  <input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-transparent outline-none text-slate-800 font-medium" 
                    placeholder="Enter your full name" 
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company/Business Name</label>
                <div className="border-b-2 border-slate-200 py-2 focus-within:border-[#1A2B42] transition-colors">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-slate-300" />
                    <input 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-transparent outline-none text-slate-800 font-medium" 
                      placeholder="Legal business name" 
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="md:col-span-2">
                <div className={`space-y-4 bg-slate-50 p-6 rounded-2xl border ${errors.subscriberType ? 'border-red-300 shadow-md shadow-red-50' : 'border-slate-100'}`}>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Subscriber Type</label>
                  <div className="flex flex-wrap gap-8">
                    {['Client', 'Supplier', 'Both'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleTypeSelect(type)}
                        className="flex items-center gap-3 group"
                      >
                        <div className={`w-6 h-6 border-2 rounded transition-all flex items-center justify-center ${formData.subscriberType === type ? 'border-[#1A2B42] bg-[#1A2B42]' : 'border-slate-300'}`}>
                          {formData.subscriberType === type && <div className="w-2 h-2 bg-white rounded-sm" />}
                        </div>
                        <span className={`font-bold ${formData.subscriberType === type ? 'text-[#1A2B42]' : 'text-slate-700'}`}>{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</label>
                <div className="border-b-2 border-slate-200 py-2 focus-within:border-[#1A2B42] transition-colors">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-300" />
                    <input 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-transparent outline-none text-slate-800 font-medium" 
                      placeholder="Street, City, State" 
                    />
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-10">
                <ScrollReveal delay={0.5} className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email/Phone</label>
                  <div className="border-b-2 border-slate-200 py-2 focus-within:border-[#1A2B42] transition-colors">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-300" />
                      <input 
                        name="emailPhone"
                        value={formData.emailPhone}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-transparent outline-none text-slate-800 font-medium" 
                        placeholder="example@mail.com" 
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.6} className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp Number</label>
                  <div className="border-b-2 border-slate-200 py-2 focus-within:border-[#1A2B42] transition-colors">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-300" />
                      <input 
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        type="text" 
                        className="w-full bg-transparent outline-none text-slate-800 font-medium" 
                        placeholder="080..." 
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Signature and Date Section */}
          <ScrollReveal delay={0.2}>
            <section className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-inner">
              <div className="mb-10">
                <h2 className="text-2xl font-black text-[#1A2B42] uppercase tracking-tight">
                  Signature and Date
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                <div className="space-y-10">
                  <div className="space-y-2">
                    <div className="h-12 border-b-2 border-slate-400 relative flex items-end">
                       <span className="text-xs italic text-slate-400 mb-1">E-signature recorded on submission</span>
                    </div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Subscriber Signature</label>
                  </div>

                  <div className="space-y-2">
                    <input 
                      name="subscriberNamePrint"
                      value={formData.subscriberNamePrint}
                      onChange={handleChange}
                      type="text"
                      className={`w-full bg-transparent border-b outline-none py-1 text-sm font-bold uppercase ${errors.subscriberNamePrint ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="Type Name to Print"
                    />
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Subscriber Name (Print)</label>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-2">
                    <input 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date"
                      className={`w-full bg-transparent border-b outline-none py-1 text-sm ${errors.date ? 'border-red-500' : 'border-slate-300'}`}
                    />
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Date</label>
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="h-8 border-b border-slate-300 italic text-xs text-slate-400 flex items-end">Pending Review</div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Swift Recov Representative</label>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="mt-16 flex flex-col items-center gap-4">
              <button 
                type="submit"
                disabled={!isFormFilled || isSubmitting}
                className="relative bg-[#1A2B42] text-white px-12 py-4 rounded-full font-black text-sm tracking-widest hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    PROCESSING...
                  </>
                ) : (
                  <>
                    <PenLine className="w-4 h-4" />
                    SUBMIT 
                  </>
                )}
              </button>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                By clicking submit, you agree to the terms listed on pages 1-3.
              </p>
            </div>
          </ScrollReveal>
        </form>

        <div className="px-4 md:px-16 mb-10">
          <ScrollReveal delay={0.7}>
            <FormNavigation 
              onPrev={onPrev} 
              showPrev={true}
              showNext={false}   
            />
          </ScrollReveal>
        </div>
        
        <div className="pb-10 text-center">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 Swift Recov. All rights reserved.
            <span className="block md:inline"> Lagos, Nigeria.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;