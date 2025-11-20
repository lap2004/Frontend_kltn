import React from 'react';
import { Screen } from '../../types';

interface AdminLoginProps {
  navigate: (screen: Screen) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ navigate }) => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(Screen.AdminDashboard);
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row bg-background-light dark:bg-background-dark font-display">
        {/* Left Panel (Image) */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-[#E0F7FA] p-8 lg:p-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="w-full max-w-lg z-10">
                <div className="aspect-square w-full rounded-3xl bg-center bg-no-repeat bg-cover shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEO4KzLvmNGwZEQ5TY9Lc-IWEkRr-yOoZYEhPMcaO7jRft-JIdVUwkhkx5pVcareKwGcRSAoQT84cDPplBrLBWOWw51q_M-ang1b4ONih7qAlY-FIfoxe1bfaPsAbAHNlXsO4sipbnJfN8UoK9IiGVO4r53C7mgab-VGL6KKT-RH5uzVPfXre3JmoEZEU_qZ5uQp27ARGlXMGn4vO4uiNMISnDgPNQTGrjscXFa9EqMDozRNQsZYV6shluXgXVbtjBOnx9F-3xKQ0")'}}>
                </div>
            </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="flex w-full md:w-1/2 flex-col items-center justify-center bg-white dark:bg-background-dark p-8 lg:p-16">
            <div className="w-full max-w-sm flex flex-col">
                {/* Back Button */}
                <button onClick={() => navigate(Screen.Landing)} className="self-start mb-8 flex items-center text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span>
                    Back
                </button>

                {/* Logo */}
                <div className="flex items-center justify-center gap-3 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 text-primary-dark">
                        <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                    </div>
                    <span className="text-2xl font-bold text-slate-800 dark:text-white">MediBot</span>
                </div>

                <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight text-center pb-2 pt-4">
                    Admin Portal
                </h1>
                <p className="text-center text-slate-500 dark:text-slate-400 pb-8">
                    Welcome back, please log in to your account.
                </p>

                <form onSubmit={handleLogin} className="flex w-full flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-2">Email Address</label>
                        <input 
                            type="email"
                            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 px-4 text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-2">Password</label>
                        <div className="relative flex w-full">
                            <input 
                                type="password"
                                className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 px-4 pr-12 text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                                placeholder="Enter your password"
                            />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <span className="material-symbols-outlined">visibility</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark">Forgot Password?</a>
                    </div>

                    <button type="submit" className="flex items-center justify-center rounded-lg h-12 px-6 text-base font-bold text-white bg-primary hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all mt-2">
                        Log In
                    </button>
                </form>

                <div className="pt-12 text-center">
                    <p className="text-xs text-slate-400">© 2024 MediBot. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  );
};
