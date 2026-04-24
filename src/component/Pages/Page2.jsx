import React from 'react';
import FormNavigation from '../specialFunction/FormNavigation';
import Header from '../specialFunction/Header';
import ScrollReveal from '../specialFunction/ScrollReveal';
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
  Info,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

const Page2 = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 p-3 md:p-8 pt-20 md:pt-24">

      <Header />

      {/* Container window */}
      <div className="max-w-2xl md:max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">

        <main className="p-4 md:p-10 lg:p-14 text-start">

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
                    <strong>Payment Schedule:</strong> Fees for agreement signing, supplier verification, police tracking, and daily services are due before commencement of work unless otherwise agreed in writing.
                  </p>
                  <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                    <strong>Payment Account</strong> All payments must be made to the company's designated account below:
                  </p>

                  <div className="flex items-start gap-4 bg-white p-4 md:p-6 rounded-2xl border border-orange-100 shadow-sm">
                    <ShieldAlert className="w-5 h-5 md:w-6 md:h-6 text-orange-600 shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-bold text-slate-700 leading-normal">
                      <strong>Payment Confirmation:</strong> Subscriber must always send payment receipt for confirmation before service begins.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Payment Account Details */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-2xl mx-auto mb-16">
              <h3 className="text-center font-black px-3 text-[#994209] mb-8 tracking-[0.3em] text-sm md:text-base uppercase">Official Payment Account</h3>
              <div className="group bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-black p-10 md:p-14 text-white relative">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Official Bank</p>
                      <p className="text-xl md:text-2xl font-black tracking-tight">UBA</p>
                    </div>
                    <div className="w-12 h-8 md:w-16 md:h-10 bg-orange-400/20 rounded-md border border-orange-400/30 flex items-center justify-center">
                      <div className="w-8 h-5 md:w-10 md:h-6 bg-orange-400/40 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="space-y-1 mb-10">
                    <p className="text-[8px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Account Name</p>
                    <p className="text-xl md:text-2xl font-bold tracking-tight">Nwankwo Regina Afi</p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Account Number</p>
                      <p className="text-xl md:text-2xl font-mono font-bold tracking-wider text-white">2014599017</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 text-start border-t border-slate-100">
                  <p className="text-[11px] md:text-sm text-slate-500 font-semibold flex items-center justify-center gap-3">
                    <ShieldAlert className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                    ONLY MAKE PAYMENTS TO THE OFFICIAL COMPANY ACCOUNT ABOVE
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 3: WhatsApp Group & Marketing Terms */}
          <section className="mb-16">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8 border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#1A2B42] uppercase tracking-tight">
                  3. WhatsApp Group & <br className="hidden md:block" /> Marketing Terms
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <div className="p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="text-xs md:text-sm font-bold text-slate-400 uppercase mb-4 tracking-widest">Network Management</h4>
                    <div className="space-y-4 md:space-y-6">
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        <strong className="text-[#1A2B42]">Official Group:</strong> Swift Recov will create and manage an official WhatsApp group with verified clients and verified suppliers.
                      </p>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        <strong className="text-[#1A2B42]">Verified Suppliers Only:</strong> Only suppliers who have paid the Supplier Verification Fee and been approved by Swift Recov will be allowed to market goods in the group.
                      </p>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        <strong className="text-[#1A2B42]">Market Frequency:</strong> Each verified supplier is permitted to market in the whatsapp group once per week,on anyday of their choice.No fixed day will be assigned by Swift Recov.
                      </p>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        <strong className="text-[#1A2B42]">Product Limit:</strong>To prevent flooding the group, each supplier must post Minimum of 1 product and a maximum of 10 to 20 products per marketing session. Posting above 20 products is prohibited.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="p-6 md:p-8 bg-[#1A2B42] rounded-2xl border border-slate-800 h-full">
                    <h4 className="text-xs md:text-sm font-bold text-slate-400 uppercase mb-4 tracking-widest">Communication</h4>
                    <p className="text-sm md:text-base text-white leading-relaxed italic opacity-90">
                      <strong>Visibility:</strong> All clients and suppliers in the group will be able to view goods posted by verified suppliers.
                    </p>
                    <p className="text-sm md:text-base text-white leading-relaxed mt-4 opacity-90">
                      <strong>Direct Orders:</strong> Clients are permitted to contact suppliers directly via inbox/private message to request goods or place orders. Communication and negotiation between client and supplier is handled directly between both parties.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="flex flex-col gap-6">
                <ScrollReveal delay={0.4}>
                  <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 flex items-start gap-5 h-full">
                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-orange-600 shrink-0" />
                    <div>
                      <p className="text-sm md:text-lg text-orange-900 leading-relaxed font-medium">
                        <strong>Swift Recov Involvement:</strong> Swift Recov will only intervene in a client-supplier transaction when either party specifically requests and pays for our verification, payment confirmation, recovery, or escort services. If no request is made, Swift Recov is not part of the transaction.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="flex gap-4 text-red-400 bg-slate-900 p-6 md:p-8 rounded-2xl border border-red-900/30">
                    <AlertTriangle className="w-6 h-6 shrink-0" />
                    <div>
                      
                      <p className="text-sm md:text-base leading-relaxed">
                        <strong>Group Conduct:</strong> No spamming, unsolicited DMs, or unapproved suppliers. Violators will be removed and banned from the group.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

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

        <div className="my-10 text-center">
          <p className="text-xs md:text-sm text-slate-400 font-medium">
            © 2026 Swift Recov. All rights reserved.
            <span className="block md:inline"> Lagos, Nigeria.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;