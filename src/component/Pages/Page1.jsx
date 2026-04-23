import React from 'react';
import FormNavigation from '../specialFunction/FormNavigation';
import Header from '../specialFunction/Header';
import ScrollReveal from '../specialFunction/ScrollReveal'; 
import { 
  Truck, 
  Scale, 
  ShieldCheck, 
  Box, 
  Search, 
  Menu, 
  Bell, 
  CheckCircle2, 
  Globe, 
  FileText, 
  Receipt, 
  CheckCircle, 
  CalendarClock,
  Info,
  ShieldAlert
} from 'lucide-react';

const Page1 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-[#F1F4F8] font-sans text-slate-800 p-4 md:p-8 pt-20 md:pt-24">
        
      <Header />  

      <div className="max-w-2xl md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        
        <main className="p-4 pt-10 md:p-10 lg:p-14 text-start">
          
          {/* Hero Section */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
              <div className="flex-1 ">
                <div className='border-l-4 border-orange-500 pl-6'>
                  <p className="text-xs md:text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Official Documentation</p> 
                  <h2 className="text-3xl md:text-4xl font-black text-[#1c4886] leading-tight mb-6"> SERVICE <br/> AGREEMENT</h2>
                </div>
                <div className="space-y-4 text-slate-600 max-w-xl leading-relaxed md:text-lg">
                  <p>
                    <strong className="text-blue-900">For Clients:</strong> Recovery of goods/monies, supplier verification, tracking, payment confirmation, escort to supplier, and delivery coordination.
                  </p>
                  <p>
                    <strong className="text-blue-900">For Suppliers:</strong> Verification and onboarding into Swift Recov network, access to market goods in official WhatsApp group, credibility backing, and optional escort/payment confirmation services for your buyers.
                  </p>
                </div>
              </div>

              {/* Unit Headquarters Info Card */}
              <div className="bg-slate-50 p-6 md:p-8 rounded-xl w-full md:w-96 text-sm md:text-base border border-slate-100"> 
                  <section className="mb-6 text-black"> 
                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-slate-400"> 
                      Organization 
                    </h4> 
                    <p className="text-2xl md:text-3xl font-bold uppercase text-[#1c4886]"> 
                      SWIFT RECOV 
                    </p> 
                    <p className="font-bold uppercase text-slate-700 md:text-lg"> 
                      Recovery and Return unit 
                    </p> 
                    <div className="mt-2 text-slate-500 leading-snug">
                      <p className="font-semibold italic"> 
                        Goods & Money Recovery | Tracking | Delivery 
                      </p> 
                      <p className="font-semibold"> 
                        Lagos, Nigeria 
                      </p> 
                    </div>
                  </section> 

                  <section className="text-slate-600"> 
                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 text-slate-400"> 
                      Direct Channels 
                    </h4> 
                    <p className="mb-1 text-xs md:text-sm"> 
                      Email: <span className="font-medium text-slate-800">afi.nwankwo@gmail.com</span> 
                    </p> 
                    <p className="mb-1 text-xs md:text-sm"> 
                      Tel: <span className="font-medium text-slate-800">08033076076</span> 
                    </p> 
                    <p className="text-xs md:text-sm"> 
                      WhatsApp: <span className="font-medium text-slate-800">08033076076</span> 
                    </p> 
                  </section> 
              </div>
            </div>
          </ScrollReveal>

          {/* Scope of Work Section */}
          <div className="mb-16">
            <ScrollReveal delay={0.2}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wider text-center border-b pb-4 border-slate-100">Scope of work</h3>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, text: "Verify supplier identity and transaction details" },
                { icon: Box, text: "Recover goods/monies on behalf of clients" },
                { icon: Truck, text: "Coordinate secure delivery to client or designated agent" },
                { icon: Search, text: "Create and manage dedicated WhatsApp group for updates, marketing, and coordination" },
                { icon: CheckCircle2, text: "Provide status updates at agreed intervals" }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="bg-white p-5 md:p-7 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4 h-full hover:border-orange-200 transition-colors">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-orange-500 shrink-0" />
                    <p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <ScrollReveal>
            <div className="mb-12 border-l-4 border-orange-500 pl-6">
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-orange-500 uppercase mb-2">Financial Protocol</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#1A2B42] leading-tight uppercase">
                2. Subscription & <br /> Service Fees
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Core Fees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Agreement Fee*/}
            <ScrollReveal delay={0.1}>
              <div className="group bg-indigo-50/30 border border-indigo-100 p-5 md:p-8 rounded-3xl hover:bg-indigo-50 transition-all duration-300 h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Receipt className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 md:text-xl">Agreement Signing Fee</h3>
                <p className="text-2xl md:text-3xl font-black text-indigo-900 mb-4">₦10,000</p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Signing of this Service Agreement Form attracts a fixed fee of ₦10,000. This fee is payable by both clients and suppliers before commencement of any service. The agreement becomes active only after payment confirmation.
                </p>
              </div>
            </ScrollReveal>
          
            {/* Verification Fee */}
            <ScrollReveal delay={0.2}>
              <div className="group bg-emerald-50/30 border border-emerald-100 p-5 md:p-8 rounded-3xl hover:bg-emerald-50 transition-all duration-300 h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 md:text-xl">Supplier Verification Fee</h3>
                <p className="text-2xl md:text-3xl font-black text-emerald-900 mb-4">₦10,000</p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  One-time verification and onboarding fee of ₦10,000 for suppliers to be approved to market in the WhatsApp group. if supplier also wants client services.
                </p>
              </div>
            </ScrollReveal>
          
            {/* Daily Service Fee */}
            <ScrollReveal delay={0.3}>
              <div className="group bg-violet-50/30 border border-violet-100 p-5 md:p-8 rounded-3xl hover:bg-violet-50 transition-all duration-300 h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-violet-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <CalendarClock className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 md:text-xl">Daily Service Fee</h3>
                <p className="text-2xl md:text-3xl font-black text-violet-900 mb-4">₦25,000 <span className="text-sm md:text-base font-medium text-violet-400">/ day</span></p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Daily service for supplier verification, goods confirmation, or payment confirmation within Lagos or any state in Nigeria is ₦25,000 per day. This fee is exclusive of delivery of items/goods.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Delivery & Payment Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">

            {/* LEFT CARD - Delivery */}
            <ScrollReveal delay={0.2}>
              <div className="h-full flex flex-col">
                <h4 className="font-bold flex items-center gap-2 text-[#1A2B42] mb-4 ml-2 md:text-xl">
                  <div className="p-1.5 md:p-2 bg-orange-100 rounded-lg">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  </div>
                  DELIVERY CHARGES
                </h4>

                <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/60 flex-1">
                  <ul className="space-y-5 text-sm md:text-base text-slate-600">
                    <li className="flex gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-900 flex-shrink-0 flex items-center justify-center text-[10px] md:text-xs text-white">1</div>
                      <p className="leading-relaxed">Delivery fees within Lagos or to any movement location will be determined directly between the client/supplier and the assigned agent.</p>
                    </li>

                    <li className="flex gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-900 flex-shrink-0 flex items-center justify-center text-[10px] md:text-xs text-white">2</div>
                      <p className="leading-relaxed">All delivery payments are to be made by the customer/buyer.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT CARD - Rules */}
            <ScrollReveal delay={0.4}>
              <div className="h-full flex flex-col">
                <h4 className="font-bold flex items-center gap-2 text-[#1A2B42] mb-4 ml-2 md:text-xl">
                  <div className="p-1.5 md:p-2 bg-blue-100 rounded-lg">
                    <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  PAYMENT SCHEDULE & RULES
                </h4>

                <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/60 flex-1">
                  <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                    Fees for agreement signing, supplier verification, police tracking, and daily services are due before commencement of work unless otherwise agreed in writing.
                  </p>

                  <div className="flex items-start gap-4 bg-white p-4 md:p-6 rounded-2xl border border-orange-100 shadow-sm">
                    <ShieldAlert className="w-5 h-5 md:w-6 md:h-6 text-orange-600 shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-bold text-slate-700 leading-normal">
                      Subscriber must always send payment receipt for confirmation before service begins.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Navigation controls */}
          <ScrollReveal delay={0.5}>
            <FormNavigation 
              onNext={onNext} 
              showPrev={false} 
              isNextDisabled={false} 
            />
          </ScrollReveal>
        </main>

        {/* Footer */}
        <div className="my-8 text-center">
          <p className="text-xs md:text-sm text-slate-400 font-medium">
            © 2026 Swift Recov. All rights reserved.
            <span className="block md:inline"> Lagos, Nigeria.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page1;