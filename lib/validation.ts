/**
 * Form Validation Library
 * Custom validation with no external dependencies
 */

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface MerchantOnboardingData {
  // Business Information
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessWebsite?: string;

  // NFT Configuration
  collectionName: string;
  collectionSymbol: string;
  supply: number;
  royaltyPercentage: number;
  creatorWallet: string;

  // Utility Configuration
  utilityType: 'DISCOUNT' | 'ACCESS' | 'SUBSCRIPTION' | 'LOYALTY';
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (US format)
 */
export function validatePhone(phone: string): boolean {
  // Remove all non-digits
  const digitsOnly = phone.replace(/\D/g, '');

  // Check if it's a valid US phone number (10 or 11 digits)
  return digitsOnly.length === 10 || digitsOnly.length === 11;
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Validate Solana wallet address
 */
export function validateSolanaAddress(address: string): boolean {
  // Solana addresses are base58 encoded and typically 32-44 characters
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return base58Regex.test(address);
}

/**
 * Validate NFT collection symbol (1-10 uppercase letters/numbers)
 */
export function validateSymbol(symbol: string): boolean {
  const symbolRegex = /^[A-Z0-9]{1,10}$/;
  return symbolRegex.test(symbol);
}

/**
 * Validate supply (1-10,000)
 */
export function validateSupply(supply: number): boolean {
  return Number.isInteger(supply) && supply >= 1 && supply <= 10000;
}

/**
 * Validate royalty percentage (0-20)
 */
export function validateRoyalty(percentage: number): boolean {
  return percentage >= 0 && percentage <= 20 && !isNaN(percentage);
}

/**
 * Comprehensive validation for merchant onboarding form
 */
export function validateMerchantOnboarding(
  data: MerchantOnboardingData
): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate full name
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  // Validate email
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  // Validate phone
  if (!data.phone) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(data.phone)) {
    errors.phone = 'Invalid phone number (use US format: 10 digits)';
  }

  // Validate business name
  if (!data.businessName || data.businessName.trim().length < 2) {
    errors.businessName = 'Business name must be at least 2 characters';
  }

  // Validate business website (optional)
  if (data.businessWebsite && !validateUrl(data.businessWebsite)) {
    errors.businessWebsite = 'Invalid URL format (must start with http:// or https://)';
  }

  // Validate collection name
  if (!data.collectionName || data.collectionName.trim().length < 3) {
    errors.collectionName = 'Collection name must be at least 3 characters';
  }

  // Validate collection symbol
  if (!data.collectionSymbol) {
    errors.collectionSymbol = 'Collection symbol is required';
  } else if (!validateSymbol(data.collectionSymbol)) {
    errors.collectionSymbol = 'Symbol must be 1-10 uppercase letters/numbers';
  }

  // Validate supply
  if (!data.supply) {
    errors.supply = 'Supply is required';
  } else if (!validateSupply(data.supply)) {
    errors.supply = 'Supply must be an integer between 1 and 10,000';
  }

  // Validate royalty percentage
  if (data.royaltyPercentage === undefined || data.royaltyPercentage === null) {
    errors.royaltyPercentage = 'Royalty percentage is required';
  } else if (!validateRoyalty(data.royaltyPercentage)) {
    errors.royaltyPercentage = 'Royalty must be between 0 and 20';
  }

  // Validate creator wallet
  if (!data.creatorWallet) {
    errors.creatorWallet = 'Creator wallet address is required';
  } else if (!validateSolanaAddress(data.creatorWallet)) {
    errors.creatorWallet = 'Invalid Solana wallet address';
  }

  // Validate utility type
  const validUtilityTypes = ['DISCOUNT', 'ACCESS', 'SUBSCRIPTION', 'LOYALTY'];
  if (!data.utilityType || !validUtilityTypes.includes(data.utilityType)) {
    errors.utilityType = 'Invalid utility type';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length === 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  } else if (digitsOnly.length === 11) {
    return `+${digitsOnly[0]} (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`;
  }

  return phone;
}

/**
 * Validate field in real-time (for UI feedback)
 */
export function validateField(
  fieldName: keyof MerchantOnboardingData,
  value: any
): string | null {
  switch (fieldName) {
    case 'fullName':
      return !value || value.trim().length < 2
        ? 'Full name must be at least 2 characters'
        : null;

    case 'email':
      if (!value) return 'Email is required';
      return !validateEmail(value) ? 'Invalid email format' : null;

    case 'phone':
      if (!value) return 'Phone number is required';
      return !validatePhone(value) ? 'Invalid phone number' : null;

    case 'businessName':
      return !value || value.trim().length < 2
        ? 'Business name must be at least 2 characters'
        : null;

    case 'businessWebsite':
      if (!value) return null; // Optional field
      return !validateUrl(value) ? 'Invalid URL format' : null;

    case 'collectionName':
      return !value || value.trim().length < 3
        ? 'Collection name must be at least 3 characters'
        : null;

    case 'collectionSymbol':
      if (!value) return 'Collection symbol is required';
      return !validateSymbol(value) ? 'Symbol must be 1-10 uppercase letters/numbers' : null;

    case 'supply':
      if (!value) return 'Supply is required';
      return !validateSupply(Number(value))
        ? 'Supply must be between 1 and 10,000'
        : null;

    case 'royaltyPercentage':
      if (value === undefined || value === null) return 'Royalty percentage is required';
      return !validateRoyalty(Number(value))
        ? 'Royalty must be between 0 and 20'
        : null;

    case 'creatorWallet':
      if (!value) return 'Creator wallet address is required';
      return !validateSolanaAddress(value) ? 'Invalid Solana wallet address' : null;

    case 'utilityType':
      const validTypes = ['DISCOUNT', 'ACCESS', 'SUBSCRIPTION', 'LOYALTY'];
      return !value || !validTypes.includes(value) ? 'Invalid utility type' : null;

    default:
      return null;
  }
}
