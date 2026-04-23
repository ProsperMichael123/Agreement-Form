import React, { useState } from 'react';
import FormNavigation from '../specialFunction/FormNavigation';
import Header from '../specialFunction/Header';
import ScrollReveal from '../specialFunction/ScrollReveal';
import { 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  AlertTriangle, 
  Gavel, 
  Lock, 
  PenTool, 
  ChevronRight,
  Info,
  UserCheck,
  Check,
  Globe,
  Scale,
  FileText
} from 'lucide-react';

const Page3 = ({ onNext, onPrev }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F4F8] font-sans text-slate-800 p-3 md:p-8 pt-20 md:pt-24">
      
      <Header />
      
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        
        <main className="p-5 md:p-12 lg:p-16 text-start">
          
          <ScrollReveal>
            <h3 className="text-xl md:text-2xl font-black mb-8 border-l-4 border-orange-500 pl-6 text-start ">
              4. Delivery Terms
            </h3>
          </ScrollReveal>

          {/* Delivery Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 bg-[#1a3455] text-white rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-lg">
              <div className="flex-1 p-8 md:p-10 lg:p-12">
                <ScrollReveal delay={0.2}><Globe className="w-8 h-8 text-blue-400 mb-6" /></ScrollReveal>
                <ScrollReveal delay={0.3}><h3 className="font-bold text-xl md:text-2xl mb-4 tracking-tight">Agent Selection</h3></ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    Goods can be taken to any agent of the client’s or supplier’s choice for delivery.
                    Delivery destinations include but are not limited to Ghana, Liberia, Gabon,
                    Cameroon, Sierra Leone, etc.
                  </p>
                </ScrollReveal>
              </div>
              <div className="hidden md:block w-1/3 bg-slate-800 relative">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" alt="Logistics" className="h-full w-full object-cover opacity-50" />
              </div>
            </div>

            <div className="h-full">
              <ScrollReveal delay={0.4} className="h-full">
                <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 h-full flex flex-col justify-center">
                  <Scale className="w-8 h-8 text-slate-800 mb-6" />
                  <h3 className="font-bold text-xl mb-4 tracking-tight">Responsibility</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    The client/buyer must choose the delivery agent and make full payment for delivery of goods.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <hr className="border-slate-100 mb-12" />

          {/* Dispatch Conditions */}
          <div className="max-w-4xl mx-auto mb-16">
            <ScrollReveal>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.4em] mb-4 text-center">Protocol // Logistics</p>
              <h3 className="text-xl md:text-2xl font-black mb-10 tracking-widest uppercase text-center text-[#1A2B42]">Dispatch Conditions</h3>
            </ScrollReveal>
            <div className="space-y-4 md:space-y-6 mb-16">
              {[
                "There must be confirmation from the customer to the supplier before goods can be dispatched.",
                "The supplier must sign a release document when goods are collected by Swift Recov for escort/delivery.",
                "All collection and movement of goods involving Swift Recov must be communicated to and approved by the customer before delivery."
              ].map((text, idx) => (
                <ScrollReveal key={idx} delay={0.2 * idx}>
                  <div className="flex items-start gap-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-slate-900 p-3 rounded-xl shadow-inner shrink-0"><FileText className="w-5 h-5 text-white" /></div>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Section 5: General Terms & Conditions (DIVIDED INTO CARDS) */}
          <section className="mb-20">
            <ScrollReveal>
              <div className="text-start border-l-4 border-orange-500 pl-6 mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#1A2B42] uppercase tracking-tighter text-start">5. General Terms & Conditions</h2>
                
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Liability Card */}
              <ScrollReveal delay={0.1}>
                <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="text-lg font-black text-[#1A2B42] uppercase mb-4 tracking-tight">Liability</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Swift Recov’s liability is limited to fees paid for the specific service. We are not liable for indirect losses, delays by third parties, supplier insolvency, or actions of independent delivery agents. Swift Recov is not liable for transactions conducted directly between clients and suppliers without our contracted services.
                  </p>
                </div>
              </ScrollReveal>

              {/* Confidentiality Card */}
              <ScrollReveal delay={0.2}>
                <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Lock className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-black text-[#1A2B42] uppercase mb-4 tracking-tight">Confidentiality</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    All subscriber information, documents, and transaction details will remain strictly confidential and used only for service execution. Privacy is protected under our standard data protocol.
                  </p>
                </div>
              </ScrollReveal>

              {/* Non-Circumvention Card */}
              <ScrollReveal delay={0.3}>
                <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h4 className="text-lg font-black text-[#1A2B42] uppercase mb-4 tracking-tight">Non-Circumvention</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Suppliers agree not to bypass Swift Recov when a Client requests our services. Clients agree not to use Swift Recov verification to then bypass us for recovery/escort without payment.
                  </p>
                </div>
              </ScrollReveal>

              {/* Dispute Resolution Card */}
              <ScrollReveal delay={0.4}>
                <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Gavel className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="text-lg font-black text-[#1A2B42] uppercase mb-4 tracking-tight">Dispute Resolution</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Any disputes will first attempt mediation. If unresolved, disputes will be settled by arbitration in Lagos, Nigeria, under the Arbitration and Conciliation Act.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Section 6: Subscriber Authorization */}
          <section className="max-w-5xl mx-auto border-2 border-dashed border-slate-200 rounded-[2.5rem] p-6 md:p-12 lg:p-16 bg-white mb-12">
            <ScrollReveal delay={0.2}>
              <div className="text-start border-l-4 border-orange-500 pl-4 mb-10">
                <PenTool className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h2 className="text-xl md:text-2xl font-black text-[#1A2B42] uppercase tracking-widest">6. Subscriber Authorization</h2>
              </div>
              <div className="space-y-6 text-sm md:text-base text-slate-700 leading-relaxed mb-12">
                <div className="flex gap-5 items-start">
                  <div className="w-1.5 h-6 rounded-full bg-blue-500 mt-1" />
                  <p><strong>Declaration:</strong> I, the subscriber, authorize Swift Recov to act on my behalf for the services applicable to my subscriber type as listed above.</p>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-1.5 h-6 rounded-full bg-blue-500 mt-1" />
                  <p><strong>Confirmation:</strong> I confirm that all instructions and information provided are accurate and complete to the best of my knowledge.</p>
                </div>
              </div>

              <div className="mt-12 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-600 font-bold uppercase text-[10px] md:text-xs"><UserCheck className="w-5 h-5" /> Client Role</div>
                    <p className="text-[12px] md:text-sm leading-relaxed text-slate-500 italic">I understand that suppliers marketing in the group are verified by Swift Recov. I understand that orders placed directly with suppliers are private transactions between me and the supplier.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-600 font-bold uppercase text-[10px] md:text-xs"><UserCheck className="w-5 h-5" /> Supplier Role</div>
                    <p className="text-[12px] md:text-sm leading-relaxed text-slate-500 italic">I understand I must be verified to market in the group. I agree to the once-per-week rule and the 20 maximum products per marketing session.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center md:items-start">
                <label className="flex items-center mb-10 gap-4 cursor-pointer group p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <input type="checkbox" className="w-6 h-6 accent-[#1A2B42] cursor-pointer" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                  <span className="text-sm md:text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">I agree to the terms and conditions</span>
                </label>
                <div className="w-full">
                  <FormNavigation onNext={onNext} onPrev={onPrev} isNextDisabled={!agreed} />
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        <div className="pb-12 text-center px-4">
          <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">
            © 2026 Swift Recov. All rights reserved. <span className="mx-3 opacity-30">|</span> Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;