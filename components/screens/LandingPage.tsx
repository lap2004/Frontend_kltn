import React, { useState, useEffect } from 'react';
import { Screen } from '../../types';

interface LandingPageProps {
  navigate: (screen: Screen) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ navigate }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Simple animation effect for chat window on mount/open
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    if (isChatOpen) {
      setTimeout(() => setChatVisible(true), 50);
    } else {
      setChatVisible(false);
    }
  }, [isChatOpen]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background-light/80 backdrop-blur-sm dark:border-slate-800/80 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate(Screen.Landing)}>
            <span className="material-symbols-outlined text-primary text-4xl">health_and_safety</span>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">MediBot</h2>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <button className="text-sm font-medium hover:text-primary text-slate-600 dark:text-slate-300">About</button>
            <button onClick={() => navigate(Screen.ChatInterface)} className="text-sm font-medium hover:text-primary text-slate-600 dark:text-slate-300">AI Chat</button>
            <button onClick={() => navigate(Screen.ContactUs)} className="text-sm font-medium hover:text-primary text-slate-600 dark:text-slate-300">Contact</button>
          </nav>
          <div className="flex gap-3">
            <button onClick={() => navigate(Screen.AdminLogin)} className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
              <span className="truncate">Admin</span>
            </button>
            <button onClick={() => navigate(Screen.ChatInterface)} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-sm">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2 lg:gap-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
                    Your Friendly Health Assistant, <span className="text-primary">Available Anytime</span>
                  </h1>
                  <h2 className="text-lg font-normal text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                    Get instant answers to your health questions from our advanced AI-powered medical chatbot. Secure, private, and always here for you.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button onClick={() => navigate(Screen.ChatInterface)} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold tracking-wide hover:bg-primary-dark transition-all shadow-lg shadow-primary/25">
                    Ask a Question
                    </button>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-lg font-bold tracking-wide hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                    Learn More
                    </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-square w-full rounded-2xl bg-cover bg-center bg-no-repeat shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out" 
                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbken1QPe3wVQqyKsQM-LIjfeIfNLKYma1Gh5yhboZGnuN5onOMJhwr-oI8Dnthnyag1uogf7hRmKVnmhUPz2_bqoVstnm0MChq6pvFdNzkm8y84sVEietzPQLcBvtxvYJGJIwlq0I-M12daLCC6qp-w42fSha5cfYFKj1wVPHxqVHpdGxeZaapHQJwoGfv5Yi2M3rPtqPSj7U4ZCQCPUXlud1m8lQwKeaZkEdLsBxQoHT4O3OvDeWlZHqvk49I0CxWCsq4C9V04Y")'}}>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-100/50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-slate-900 dark:text-white">How We Can Help You</h2>
                <p className="mx-auto max-w-2xl text-base font-normal text-slate-600 dark:text-slate-400">
                  Our AI-powered chatbot is designed to provide you with quick, reliable health information whenever you need it.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-slate-800 dark:bg-background-dark">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30 text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">stethoscope</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Instant Symptom Analysis</h3>
                    <p className="text-slate-600 dark:text-slate-400">Describe your symptoms in plain language and get instant, helpful information about potential causes.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-slate-800 dark:bg-background-dark">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30 text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">shield_lock</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Confidential & Secure</h3>
                    <p className="text-slate-600 dark:text-slate-400">Your conversations are completely private, encrypted, and protected with the highest security standards.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-slate-800 dark:bg-background-dark">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30 text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">local_hospital</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Find Local Clinics</h3>
                    <p className="text-slate-600 dark:text-slate-400">Need professional help? We can assist you in locating nearby medical facilities and specialists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
             <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">MediBot</h2>
                </div>
                <p className="text-slate-500 dark:text-slate-400 max-w-xs">
                    Empowering you with health knowledge through advanced AI technology.
                </p>
             </div>
             <div>
                 <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
                 <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                     <li><button onClick={() => navigate(Screen.Landing)} className="hover:text-primary">Home</button></li>
                     <li><button className="hover:text-primary">About Us</button></li>
                     <li><button onClick={() => navigate(Screen.ChatInterface)} className="hover:text-primary">Chat AI</button></li>
                     <li><button onClick={() => navigate(Screen.ContactUs)} className="hover:text-primary">Contact</button></li>
                 </ul>
             </div>
             <div>
                 <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
                 <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                     <li><button className="hover:text-primary">Privacy Policy</button></li>
                     <li><button className="hover:text-primary">Terms of Service</button></li>
                     <li><button className="hover:text-primary">Cookie Policy</button></li>
                 </ul>
             </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Disclaimer: This chatbot is for informational purposes only and does not replace professional medical advice. Always consult a doctor for medical issues.
            </p>
            <p className="mt-4 text-xs text-slate-400">© 2024 MediBot. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <div className="fixed inset-0 z-[9998] pointer-events-none flex items-end justify-end sm:p-6">
        {/* Chat Window */}
        <div 
          className={`pointer-events-auto origin-bottom-right flex flex-col overflow-hidden bg-white dark:bg-slate-800 shadow-2xl w-full h-[100dvh] sm:h-[600px] sm:w-[380px] sm:rounded-2xl transition-all duration-300 ease-out transform ${isChatOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}
          style={{ visibility: isChatOpen ? 'visible' : 'hidden' }}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700 bg-gradient-to-r from-primary to-secondary p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                <span className="material-symbols-outlined text-white">smart_toy</span>
              </div>
              <div>
                <h3 className="font-bold">MediBot Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  <p className="text-xs opacity-90">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4 dark:bg-slate-900/50">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-lg">smart_toy</span>
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <p className="text-sm text-slate-800 dark:text-slate-200">Hello! How can I help you with your health today?</p>
              </div>
            </div>
            <div className="flex items-start justify-end gap-3">
                <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-primary p-3 text-white shadow-sm">
                    <p className="text-sm">I'm feeling a bit dizzy.</p>
                </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-slate-100 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
            <input 
              className="w-full rounded-full border-slate-200 bg-slate-100 px-4 py-2.5 text-sm placeholder-slate-500 focus:border-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400" 
              placeholder="Type your message..." 
              type="text"
            />
            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>

        {/* FAB */}
        {!isChatOpen && (
            <div className="pointer-events-auto fixed bottom-6 right-6 z-[9999]">
            <div className="group relative">
                <button 
                onClick={() => setIsChatOpen(true)}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-transform duration-200 hover:scale-110 hover:bg-primary-dark"
                >
                <span className="material-symbols-outlined text-4xl">support_agent</span>
                </button>
                <div className="absolute bottom-1/2 right-full mr-4 translate-y-1/2 scale-0 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                Chat with us
                <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-slate-800"></div>
                </div>
            </div>
            </div>
        )}
      </div>
    </div>
  );
};
