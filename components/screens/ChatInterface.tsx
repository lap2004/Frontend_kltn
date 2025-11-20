import React, { useState, useRef, useEffect } from 'react';
import { Screen, ChatMessage } from '../../types';
import { sendMessageToGemini } from '../../services/geminiService';

interface ChatInterfaceProps {
  navigate: (screen: Screen) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ navigate }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hello! I'm your medical assistant. How can I help you today? Please note, I am not a substitute for professional medical advice.",
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Convert messages to history format for the service
    const history = messages.map(m => ({
      role: m.role,
      text: m.text
    }));

    const responseText = await sendMessageToGemini(input, history);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen w-full flex-col bg-white dark:bg-background-dark font-display">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background-dark z-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate(Screen.Landing)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">health_and_safety</span>
          </div>
          <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">Health Assistant</h1>
        </div>
        
        <nav className="hidden items-center gap-6 md:flex">
          <button onClick={() => navigate(Screen.Landing)} className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Home</button>
          <button className="text-sm font-medium text-primary dark:text-primary transition-colors">AI Chat</button>
          <button onClick={() => navigate(Screen.ContactUs)} className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Contact</button>
        </nav>

        <div className="flex items-center gap-2">
             <div className="h-9 w-9 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden border-2 border-white dark:border-slate-600 shadow-sm">
                 <span className="material-symbols-outlined text-gray-400 dark:text-gray-300">person</span>
             </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (History) - Hidden on mobile */}
        <aside className="hidden w-80 shrink-0 border-r border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-background-dark lg:flex lg:flex-col">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Chat History</h2>
            <button className="text-primary hover:bg-primary/10 rounded-full p-1 transition-colors">
                <span className="material-symbols-outlined text-xl">add</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-1">
             <button className="flex w-full items-center gap-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-3 text-left shadow-sm group hover:border-primary transition-all">
               <span className="material-symbols-outlined text-primary text-xl">chat_bubble</span>
               <div className="flex-1 min-w-0">
                 <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary">Common symptoms of flu</p>
                 <p className="text-xs text-slate-400 truncate">10:00 AM</p>
               </div>
             </button>
             <button className="flex w-full items-center gap-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-3 text-left transition-all text-slate-600 dark:text-slate-400">
               <span className="material-symbols-outlined text-slate-400 text-xl">chat_bubble_outline</span>
               <span className="truncate text-sm font-medium">Headache remedies</span>
             </button>
             <button className="flex w-full items-center gap-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-3 text-left transition-all text-slate-600 dark:text-slate-400">
               <span className="material-symbols-outlined text-slate-400 text-xl">chat_bubble_outline</span>
               <span className="truncate text-sm font-medium">Diet for diabetes</span>
             </button>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex flex-1 flex-col relative bg-white dark:bg-background-dark">
          {/* Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                {msg.role === 'model' && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-md">
                    <span className="material-symbols-outlined text-xl">health_and_safety</span>
                  </div>
                )}
                
                <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} gap-1 max-w-[80%] lg:max-w-[60%]`}>
                  <div 
                    className={`px-5 py-3.5 text-sm sm:text-base shadow-sm whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'rounded-2xl rounded-br-none bg-primary text-white' 
                        : 'rounded-2xl rounded-bl-none bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-400 px-1">
                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-white dark:border-slate-600 shadow-sm flex items-center justify-center">
                     <span className="material-symbols-outlined text-slate-400">person</span>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-end gap-3 animate-pulse">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                   <span className="material-symbols-outlined text-xl">health_and_safety</span>
                </div>
                <div className="rounded-2xl rounded-bl-none bg-slate-100 dark:bg-slate-800 px-5 py-4 dark:border-slate-700 border border-slate-200">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark p-4 sm:p-6">
            <div className="mx-auto max-w-3xl relative">
              <div className="relative flex items-end gap-2 rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-white dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-xl">add_circle</span>
                </button>
                <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    className="w-full resize-none bg-transparent py-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none max-h-32" 
                    placeholder="Type your health question here..." 
                    style={{ minHeight: '44px' }}
                />
                <div className="flex items-center pb-1 pr-1 gap-1">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-white dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-xl">mic</span>
                    </button>
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all ${(!input.trim() || isLoading) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark hover:scale-105'}`}
                    >
                        <span className="material-symbols-outlined text-xl">send</span>
                    </button>
                </div>
              </div>
              <p className="text-center text-[10px] sm:text-xs text-slate-400 mt-3">
                MediBot may produce inaccurate information about medical conditions. Always consult a professional.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
