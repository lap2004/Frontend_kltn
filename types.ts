export enum Screen {
  Landing = 'LANDING',
  AdminLogin = 'ADMIN_LOGIN',
  ChatInterface = 'CHAT_INTERFACE',
  ContactUs = 'CONTACT_US',
  AdminDashboard = 'ADMIN_DASHBOARD'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatarUrl?: string;
}
