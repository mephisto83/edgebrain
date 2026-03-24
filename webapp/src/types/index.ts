export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  requests: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface DashboardStats {
  totalSpend: number;
  requestsToday: number;
  moneySaved: number;
  budgetRemaining: number;
  budgetLimit: number;
}

export interface Request {
  id: string;
  model: string;
  tokens: number;
  cost: number;
  utilityScore: number;
  timestamp: Date;
  endpoint?: string;
}

export interface WeeklySpending {
  day: string;
  spend: number;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: Date;
  lastUsed?: Date;
  isActive: boolean;
}

export interface BillingInfo {
  currentPlan: 'free' | 'pro' | 'enterprise';
  usagePercent: number;
  requestsUsed: number;
  requestsLimit: number;
  renewalDate: Date;
  nextInvoiceAmount: number;
}

export type ThemeMode = 'light' | 'dark' | 'system';
