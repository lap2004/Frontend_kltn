import React from 'react';
import { Screen } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface AdminDashboardProps {
  navigate: (screen: Screen) => void;
}

const data = [
  { name: 'Mon', visits: 400 },
  { name: 'Tue', visits: 300 },
  { name: 'Wed', visits: 550 },
  { name: 'Thu', visits: 450 },
  { name: 'Fri', visits: 600 },
  { name: 'Sat', visits: 350 },
  { name: 'Sun', visits: 200 },
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ navigate }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark md:flex">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-100 dark:border-slate-800 cursor-pointer" onClick={() => navigate(Screen.Landing)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
             <span className="material-symbols-outlined text-xl">health_and_safety</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">MediBot Admin</h2>
        </div>
        
        <nav className="flex-1 space-y-1 px-3 py-6">
          <a href="#" className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            Overview
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors">
            <span className="material-symbols-outlined">group</span>
            User Management
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors">
            <span className="material-symbols-outlined">bar_chart</span>
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>

        <div className="border-t border-slate-100 dark:border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3">
            <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxQaMJsgM2A0f4lFxteBdMIcta5H-NOZylQE1FQTV-EnkximVcZq57L4eThILiJ95_teIVjedU8S6-NK4zuL2FtErq4k5ZUURfkZVso2Hfln-rpz6L3cPQRFGR1WUsQniDZPaLtNLJwBAXdpr0X-Cg9xwYtmwKSwZipJKRs9lq7aIZsq5ZxMvoIzcuuEO7eHy9TYQ4-S7ZfJ_2Zt7Mha7TfI-B8iBuKf9rcqH0T9NAk1lG8tOAsPy8Zw_wHma8gBaDG5rX7L-WBIA")'}}></div>
            <div className="overflow-hidden">
              <p className="truncate text-sm font-medium text-slate-900 dark:text-white">Dr. Evelyn Reed</p>
              <p className="truncate text-xs text-slate-500">Administrator</p>
            </div>
            <button className="ml-auto text-slate-400 hover:text-primary">
                <span className="material-symbols-outlined text-xl">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 z-10">
            <div className="flex items-center gap-4 md:hidden">
                 <button className="text-slate-500">
                     <span className="material-symbols-outlined">menu</span>
                 </button>
                 <h2 className="text-lg font-bold text-slate-900 dark:text-white">MediBot</h2>
            </div>
            <div className="hidden md:flex relative w-96">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
                <input type="text" className="h-10 w-full rounded-lg bg-slate-100 dark:bg-slate-800 border-none pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/20" placeholder="Search..." />
            </div>
            <div className="flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined">settings</span>
                </button>
                <div className="h-10 w-10 rounded-full bg-cover bg-center md:hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxQaMJsgM2A0f4lFxteBdMIcta5H-NOZylQE1FQTV-EnkximVcZq57L4eThILiJ95_teIVjedU8S6-NK4zuL2FtErq4k5ZUURfkZVso2Hfln-rpz6L3cPQRFGR1WUsQniDZPaLtNLJwBAXdpr0X-Cg9xwYtmwKSwZipJKRs9lq7aIZsq5ZxMvoIzcuuEO7eHy9TYQ4-S7ZfJ_2Zt7Mha7TfI-B8iBuKf9rcqH0T9NAk1lG8tOAsPy8Zw_wHma8gBaDG5rX7L-WBIA")'}}></div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-background-dark p-6 md:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Stats */}
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 mb-6">Welcome back, Dr. Reed! Here's a summary of the chatbot's activity.</p>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: 'Total Users', value: '1,482', change: '+5.2%', trend: 'up' },
                            { label: 'Total Visits', value: '5,923', change: '+8.1%', trend: 'up' },
                            { label: 'Messages Processed', value: '112,891', change: '+12.5%', trend: 'up' },
                            { label: 'Avg. Session', value: '4m 32s', change: '-1.8%', trend: 'down' }
                        ].map((stat, i) => (
                            <div key={i} className="rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
                                <p className={`mt-2 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                    {stat.change}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chart */}
                <div className="rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">Chatbot Activity (Last 7 Days)</h2>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                                <Tooltip 
                                    cursor={{fill: '#F1F5F9'}}
                                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                                />
                                <Bar dataKey="visits" radius={[4, 4, 0, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.name === 'Wed' ? '#30abe8' : '#93C5FD'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">User Management</h2>
                        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                            <span className="material-symbols-outlined text-lg">add</span>
                            Add User
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-700 dark:text-slate-300">
                                <tr>
                                    <th className="px-6 py-3">User ID</th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Registration Date</th>
                                    <th className="px-6 py-3">Last Active</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {[
                                    { id: '#1024', name: 'Alex Johnson', email: 'alex.j@example.com', date: '2023-10-26', active: '2023-11-15' },
                                    { id: '#1025', name: 'Maria Garcia', email: 'maria.g@example.com', date: '2023-10-22', active: '2023-11-14' },
                                    { id: '#1026', name: 'Chen Wei', email: 'chen.w@example.com', date: '2023-10-20', active: '2023-11-16' },
                                    { id: '#1027', name: 'Samira Ahmed', email: 'samira.a@example.com', date: '2023-10-18', active: '2023-11-12' },
                                ].map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{user.id}</td>
                                        <td className="px-6 py-4">{user.name}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.date}</td>
                                        <td className="px-6 py-4">{user.active}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="mr-4 font-medium text-primary hover:underline">Edit</button>
                                            <button className="font-medium text-red-500 hover:underline">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};
