import React from 'react';
import { Screen } from '../../types';

interface ContactUsProps {
  navigate: (screen: Screen) => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ navigate }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display overflow-x-hidden">
      {/* Simple Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-background-dark">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate(Screen.Landing)}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-xl">health_and_safety</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Medical Chatbot</h2>
        </div>
        <button onClick={() => navigate(Screen.Landing)} className="text-sm font-medium text-slate-500 hover:text-primary">Back to Home</button>
      </header>

      <main className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    We're here to help. Send us a message and we'll get back to you shortly.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input type="text" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary dark:focus:ring-primary/50 transition-all outline-none focus:ring-2" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input type="email" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary dark:focus:ring-primary/50 transition-all outline-none focus:ring-2" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                            <input type="text" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary dark:focus:ring-primary/50 transition-all outline-none focus:ring-2" placeholder="How can we help?" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea rows={4} className="block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary dark:focus:ring-primary/50 transition-all outline-none focus:ring-2" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="button" className="w-full rounded-lg bg-primary py-3.5 px-6 text-base font-bold text-white hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all transform hover:scale-[1.02]">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Info & Map */}
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">email</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                                    <a href="mailto:support@medibot.com" className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">support@medibot.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
                                    <a href="tel:+1234567890" className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">+1 (234) 567-890</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Office</p>
                                    <p className="text-lg font-medium text-slate-900 dark:text-white">123 Health Street, Tech City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-72 w-full rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md relative">
                        {/* Static Map Image Placeholder */}
                         <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                        <img 
                            alt="Map location" 
                            className="h-full w-full object-cover relative z-10" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDidfknMub3vlNaevjvwiy8oR8ws8Q8xIapSg1XwOBg3yeZ-KzrMVWbKjf5j3_vwGjmNhPHv2TdMBXtynyH_6V6C40elJhqwLjJYJjzlPAj3Hdo09Q7oEZqrnvd6oD-nPB5aClUMY2Xvfuzq2BxlZaXCiISYsrVHKeENBtYD40JNxQZb7-aoLOsBFY7MXo0BJk_LJINYtlOhXlCY96y6E7gKsTpGZpJi9ayHw0q76JkLSIfut0SbrGluY1hrrCQTAZVtyKC1EhlVN8"
                        />
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};
