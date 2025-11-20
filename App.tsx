import React, { useState } from 'react';
import { Screen } from './types';
import { LandingPage } from './components/screens/LandingPage';
import { AdminLogin } from './components/screens/AdminLogin';
import { ChatInterface } from './components/screens/ChatInterface';
import { ContactUs } from './components/screens/ContactUs';
import { AdminDashboard } from './components/screens/AdminDashboard';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Landing);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Landing:
        return <LandingPage navigate={setCurrentScreen} />;
      case Screen.AdminLogin:
        return <AdminLogin navigate={setCurrentScreen} />;
      case Screen.ChatInterface:
        return <ChatInterface navigate={setCurrentScreen} />;
      case Screen.ContactUs:
        return <ContactUs navigate={setCurrentScreen} />;
      case Screen.AdminDashboard:
        return <AdminDashboard navigate={setCurrentScreen} />;
      default:
        return <LandingPage navigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen w-full">
      {renderScreen()}
      
      {/* Dev Navigation Helper - Remove in production if needed */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-[10000] bg-black/80 text-white p-2 text-xs flex justify-center gap-4 backdrop-blur-md">
          <span>Dev Menu:</span>
          <button onClick={() => setCurrentScreen(Screen.Landing)} className="hover:text-primary hover:underline">Landing</button>
          <button onClick={() => setCurrentScreen(Screen.AdminLogin)} className="hover:text-primary hover:underline">Login</button>
          <button onClick={() => setCurrentScreen(Screen.ChatInterface)} className="hover:text-primary hover:underline">Chat</button>
          <button onClick={() => setCurrentScreen(Screen.ContactUs)} className="hover:text-primary hover:underline">Contact</button>
          <button onClick={() => setCurrentScreen(Screen.AdminDashboard)} className="hover:text-primary hover:underline">Admin</button>
      </div> */}
    </div>
  );
};

export default App;
