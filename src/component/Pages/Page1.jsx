import React from 'react';
import FormNavigation from '../specialFunction/FormNavigation';
import Header from '../specialFunction/Header';
import ScrollReveal from '../specialFunction/ScrollReveal'; // Import the animation wrapper
import { Truck, Scale, ShieldCheck, Box, Search, Menu, Bell, CheckCircle2, Globe, FileText } from 'lucide-react';

const Page1 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-[#F1F4F8] font-sans text-slate-800 p-4 md:p-8 pt-20 md:pt-24">
        
      <Header />  

      <div className="max-w-2xl md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        
        <main className="p-3 pt-10 md:p-14 text-start">
          
          {/* Hero Section */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
              <div className="flex-1 ">
                <div className='border-l-4 border-orange-500 pl-6'>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Official Documentation</p> 
                  <h2 className="text-3xl md:text-4xl font-black text-[#1c4886] leading-tight mb-6"> SERVICE <br/> AGREEMENT</h2>
                </div>
                <div className="space-y-4 text-slate-600 max-w-xl leading-relaxed">
                  <p>
                    <strong className="text-blue-900">For Clients:</strong> Recovery of goods/monies, supplier verification, tracking, payment confirmation, escort to supplier, and delivery coordination.
                  </p>
                  <p>
                    <strong className="text-blue-900">For Suppliers:</strong> Verification and onboarding into Swift Recov network, access to market goods in official WhatsApp group, credibility backing, and optional escort/payment confirmation services for your buyers.
                  </p>
                </div>
              </div>

              {/* Unit Headquarters Info Card */}
              <div className="bg-slate-50 p-6 rounded-xl w-full md:w-80 text-sm border border-slate-100"> 
                  <section className="mb-6 text-black"> 
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1"> 
                      Organization 
                    </h4> 
                    <p className="text-2xl font-bold uppercase text-[#1c4886]"> 
                      SWIFT RECOV 
                    </p> 
                    <p className="font-bold uppercase text-slate-700"> 
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
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 text-slate-400"> 
                      Direct Channels 
                    </h4> 
                    <p className="mb-1 text-xs"> 
                      Email: <span className="font-medium text-slate-800">afi.nwankwo@gmail.com</span> 
                    </p> 
                    <p className="mb-1 text-xs"> 
                      Tel: <span className="font-medium text-slate-800">08033076076</span> 
                    </p> 
                    <p className="text-xs"> 
                      WhatsApp: <span className="font-medium text-slate-800">08033076076</span> 
                    </p> 
                  </section> 
              </div>
            </div>
          </ScrollReveal>

          {/* Scope of Work Section */}
          <div className="mb-16">
            <ScrollReveal delay={0.2}>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-wider text-center border-b pb-4 border-slate-100">Scope of work</h3>
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
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4 h-full hover:border-orange-200 transition-colors">
                    <item.icon className="w-6 h-6 text-orange-500 shrink-0" />
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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

export default Page1;