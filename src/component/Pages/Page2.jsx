import React from 'react';
import FormNavigation from '../specialFunction/FormNavigation';
import Header from '../specialFunction/Header';
import ScrollReveal from '../specialFunction/ScrollReveal'; // Import the animation wrapper
import { 
  CreditCard, 
  Receipt, 
  ShieldAlert, 
  Navigation, 
  Truck, 
  CalendarClock, 
  CheckCircle, 
  Building2,
  Copy,
  Info
} from 'lucide-react';

const Page2 = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 p-3 md:p-5 pt-20 md:pt-24">
      
      <Header/>

      {/* Container window */}
      <div className="max-w-2xl md:max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        
        <main className="p-3 md:p-14 text-start">
          {/* Section Header */}
          <ScrollReveal>
            <div className="mb-12 border-l-4 border-orange-500 pl-6">
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-2">Financial Protocol</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#1A2B42] leading-tight uppercase">
                2. Subscription & <br /> Service Fees
              </h2>
            </div>
          </ScrollReveal>

          {/* Core Fees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Agreement Fee*/}
            <ScrollReveal delay={0.1}>
              <div className="group bg-indigo-50/30 border border-indigo-100 p-4 rounded-3xl hover:bg-indigo-50 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-white text-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Receipt className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Agreement Signing Fee</h3>
                <p className="text-2xl font-black text-indigo-900 mb-4">₦10,000</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Signing of this Service Agreement Form attracts a fixed fee of ₦10,000. This fee is payable by both clients and suppliers before commencement of any service. The agreement becomes active only after payment confirmation.
                </p>
              </div>
            </ScrollReveal>

            {/* Verification Fee - Emerald Theme */}
            <ScrollReveal delay={0.2}>
              <div className="group bg-emerald-50/30 border border-emerald-100 p-4 rounded-3xl hover:bg-emerald-50 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Supplier Verification Fee</h3>
                <p className="text-2xl font-black text-emerald-900 mb-4">₦10,000</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  One-time verification and onboarding fee of ₦10,000 for suppliers to be approved to market in the WhatsApp group. if supplier also wants client services.
                </p>
              </div>
            </ScrollReveal>

            {/* Daily Service Fee - Violet Theme */}
            <ScrollReveal delay={0.3}>
              <div className="group bg-violet-50/30 border border-violet-100 p-4 rounded-3xl hover:bg-violet-50 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-white text-violet-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <CalendarClock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Daily Service Fee</h3>
                <p className="text-2xl font-black text-violet-900 mb-4">₦25,000 <span className="text-sm font-medium text-violet-400">/ day</span></p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Daily service for supplier verification, goods confirmation, or payment confirmation within Lagos or any state in Nigeria is ₦25,000 per day. This fee is exclusive of delivery of items/goods.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Delivery & Payment Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">

            {/* LEFT CARD */}
            <ScrollReveal delay={0.2}>
              <div className="h-full flex flex-col">
                <h4 className="font-bold flex items-center gap-2 text-[#1A2B42] mb-4 ml-2">
                  <div className="p-1.5 bg-orange-100 rounded-lg"><Truck className="w-4 h-4 text-orange-600" /></div>
                  DELIVERY CHARGES
                </h4>

                <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200/60 flex-1">
                  <ul className="space-y-5 text-sm text-slate-600">
                    <li className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-blue-900 flex-shrink-0 flex items-center justify-center text-[10px] text-white">1</div>
                      <p>Delivery fees within Lagos or to any movement location will be determined directly between the client/supplier and the assigned agent.</p>
                    </li>

                    <li className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-blue-900 flex-shrink-0 flex items-center justify-center text-[10px] text-white">2</div>
                      <p>All delivery payments are to be made by the customer/buyer.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT CARD */}
            <ScrollReveal delay={0.4}>
              <div className="h-full flex flex-col">
                <h4 className="font-bold flex items-center gap-2 text-[#1A2B42] mb-4 ml-2">
                  <div className="p-1.5 bg-blue-100 rounded-lg"><Info className="w-4 h-4 text-blue-600" /></div>
                  PAYMENT SCHEDULE & RULES
                </h4>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 flex-1">
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Fees for agreement signing, supplier verification, police tracking, and daily services are due before commencement of work unless otherwise agreed in writing.
                  </p>

                  <div className="flex items-start gap-4 bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                    <ShieldAlert className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-slate-700 leading-normal">
                      Subscriber must always send payment receipt for confirmation before service begins.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* High Priority Intervention Section (Police Tracking) - WITH ScrollReveal */}
          <ScrollReveal>
            <div className="bg-[#1A2B42] rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-red-500/30">
                    <ShieldAlert className="w-3 h-3" />
                    Police Intervention Protocol
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Police Tracking</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Tracking is the process of locating the exact place/address of the person that scammed you or tracing the supplier to retrieve money paid by you. Any tracking activity that involves police intervention is charged at ₦100,000 per tracking session.
                  </p>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Navigation className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1 uppercase">Other Logistics for Police</h4>
                      <p className="text-xs text-slate-400">
                        All other logistics, operational costs, fueling, mobilization, and third-party charges incurred during police tracking will be paid by the subscriber in addition to the ₦100,000 track-ing fee.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-72 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-xs font-bold text-blue-300 uppercase mb-4">Tracking Session Cost</p>
                  <div className="text-2xl font-black mb-2">₦100,000</div>
                  <p className="text-[10px] text-slate-400 leading-tight italic">
                    *Excluding additional mobilization and fueling costs as stated.
                  </p>
                </div>
              </div>
              {/* Background Decorative Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            </div>
          </ScrollReveal>

          {/* Payment Account Details */}
          <ScrollReveal delay={0.5}>
            <div className="max-w-2xl mx-auto mb-16">
              <h3 className="text-center font-black px-3 text-[#994209] mb-8 tracking-[0.3em] text-sm uppercase">Official Payment Account</h3>
              <div className="group bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden transform transition-transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-black p-10 text-white relative">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Official Bank</p>
                      <p className="text-xl font-black tracking-tight">UBA</p>
                    </div>
                    <div className="w-12 h-8 bg-orange-400/20 rounded-md border border-orange-400/30 flex items-center justify-center">
                      <div className="w-8 h-5 bg-orange-400/40 rounded-sm"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-10">
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Name</p>
                    <p className="text-xl font-bold tracking-tight">Nwankwo Regina Afi</p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Number</p>
                      <p className="text-xl font-mono font-bold tracking-wider text-white">2014599017</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 text-start border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 font-semibold flex items-center justify-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-orange-500" />
                    ONLY MAKE PAYMENTS TO THE OFFICIAL COMPANY ACCOUNT ABOVE
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <FormNavigation 
              onPrev={onPrev} 
              onNext={onNext} 
              showPrev={true}        
              isNextDisabled={false} 
              nextLabel="Next"
            />
          </ScrollReveal>
        </main>
        
        <div className="my-5 text-center">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 Swift Recov. All rights reserved.
            <span className="block md:inline"> Lagos, Nigeria.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;