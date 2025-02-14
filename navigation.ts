import { Home, Stethoscope, Pill, BookOpen, FileText, MessageSquare, Info, Phone, Activity, Brain } from 'lucide-react';

export interface NavItem {
  id: string;
  name: string;
  icon: any;
  dropdown?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { id: 'home', name: 'Home', icon: Home },
  { 
    id: 'health', 
    name: 'Health Services', 
    icon: Activity,
    dropdown: [
      { id: 'symptoms', name: 'Symptom Analyzer', icon: Stethoscope },
      { id: 'drugs', name: 'Drug Interactions', icon: Pill },
      { id: 'terms', name: 'Medical Terms', icon: BookOpen },
    ]
  },
  { id: 'chat', name: 'Chat Assistant', icon: MessageSquare },
  { 
    id: 'services', 
    name: 'Services', 
    icon: Brain,
    dropdown: [
      { id: 'reports', name: 'Report Summarizer', icon: FileText },
      { id: 'emergency', name: 'Emergency Contacts', icon: Phone },
    ]
  },
  { id: 'about', name: 'About', icon: Info },
];