// Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  type?: 'text' | 'email' | 'password';
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export interface SelectProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  onClick?: () => void;
}

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

// Section Types
export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  id: number;
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}