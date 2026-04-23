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
  // Logic to control the "Next" button
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F4F8] font-sans text-slate-800 p-3 md:p-8 pt-20 md:pt-24">
      
      <Header />
      
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        
        <main className="p-5 md:p-12 text-start">
          
          {/* Section 3: WhatsApp Group & Marketing Terms */}
          <section className="mb-16">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8 border-l-4 border-orange-500 pl-6">
                <h2 className="text-3xl font-black text-[#1A2B42] uppercase tracking-tight">
                  3. WhatsApp Group & <br className="hidden md:block" /> Marketing Terms
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <ScrollReveal delay={0.1}>
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Network Management</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Official Group:</strong> Swift Recov will create and manage an official WhatsApp group with verified clients and verified suppliers.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed mt-3">
                      <strong>Verified Suppliers Only:</strong> Only suppliers who have paid the Supplier Verification Fee and been approved by Swift Recov will be allowed to market goods in the group.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed mt-3">
                      <strong>Market Frequency:</strong> Once per week, on any day of their choice. No fixed day will be assigned by Swift Recov.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed mt-3">
                      <strong>Product Limit:</strong> Minimum of 1 product and a maximum of 10 to 20 products per marketing session. Posting above 20 products is prohibited.
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <div className="p-5 bg-[#1A2B42] rounded-xl border border-slate-100 h-full">
                    <h4 className="text-xs font-bold text-slate-300 uppercase mb-2">Communication</h4>
                    <p className="text-sm text-white leading-relaxed italic">
                      <strong>Visibility:</strong> All clients and suppliers in the group will be able to view goods posted by verified suppliers.
                    </p>
                    <p className="text-sm text-white leading-relaxed mt-3">
                      <strong>Direct Orders:</strong> Clients are permitted to contact suppliers directly via inbox/private message to request goods or place orders. Communication and negotiation between client and supplier is handled directly between both parties.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="flex flex-col gap-4">
                <ScrollReveal delay={0.4}>
                  <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 flex items-start gap-4 h-full">
                    <ShieldCheck className="w-6 h-6 text-orange-600 shrink-0" />
                    <p className="text-sm text-orange-900 leading-relaxed">
                      <strong>Swift Recov Involvement:</strong> Swift Recov will only intervene in a client-supplier transaction when either party specifically requests and pays for our verification, payment confirmation, recovery, or escort services. If no request is made, Swift Recov is not part of the transaction.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="flex gap-3 text-red-400 bg-slate-900 p-5 rounded-xl border border-red-900/20">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    <p className="text-sm leading-relaxed">
                      <strong>Conduct:</strong> No spamming, unsolicited DMs, or unapproved suppliers. Violators will be removed and banned.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          <ScrollReveal>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-center border-b pb-4 border-slate-100">4. Delivery Terms</h3>
          </ScrollReveal>

          {/* Delivery Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
            
            {/* Agent Selection */}
            <div className="md:col-span-2 bg-[#1A2B42] text-white rounded-xl flex overflow-hidden shadow-sm">
              <div className="flex-1 p-8">
                <ScrollReveal delay={0.2}>
                  <Globe className="w-8 h-8 text-blue-400 mb-4" />
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <h3 className="font-bold text-xl mb-3">Agent Selection</h3>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Goods can be taken to any agent of the client’s or supplier’s choice for delivery.
                    Delivery destinations include but are not limited to Ghana, Liberia, Gabon,
                    Cameroon, Sierra Leone, etc.
                  </p>
                </ScrollReveal>
              </div>

              <div className="hidden md:block w-1/3 bg-slate-800 relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400"
                  alt="Logistics"
                  className="h-full w-full object-cover opacity-50"
                />
              </div>
            </div>

            {/* Responsibility Card */}
            <div className="h-full">
              <ScrollReveal delay={0.4} className="h-full">
                <div className="bg-slate-100 p-8 rounded-xl border border-slate-200 h-full">
                  <Scale className="w-8 h-8 text-slate-800 mb-6" />
                  <h3 className="font-bold text-xl mb-4">Responsibility</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The client/buyer must choose the delivery agent and make full payment for delivery of goods.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <hr className="border-slate-100 mb-6" />

          {/* Dispatch Conditions */}
          <div className="max-w-3xl mx-auto mb-18">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Protocol // Logistics</p>
              <h3 className="text-xl font-bold mb-10 tracking-widest uppercase text-center">Dispatch Conditions</h3>
            </ScrollReveal>
            
            <div className="space-y-4 mb-16">
              {[
                "There must be confirmation from the customer to the supplier before goods can be dispatched.",
                "The supplier must sign a release document when goods are collected by Swift Recov for escort/delivery.",
                "All collection and movement of goods involving Swift Recov must be communicated to and approved by the customer before delivery."
              ].map((text, idx) => (
                <ScrollReveal key={idx} delay={0.2 * idx}>
                  <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <div className="bg-white p-2 rounded-md shadow-sm border border-slate-200 shrink-0">
                      <FileText className="w-5 h-5 text-slate-800" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      {text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Section 5: General Terms & Conditions */}
          <section className="mb-16">
            <ScrollReveal>
              <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
                <h2 className="text-3xl text-white mb-8 border-b border-slate-700 pb-4 uppercase tracking-tighter font-bold">5. General Terms and Conditions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-400 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2 uppercase text-sm">Liability</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Swift Recov’s liability is limited to fees paid for the specific service. We are not liable for indirect losses, delays by third parties, supplier insolvency, or actions of independent delivery agents. Swift Recov is not liable for transactions conducted directly between clients and suppliers without our contracted services.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lock className="w-8 h-8 text-blue-400 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2 uppercase text-sm">Confidentiality</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">All subscriber information, documents, and transaction details will remain strictly confidential and used only for service execution.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lock className="w-8 h-8 text-blue-400 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2 uppercase text-sm">Non-Circumvention</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Suppliers agree not to bypass Swift Recov when a Client requests our services. Clients agree not to use Swift Recov verification to then bypass us for recovery/escort without payment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Gavel className="w-8 h-8 text-purple-400 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2 uppercase text-sm">Dispute Resolution</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Any disputes will first attempt mediation. If unresolved, disputes will be settled by arbitration in Lagos, Nigeria, under the Arbitration and Conciliation Act.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Section 6: Subscriber Authorization */}
          <section className="max-w-4xl mx-auto border-2 border-dashed border-slate-200 rounded-3xl p-6 md:p-12 bg-white mb-12">
            <ScrollReveal delay={0.2}>
              <div className="text-center mb-10">
                <PenTool className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                <h2 className="text-2xl font-black text-[#1A2B42] uppercase tracking-widest">6. Subscriber Authorization</h2>
              </div>
              
              <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-blue-500" />
                  <p><strong>Declaration:</strong> I, the subscriber, authorize Swift Recov to act on my behalf for the services applicable to my subscriber type as listed above.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-blue-500" />
                  <p><strong>Confirmation:</strong> I confirm that all instructions and information provided are accurate and complete to the best of my knowledge.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-blue-500" />
                  <p><strong>WhatsApp Group Consent:</strong> I consent to being added to the official group.</p>
                </div>

                <div className="mt-12 bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-[#1A2B42] mb-8 uppercase tracking-widest text-center text-xs">Terms Acknowledgment</h4>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-[10px]">
                        <UserCheck className="w-4 h-4" /> Client Role
                      </div>
                      <p className="text-[11px] leading-loose text-slate-500">
                        I understand that suppliers marketing in the group are verified by Swift Recov. I understand that orders placed directly with suppliers are private transactions between me and the supplier. Swift Recov will only be involved when I specifically request and pay for recovery, verification, or escort services.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-[10px]">
                        <UserCheck className="w-4 h-4" /> Supplier Role
                      </div>
                      <p className="text-[11px] leading-loose text-slate-500">
                        I understand I must be verified to market in the group. I agree to the once-per-week rule on any day of my choice, and the 1 minimum to 20 maximum products per marketing session. I understand Swift Recov only intervenes in my sales when requested and paid for by either party.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-start">
                <label className="flex items-center mb-8 gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 accent-[#1A2B42] cursor-pointer"
                    checked={agreed} 
                    onChange={(e) => setAgreed(e.target.checked)} 
                  />
                  <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">I agree to the terms and conditions</span>
                </label>

                <FormNavigation 
                  onNext={onNext} 
                  onPrev={onPrev} 
                  isNextDisabled={!agreed} 
                />
              </div>
            </ScrollReveal>
          </section>
        </main>

        {/* Footer */}
        <div className="pb-10 text-center px-4">
          <p className="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-widest whitespace-nowrap">
            © 2026 Swift Recov. All rights reserved. <span className="mx-2">|</span> Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;