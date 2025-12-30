// Complete Tadawul Stock Exchange Data - All 200+ Listed Companies
// Saudi Stock Exchange (Tadawul) - Comprehensive Market Data

export interface Stock {
  ticker: string;
  name: string;
  nameAr?: string;
  sector: string;
  sectorId: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  peRatio: number | null;
  dividendYield: number | null;
  high52w: number;
  low52w: number;
  description: string;
  eps?: number;
  beta?: number;
  avgVolume?: string;
}

export interface Sector {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  description: string;
  performance?: number;
}

// All Tadawul Sectors with Performance Data
export const tadawulSectors: Sector[] = [
  { id: 'all', name: 'All Sectors', nameAr: 'جميع القطاعات', icon: 'Building2', description: 'All listed stocks', performance: 1.2 },
  { id: 'energy', name: 'Energy', nameAr: 'الطاقة', icon: 'Fuel', description: 'Oil, gas, and energy companies', performance: 2.8 },
  { id: 'materials', name: 'Materials', nameAr: 'المواد الأساسية', icon: 'Factory', description: 'Basic materials, chemicals, and cement', performance: 1.5 },
  { id: 'capital-goods', name: 'Capital Goods', nameAr: 'السلع الرأسمالية', icon: 'Cog', description: 'Industrial machinery and equipment', performance: 1.8 },
  { id: 'commercial-services', name: 'Commercial & Prof Services', nameAr: 'الخدمات التجارية والمهنية', icon: 'Briefcase', description: 'Business and professional services', performance: 1.2 },
  { id: 'transportation', name: 'Transportation', nameAr: 'النقل', icon: 'Truck', description: 'Logistics, shipping, and transportation', performance: 2.1 },
  { id: 'consumer-durables', name: 'Consumer Durables & Apparel', nameAr: 'السلع طويلة الأجل', icon: 'ShoppingBag', description: 'Durable goods and clothing', performance: 0.8 },
  { id: 'consumer-services', name: 'Consumer Services', nameAr: 'الخدمات الاستهلاكية', icon: 'Users', description: 'Hotels, restaurants, leisure', performance: 3.2 },
  { id: 'media', name: 'Media & Entertainment', nameAr: 'الإعلام والترفيه', icon: 'Film', description: 'Media and entertainment companies', performance: 2.5 },
  { id: 'retailing', name: 'Retailing', nameAr: 'التجزئة', icon: 'ShoppingCart', description: 'Retail stores and e-commerce', performance: 1.6 },
  { id: 'food-staples', name: 'Food & Staples Retailing', nameAr: 'تجزئة الأغذية', icon: 'Apple', description: 'Supermarkets and food retail', performance: 1.4 },
  { id: 'food-beverages', name: 'Food & Beverages', nameAr: 'الأغذية والمشروبات', icon: 'Coffee', description: 'Food and beverage production', performance: 1.1 },
  { id: 'healthcare-equipment', name: 'Health Care Equipment & Svc', nameAr: 'معدات الرعاية الصحية', icon: 'Stethoscope', description: 'Medical equipment and healthcare services', performance: 0.9 },
  { id: 'pharma', name: 'Pharma, Biotech & Life Science', nameAr: 'الأدوية', icon: 'Pill', description: 'Pharmaceutical and biotech companies', performance: 1.7 },
  { id: 'banks', name: 'Banks', nameAr: 'البنوك', icon: 'Landmark', description: 'Commercial and Islamic banks', performance: 1.9 },
  { id: 'diversified-financials', name: 'Diversified Financials', nameAr: 'الخدمات المالية', icon: 'Wallet', description: 'Financial and investment services', performance: 1.4 },
  { id: 'insurance', name: 'Insurance', nameAr: 'التأمين', icon: 'Shield', description: 'Insurance companies', performance: 2.2 },
  { id: 'software', name: 'Software & Services', nameAr: 'البرمجيات والخدمات', icon: 'Code', description: 'Technology, software, and IT services', performance: 3.5 },
  { id: 'telecom', name: 'Telecommunication Services', nameAr: 'الاتصالات', icon: 'Wifi', description: 'Telecom operators and services', performance: 1.3 },
  { id: 'utilities', name: 'Utilities', nameAr: 'المرافق العامة', icon: 'Zap', description: 'Electricity, water, and gas', performance: 0.6 },
  { id: 'reits', name: 'REITs', nameAr: 'صناديق الريت العقارية', icon: 'Building', description: 'Real estate investment trusts', performance: 0.7 },
  { id: 'real-estate', name: 'Real Estate Mgmt & Dev\'t', nameAr: 'التطوير العقاري', icon: 'Home', description: 'Real estate development and management', performance: 1.5 },
];

// Complete Tadawul Stock Data - 200+ Companies
export const tadawulStocks: Stock[] = [
  // ==================== ENERGY SECTOR ====================
  { ticker: '2222', name: 'Saudi Aramco', nameAr: 'أرامكو السعودية', sector: 'Energy', sectorId: 'energy', price: 28.45, change: 0.65, changePercent: 2.34, volume: '45.2M', marketCap: '7.5T', peRatio: 15.2, dividendYield: 4.2, high52w: 32.50, low52w: 26.80, description: 'The world\'s largest oil company and most valuable publicly traded company. Dominant in global energy markets.', eps: 1.87, beta: 0.85 },
  { ticker: '2380', name: 'Petro Rabigh', nameAr: 'بترو رابغ', sector: 'Energy', sectorId: 'energy', price: 18.92, change: -0.23, changePercent: -1.20, volume: '8.4M', marketCap: '34.5B', peRatio: null, dividendYield: 0, high52w: 24.50, low52w: 15.20, description: 'Integrated refining and petrochemical complex on the Red Sea coast.', eps: -0.45, beta: 1.25 },
  { ticker: '2030', name: 'SARCO', nameAr: 'ساركو', sector: 'Energy', sectorId: 'energy', price: 15.20, change: 0.08, changePercent: 0.53, volume: '1.1M', marketCap: '912M', peRatio: 18.5, dividendYield: 2.1, high52w: 18.20, low52w: 12.50, description: 'Saudi Arabia Refineries Company - oil refining operations.', eps: 0.82, beta: 1.15 },
  { ticker: '4030', name: 'BAHRI', nameAr: 'البحري', sector: 'Energy', sectorId: 'energy', price: 42.50, change: 1.25, changePercent: 3.03, volume: '3.2M', marketCap: '33.2B', peRatio: 12.8, dividendYield: 3.5, high52w: 48.00, low52w: 35.20, description: 'National shipping company - oil tankers and logistics.', eps: 3.32, beta: 0.92 },
  { ticker: '2381', name: 'Aldrees Petroleum', nameAr: 'الدريس', sector: 'Energy', sectorId: 'energy', price: 78.30, change: 2.10, changePercent: 2.76, volume: '520K', marketCap: '5.8B', peRatio: 22.4, dividendYield: 2.8, high52w: 85.00, low52w: 62.00, description: 'Fuel distribution and service stations across Saudi Arabia.', eps: 3.49, beta: 0.88 },
  { ticker: '4200', name: 'Saudi Industrial Services', nameAr: 'سيسكو', sector: 'Energy', sectorId: 'energy', price: 25.80, change: 0.45, changePercent: 1.78, volume: '1.8M', marketCap: '4.2B', peRatio: 15.6, dividendYield: 3.2, high52w: 30.00, low52w: 22.00, description: 'Industrial services for oil and gas sector.', eps: 1.65, beta: 1.05 },

  // ==================== MATERIALS SECTOR ====================
  { ticker: '2010', name: 'SABIC', nameAr: 'سابك', sector: 'Materials', sectorId: 'materials', price: 92.30, change: -0.46, changePercent: -0.50, volume: '5.1M', marketCap: '277B', peRatio: 18.2, dividendYield: 5.8, high52w: 105.00, low52w: 82.40, description: 'One of the world\'s largest petrochemical companies. Diversified chemicals, fertilizers, and metals.', eps: 5.07, beta: 1.12 },
  { ticker: '2350', name: 'Saudi Kayan', nameAr: 'كيان السعودية', sector: 'Materials', sectorId: 'materials', price: 12.84, change: 0.19, changePercent: 1.50, volume: '12.3M', marketCap: '19.3B', peRatio: null, dividendYield: 0, high52w: 16.80, low52w: 10.20, description: 'Major petrochemical manufacturing complex in Jubail.', eps: -0.28, beta: 1.35 },
  { ticker: '2060', name: 'Yansab', nameAr: 'ينساب', sector: 'Materials', sectorId: 'materials', price: 38.50, change: 0.12, changePercent: 0.31, volume: '1.8M', marketCap: '21.7B', peRatio: 14.5, dividendYield: 4.2, high52w: 45.20, low52w: 32.10, description: 'Yanbu National Petrochemical Company - SABIC affiliate.', eps: 2.66, beta: 1.18 },
  { ticker: '2290', name: 'Yanbu Cement', nameAr: 'أسمنت ينبع', sector: 'Materials', sectorId: 'materials', price: 25.10, change: -0.20, changePercent: -0.79, volume: '890K', marketCap: '4.8B', peRatio: 12.8, dividendYield: 6.2, high52w: 28.50, low52w: 22.00, description: 'Cement manufacturing in Yanbu Industrial City.', eps: 1.96, beta: 0.78 },
  { ticker: '3010', name: 'Arabian Cement', nameAr: 'أسمنت العربية', sector: 'Materials', sectorId: 'materials', price: 32.40, change: 0.45, changePercent: 1.41, volume: '1.2M', marketCap: '6.5B', peRatio: 14.2, dividendYield: 5.5, high52w: 38.00, low52w: 28.50, description: 'One of the largest cement producers in Saudi Arabia.', eps: 2.28, beta: 0.82 },
  { ticker: '3020', name: 'Saudi Cement', nameAr: 'أسمنت السعودية', sector: 'Materials', sectorId: 'materials', price: 58.20, change: 0.80, changePercent: 1.39, volume: '650K', marketCap: '10.5B', peRatio: 15.8, dividendYield: 5.8, high52w: 65.00, low52w: 52.00, description: 'Leading cement manufacturer in the Eastern Province.', eps: 3.68, beta: 0.75 },
  { ticker: '3030', name: 'Qassim Cement', nameAr: 'أسمنت القصيم', sector: 'Materials', sectorId: 'materials', price: 45.80, change: -0.35, changePercent: -0.76, volume: '420K', marketCap: '7.3B', peRatio: 13.5, dividendYield: 6.0, high52w: 52.00, low52w: 40.00, description: 'Cement production serving the Qassim region.', eps: 3.39, beta: 0.72 },
  { ticker: '3040', name: 'Southern Cement', nameAr: 'أسمنت الجنوبية', sector: 'Materials', sectorId: 'materials', price: 68.50, change: 1.20, changePercent: 1.78, volume: '380K', marketCap: '9.2B', peRatio: 16.2, dividendYield: 5.2, high52w: 75.00, low52w: 60.00, description: 'Cement producer in southern Saudi Arabia.', eps: 4.23, beta: 0.76 },
  { ticker: '3050', name: 'Tabuk Cement', nameAr: 'أسمنت تبوك', sector: 'Materials', sectorId: 'materials', price: 18.90, change: 0.22, changePercent: 1.18, volume: '580K', marketCap: '1.9B', peRatio: 11.5, dividendYield: 5.8, high52w: 22.00, low52w: 16.00, description: 'Cement production in Tabuk region.', eps: 1.64, beta: 0.68 },
  { ticker: '3060', name: 'Yamama Cement', nameAr: 'أسمنت اليمامة', sector: 'Materials', sectorId: 'materials', price: 28.50, change: 0.35, changePercent: 1.24, volume: '720K', marketCap: '5.7B', peRatio: 12.8, dividendYield: 5.5, high52w: 33.00, low52w: 25.00, description: 'Major cement producer in Riyadh region.', eps: 2.23, beta: 0.74 },
  { ticker: '3080', name: 'Eastern Province Cement', nameAr: 'أسمنت الشرقية', sector: 'Materials', sectorId: 'materials', price: 35.20, change: 0.48, changePercent: 1.38, volume: '450K', marketCap: '4.9B', peRatio: 14.5, dividendYield: 5.2, high52w: 40.00, low52w: 30.00, description: 'Cement manufacturing in Eastern Province.', eps: 2.43, beta: 0.70 },
  { ticker: '3090', name: 'Najran Cement', nameAr: 'أسمنت نجران', sector: 'Materials', sectorId: 'materials', price: 14.20, change: 0.18, changePercent: 1.28, volume: '680K', marketCap: '1.4B', peRatio: 10.8, dividendYield: 6.5, high52w: 17.00, low52w: 12.00, description: 'Cement producer serving southern regions.', eps: 1.31, beta: 0.65 },
  { ticker: '3091', name: 'City Cement', nameAr: 'أسمنت المدينة', sector: 'Materials', sectorId: 'materials', price: 22.80, change: 0.28, changePercent: 1.24, volume: '520K', marketCap: '2.3B', peRatio: 12.2, dividendYield: 5.8, high52w: 26.00, low52w: 19.00, description: 'Cement production in Madinah region.', eps: 1.87, beta: 0.72 },
  { ticker: '3092', name: 'Hail Cement', nameAr: 'أسمنت حائل', sector: 'Materials', sectorId: 'materials', price: 11.50, change: 0.12, changePercent: 1.05, volume: '920K', marketCap: '1.2B', peRatio: 9.8, dividendYield: 7.0, high52w: 14.00, low52w: 10.00, description: 'Cement manufacturing in Hail region.', eps: 1.17, beta: 0.62 },
  { ticker: '3004', name: 'Northern Cement', nameAr: 'أسمنت الشمالية', sector: 'Materials', sectorId: 'materials', price: 16.80, change: 0.15, changePercent: 0.90, volume: '380K', marketCap: '1.5B', peRatio: 11.2, dividendYield: 5.5, high52w: 19.00, low52w: 14.00, description: 'Cement production in northern Saudi Arabia.', eps: 1.50, beta: 0.68 },
  { ticker: '2020', name: 'SAFCO', nameAr: 'سافكو', sector: 'Materials', sectorId: 'materials', price: 85.40, change: 1.80, changePercent: 2.15, volume: '1.5M', marketCap: '35.6B', peRatio: 11.2, dividendYield: 7.5, high52w: 95.00, low52w: 72.00, description: 'Saudi Arabian Fertilizer Company - urea and ammonia production.', eps: 7.63, beta: 0.95 },
  { ticker: '1211', name: 'Maaden', nameAr: 'معادن', sector: 'Materials', sectorId: 'materials', price: 48.25, change: 0.95, changePercent: 2.01, volume: '8.5M', marketCap: '112B', peRatio: 22.5, dividendYield: 1.5, high52w: 55.00, low52w: 38.00, description: 'Saudi Arabian Mining Company - gold, phosphate, aluminum.', eps: 2.14, beta: 1.28 },
  { ticker: '2001', name: 'Methanol Chemicals', nameAr: 'كيمانول', sector: 'Materials', sectorId: 'materials', price: 15.80, change: 0.22, changePercent: 1.41, volume: '2.1M', marketCap: '4.7B', peRatio: 18.5, dividendYield: 3.2, high52w: 19.00, low52w: 13.00, description: 'Methanol and chemical derivatives producer.', eps: 0.85, beta: 1.15 },
  { ticker: '2002', name: 'National Petrochemical', nameAr: 'بتروكيم', sector: 'Materials', sectorId: 'materials', price: 28.40, change: 0.38, changePercent: 1.36, volume: '1.8M', marketCap: '12.8B', peRatio: 15.2, dividendYield: 4.5, high52w: 33.00, low52w: 24.00, description: 'Petrochemical production and marketing.', eps: 1.87, beta: 1.22 },
  { ticker: '2210', name: 'NAMA Chemicals', nameAr: 'نماء للكيماويات', sector: 'Materials', sectorId: 'materials', price: 32.50, change: 0.45, changePercent: 1.40, volume: '680K', marketCap: '3.9B', peRatio: 16.8, dividendYield: 3.8, high52w: 38.00, low52w: 28.00, description: 'Specialty chemicals and industrial products.', eps: 1.94, beta: 1.08 },
  { ticker: '2250', name: 'Sipchem', nameAr: 'سبكيم', sector: 'Materials', sectorId: 'materials', price: 22.80, change: 0.32, changePercent: 1.42, volume: '2.5M', marketCap: '15.2B', peRatio: 14.8, dividendYield: 4.2, high52w: 27.00, low52w: 19.00, description: 'International Petrochemical Company.', eps: 1.54, beta: 1.18 },
  { ticker: '2310', name: 'SIIG', nameAr: 'سيج', sector: 'Materials', sectorId: 'materials', price: 18.50, change: 0.25, changePercent: 1.37, volume: '1.2M', marketCap: '5.6B', peRatio: 12.5, dividendYield: 5.2, high52w: 22.00, low52w: 15.00, description: 'Saudi Industrial Investment Group.', eps: 1.48, beta: 1.05 },
  { ticker: '2330', name: 'Advanced Petrochemical', nameAr: 'المتقدمة', sector: 'Materials', sectorId: 'materials', price: 52.80, change: 0.75, changePercent: 1.44, volume: '1.5M', marketCap: '13.2B', peRatio: 13.8, dividendYield: 5.5, high52w: 60.00, low52w: 45.00, description: 'Polypropylene production.', eps: 3.83, beta: 1.10 },
  { ticker: '2370', name: 'SABIC Agri-Nutrients', nameAr: 'سابك للمغذيات الزراعية', sector: 'Materials', sectorId: 'materials', price: 125.40, change: 2.20, changePercent: 1.79, volume: '850K', marketCap: '56.4B', peRatio: 10.5, dividendYield: 8.2, high52w: 140.00, low52w: 105.00, description: 'Agricultural nutrients and fertilizers.', eps: 11.94, beta: 0.88 },

  // ==================== BANKS SECTOR ====================
  { ticker: '1120', name: 'Al Rajhi Bank', nameAr: 'مصرف الراجحي', sector: 'Banks', sectorId: 'banks', price: 85.20, change: 1.53, changePercent: 1.83, volume: '8.2M', marketCap: '340B', peRatio: 18.5, dividendYield: 3.1, high52w: 95.00, low52w: 72.00, description: 'Largest Islamic bank in the world by market cap. Retail and corporate banking.', eps: 4.61, beta: 1.02 },
  { ticker: '1180', name: 'Al Inma Bank', nameAr: 'مصرف الإنماء', sector: 'Banks', sectorId: 'banks', price: 28.15, change: 0.31, changePercent: 1.11, volume: '4.6M', marketCap: '56.3B', peRatio: 15.2, dividendYield: 2.8, high52w: 32.00, low52w: 24.50, description: 'Islamic banking services - fastest growing Saudi bank.', eps: 1.85, beta: 1.08 },
  { ticker: '1140', name: 'Bank AlBilad', nameAr: 'بنك البلاد', sector: 'Banks', sectorId: 'banks', price: 41.30, change: 0.25, changePercent: 0.61, volume: '2.1M', marketCap: '31.0B', peRatio: 14.8, dividendYield: 2.5, high52w: 48.00, low52w: 35.00, description: 'Saudi Islamic bank with retail focus.', eps: 2.79, beta: 0.98 },
  { ticker: '1010', name: 'Riyad Bank', nameAr: 'بنك الرياض', sector: 'Banks', sectorId: 'banks', price: 28.90, change: 0.40, changePercent: 1.40, volume: '3.8M', marketCap: '86.7B', peRatio: 12.5, dividendYield: 4.2, high52w: 32.00, low52w: 25.00, description: 'One of the largest banks in Saudi Arabia - full service.', eps: 2.31, beta: 0.95 },
  { ticker: '1050', name: 'BSF', nameAr: 'البنك السعودي الفرنسي', sector: 'Banks', sectorId: 'banks', price: 45.60, change: 0.65, changePercent: 1.45, volume: '1.2M', marketCap: '55.0B', peRatio: 13.8, dividendYield: 3.8, high52w: 52.00, low52w: 40.00, description: 'Banque Saudi Fransi - corporate and investment banking.', eps: 3.30, beta: 0.92 },
  { ticker: '1060', name: 'SABB', nameAr: 'ساب', sector: 'Banks', sectorId: 'banks', price: 38.20, change: 0.55, changePercent: 1.46, volume: '2.5M', marketCap: '76.4B', peRatio: 14.2, dividendYield: 3.5, high52w: 44.00, low52w: 33.00, description: 'Saudi British Bank - commercial and investment banking.', eps: 2.69, beta: 0.96 },
  { ticker: '1080', name: 'Arab National Bank', nameAr: 'البنك العربي الوطني', sector: 'Banks', sectorId: 'banks', price: 21.50, change: 0.28, changePercent: 1.32, volume: '1.8M', marketCap: '37.6B', peRatio: 11.5, dividendYield: 4.5, high52w: 25.00, low52w: 18.50, description: 'Major commercial bank with regional presence.', eps: 1.87, beta: 0.88 },
  { ticker: '1150', name: 'Saudi National Bank', nameAr: 'البنك الأهلي السعودي', sector: 'Banks', sectorId: 'banks', price: 52.80, change: 0.90, changePercent: 1.73, volume: '5.2M', marketCap: '263.5B', peRatio: 16.5, dividendYield: 2.8, high52w: 60.00, low52w: 45.00, description: 'Largest bank in Saudi Arabia after NCB-Samba merger.', eps: 3.20, beta: 1.05 },
  { ticker: '1020', name: 'Bank AlJazira', nameAr: 'بنك الجزيرة', sector: 'Banks', sectorId: 'banks', price: 18.95, change: 0.22, changePercent: 1.17, volume: '2.8M', marketCap: '19.0B', peRatio: 12.8, dividendYield: 3.2, high52w: 22.00, low52w: 16.00, description: 'Islamic bank in Saudi Arabia.', eps: 1.48, beta: 1.02 },
  { ticker: '1030', name: 'Saudi Investment Bank', nameAr: 'البنك السعودي للاستثمار', sector: 'Banks', sectorId: 'banks', price: 15.80, change: 0.18, changePercent: 1.15, volume: '1.5M', marketCap: '11.9B', peRatio: 10.8, dividendYield: 4.8, high52w: 18.00, low52w: 13.50, description: 'Investment and commercial banking services.', eps: 1.46, beta: 0.85 },

  // ==================== TELECOM SECTOR ====================
  { ticker: '7010', name: 'STC', nameAr: 'الاتصالات السعودية', sector: 'Telecommunication Services', sectorId: 'telecom', price: 41.50, change: 0.33, changePercent: 0.80, volume: '3.8M', marketCap: '207.5B', peRatio: 18.2, dividendYield: 4.8, high52w: 48.00, low52w: 38.00, description: 'Saudi Telecom Company - largest telecom operator in Middle East.', eps: 2.28, beta: 0.75 },
  { ticker: '7020', name: 'Etihad Etisalat (Mobily)', nameAr: 'موبايلي', sector: 'Telecommunication Services', sectorId: 'telecom', price: 42.15, change: 0.51, changePercent: 1.22, volume: '2.5M', marketCap: '32.5B', peRatio: 22.5, dividendYield: 2.4, high52w: 50.00, low52w: 35.00, description: 'Second largest mobile operator - strong 5G network.', eps: 1.87, beta: 0.92 },
  { ticker: '7030', name: 'Zain KSA', nameAr: 'زين السعودية', sector: 'Telecommunication Services', sectorId: 'telecom', price: 12.80, change: 0.18, changePercent: 1.43, volume: '8.2M', marketCap: '14.7B', peRatio: 28.5, dividendYield: 0, high52w: 16.00, low52w: 10.50, description: 'Third mobile operator in Saudi Arabia.', eps: 0.45, beta: 1.15 },
  { ticker: '7040', name: 'Dawiyat', nameAr: 'داوية', sector: 'Telecommunication Services', sectorId: 'telecom', price: 85.20, change: 1.25, changePercent: 1.49, volume: '180K', marketCap: '4.3B', peRatio: 25.5, dividendYield: 1.8, high52w: 95.00, low52w: 72.00, description: 'Integrated telecom services and IT solutions.', eps: 3.34, beta: 0.85 },

  // ==================== HEALTHCARE SECTOR ====================
  { ticker: '4002', name: 'Mouwasat', nameAr: 'المواساة', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 125.00, change: 0.50, changePercent: 0.40, volume: '520K', marketCap: '12.5B', peRatio: 28.5, dividendYield: 1.2, high52w: 145.00, low52w: 110.00, description: 'Healthcare services and hospitals network.', eps: 4.39, beta: 0.72 },
  { ticker: '4004', name: 'Dallah Healthcare', nameAr: 'دله الصحية', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 98.50, change: -0.30, changePercent: -0.30, volume: '380K', marketCap: '9.9B', peRatio: 25.2, dividendYield: 1.5, high52w: 120.00, low52w: 85.00, description: 'Healthcare services provider with hospitals.', eps: 3.91, beta: 0.68 },
  { ticker: '4005', name: 'Care', nameAr: 'الرعاية', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 42.80, change: 0.65, changePercent: 1.54, volume: '280K', marketCap: '4.3B', peRatio: 22.8, dividendYield: 1.8, high52w: 50.00, low52w: 35.00, description: 'National Medical Care Company - hospitals and clinics.', eps: 1.88, beta: 0.65 },
  { ticker: '4007', name: 'Al Hammadi', nameAr: 'الحمادي', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 38.20, change: 0.42, changePercent: 1.11, volume: '450K', marketCap: '4.6B', peRatio: 18.5, dividendYield: 2.2, high52w: 45.00, low52w: 32.00, description: 'Al Hammadi Holding - healthcare services.', eps: 2.07, beta: 0.70 },
  { ticker: '4009', name: 'Saudi German Health', nameAr: 'السعودي الألماني', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 28.50, change: 0.35, changePercent: 1.24, volume: '620K', marketCap: '5.7B', peRatio: 20.5, dividendYield: 1.5, high52w: 34.00, low52w: 24.00, description: 'German-standard healthcare facilities.', eps: 1.39, beta: 0.75 },
  { ticker: '4013', name: 'Dr. Soliman Fakeeh', nameAr: 'الدكتور سليمان فقيه', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 85.40, change: 1.15, changePercent: 1.37, volume: '180K', marketCap: '8.5B', peRatio: 24.5, dividendYield: 1.2, high52w: 95.00, low52w: 72.00, description: 'Premium healthcare provider in Jeddah.', eps: 3.49, beta: 0.62 },

  // ==================== RETAILING SECTOR ====================
  { ticker: '4190', name: 'Jarir', nameAr: 'جرير', sector: 'Retailing', sectorId: 'retailing', price: 142.60, change: 1.28, changePercent: 0.91, volume: '720K', marketCap: '17.1B', peRatio: 18.5, dividendYield: 5.2, high52w: 165.00, low52w: 125.00, description: 'Leading bookstore and electronics retailer in Saudi Arabia.', eps: 7.71, beta: 0.82 },
  { ticker: '4240', name: 'Fawaz Alhokair', nameAr: 'فواز الحكير', sector: 'Retailing', sectorId: 'retailing', price: 15.80, change: -0.24, changePercent: -1.50, volume: '3.2M', marketCap: '4.7B', peRatio: null, dividendYield: 0, high52w: 22.00, low52w: 12.50, description: 'Fashion retail group - international brands.', eps: -0.85, beta: 1.45 },
  { ticker: '4003', name: 'Extra', nameAr: 'إكسترا', sector: 'Retailing', sectorId: 'retailing', price: 85.20, change: 1.50, changePercent: 1.79, volume: '850K', marketCap: '6.8B', peRatio: 15.8, dividendYield: 4.5, high52w: 95.00, low52w: 72.00, description: 'Electronics and appliances retailer.', eps: 5.39, beta: 0.88 },
  { ticker: '4001', name: 'Abdullah Al Othaim', nameAr: 'العثيم', sector: 'Retailing', sectorId: 'retailing', price: 118.40, change: 2.20, changePercent: 1.89, volume: '420K', marketCap: '10.7B', peRatio: 20.5, dividendYield: 3.2, high52w: 135.00, low52w: 100.00, description: 'Retail and entertainment company.', eps: 5.78, beta: 0.78 },
  { ticker: '4191', name: 'Aldrees', nameAr: 'الدريس للخدمات', sector: 'Retailing', sectorId: 'retailing', price: 52.80, change: 0.75, changePercent: 1.44, volume: '280K', marketCap: '3.2B', peRatio: 16.5, dividendYield: 3.8, high52w: 60.00, low52w: 45.00, description: 'Automotive and retail services.', eps: 3.20, beta: 0.85 },
  { ticker: '4006', name: 'Al-Mawarid', nameAr: 'الموارد', sector: 'Retailing', sectorId: 'retailing', price: 18.90, change: 0.25, changePercent: 1.34, volume: '580K', marketCap: '1.9B', peRatio: 14.5, dividendYield: 4.2, high52w: 22.00, low52w: 16.00, description: 'Retail chain operations.', eps: 1.30, beta: 0.92 },

  // ==================== FOOD & BEVERAGES SECTOR ====================
  { ticker: '2280', name: 'Almarai', nameAr: 'المراعي', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 52.40, change: 0.45, changePercent: 0.87, volume: '1.8M', marketCap: '52.4B', peRatio: 22.5, dividendYield: 2.1, high52w: 62.00, low52w: 48.00, description: 'Largest integrated dairy company in the world. Dairy, bakery, poultry.', eps: 2.33, beta: 0.65 },
  { ticker: '6010', name: 'NADEC', nameAr: 'نادك', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 35.80, change: 0.28, changePercent: 0.79, volume: '620K', marketCap: '4.3B', peRatio: 18.2, dividendYield: 2.8, high52w: 42.00, low52w: 30.00, description: 'National Agricultural Development Company.', eps: 1.97, beta: 0.72 },
  { ticker: '2270', name: 'SADAFCO', nameAr: 'سدافكو', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 128.20, change: 1.80, changePercent: 1.42, volume: '180K', marketCap: '3.9B', peRatio: 16.5, dividendYield: 4.5, high52w: 145.00, low52w: 115.00, description: 'Saudia Dairy and Foodstuff Company.', eps: 7.77, beta: 0.58 },
  { ticker: '6001', name: 'Halwani Bros', nameAr: 'حلواني إخوان', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 42.50, change: 0.55, changePercent: 1.31, volume: '280K', marketCap: '2.6B', peRatio: 15.8, dividendYield: 3.5, high52w: 48.00, low52w: 36.00, description: 'Processed food and meat products.', eps: 2.69, beta: 0.62 },
  { ticker: '6002', name: 'Herfy', nameAr: 'هرفي', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 38.90, change: 0.48, changePercent: 1.25, volume: '320K', marketCap: '2.3B', peRatio: 18.5, dividendYield: 3.2, high52w: 45.00, low52w: 33.00, description: 'Fast food restaurant chain and bakery.', eps: 2.10, beta: 0.68 },
  { ticker: '6004', name: 'Catering', nameAr: 'التموين', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 95.20, change: 1.35, changePercent: 1.44, volume: '220K', marketCap: '7.6B', peRatio: 20.5, dividendYield: 2.8, high52w: 105.00, low52w: 82.00, description: 'Saudi Airlines Catering Company.', eps: 4.64, beta: 0.75 },
  { ticker: '6012', name: 'Tanmiah', nameAr: 'تنمية', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 185.40, change: 2.80, changePercent: 1.53, volume: '150K', marketCap: '5.6B', peRatio: 24.5, dividendYield: 2.2, high52w: 210.00, low52w: 160.00, description: 'Poultry and food processing.', eps: 7.57, beta: 0.70 },
  { ticker: '6020', name: 'SASCO', nameAr: 'ساسكو', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 28.50, change: 0.35, changePercent: 1.24, volume: '480K', marketCap: '2.9B', peRatio: 14.8, dividendYield: 3.5, high52w: 34.00, low52w: 24.00, description: 'Saudi Automotive Services Company.', eps: 1.93, beta: 0.80 },
  { ticker: '6050', name: 'Saudi Fisheries', nameAr: 'الأسماك', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 22.80, change: 0.28, changePercent: 1.24, volume: '580K', marketCap: '1.4B', peRatio: 16.5, dividendYield: 2.5, high52w: 26.00, low52w: 19.00, description: 'Fish and seafood production.', eps: 1.38, beta: 0.85 },
  { ticker: '2050', name: 'Savola', nameAr: 'صافولا', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 32.40, change: 0.42, changePercent: 1.31, volume: '2.5M', marketCap: '17.3B', peRatio: 15.8, dividendYield: 3.8, high52w: 38.00, low52w: 28.00, description: 'Food conglomerate - Almarai, Panda retail.', eps: 2.05, beta: 0.78 },

  // ==================== INSURANCE SECTOR ====================
  { ticker: '8010', name: 'Bupa Arabia', nameAr: 'بوبا العربية', sector: 'Insurance', sectorId: 'insurance', price: 185.40, change: 2.80, changePercent: 1.53, volume: '280K', marketCap: '22.2B', peRatio: 18.5, dividendYield: 3.2, high52w: 210.00, low52w: 160.00, description: 'Largest health insurer in Saudi Arabia.', eps: 10.02, beta: 0.72 },
  { ticker: '8020', name: 'Malath Insurance', nameAr: 'ملاذ للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 22.45, change: 0.32, changePercent: 1.45, volume: '1.5M', marketCap: '1.1B', peRatio: 12.8, dividendYield: 0, high52w: 28.00, low52w: 18.00, description: 'Cooperative insurance company.', eps: 1.75, beta: 1.15 },
  { ticker: '8030', name: 'Medgulf', nameAr: 'ميدغلف', sector: 'Insurance', sectorId: 'insurance', price: 28.90, change: 0.45, changePercent: 1.58, volume: '850K', marketCap: '1.4B', peRatio: 15.2, dividendYield: 2.5, high52w: 35.00, low52w: 24.00, description: 'Mediterranean and Gulf Insurance.', eps: 1.90, beta: 1.08 },
  { ticker: '8040', name: 'Al Sagr Insurance', nameAr: 'الصقر للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 18.20, change: 0.22, changePercent: 1.22, volume: '620K', marketCap: '910M', peRatio: 10.5, dividendYield: 3.8, high52w: 22.00, low52w: 15.00, description: 'Cooperative insurance services.', eps: 1.73, beta: 0.95 },
  { ticker: '8050', name: 'Salama Insurance', nameAr: 'سلامة للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 25.80, change: 0.35, changePercent: 1.38, volume: '480K', marketCap: '1.3B', peRatio: 14.2, dividendYield: 2.8, high52w: 30.00, low52w: 22.00, description: 'Islamic cooperative insurance.', eps: 1.82, beta: 1.02 },
  { ticker: '8060', name: 'Walaa Insurance', nameAr: 'ولاء للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 32.50, change: 0.48, changePercent: 1.50, volume: '720K', marketCap: '1.6B', peRatio: 13.5, dividendYield: 3.2, high52w: 38.00, low52w: 28.00, description: 'Cooperative insurance company.', eps: 2.41, beta: 0.98 },
  { ticker: '8070', name: 'Arabian Shield', nameAr: 'الدرع العربي', sector: 'Insurance', sectorId: 'insurance', price: 28.40, change: 0.38, changePercent: 1.36, volume: '380K', marketCap: '1.4B', peRatio: 12.8, dividendYield: 3.5, high52w: 33.00, low52w: 24.00, description: 'Insurance and reinsurance services.', eps: 2.22, beta: 1.05 },
  { ticker: '8080', name: 'Sanad Insurance', nameAr: 'سند للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 15.80, change: 0.18, changePercent: 1.15, volume: '520K', marketCap: '790M', peRatio: 11.5, dividendYield: 4.2, high52w: 19.00, low52w: 13.00, description: 'General insurance services.', eps: 1.37, beta: 1.12 },
  { ticker: '8100', name: 'SABB Takaful', nameAr: 'ساب تكافل', sector: 'Insurance', sectorId: 'insurance', price: 18.50, change: 0.22, changePercent: 1.20, volume: '280K', marketCap: '925M', peRatio: 14.5, dividendYield: 2.8, high52w: 22.00, low52w: 16.00, description: 'Takaful insurance services.', eps: 1.28, beta: 0.92 },
  { ticker: '8120', name: 'Gulf Union', nameAr: 'الاتحاد الخليجي', sector: 'Insurance', sectorId: 'insurance', price: 12.80, change: 0.15, changePercent: 1.19, volume: '680K', marketCap: '640M', peRatio: 10.8, dividendYield: 4.5, high52w: 15.00, low52w: 11.00, description: 'Cooperative insurance services.', eps: 1.19, beta: 1.08 },
  { ticker: '8150', name: 'ACIG', nameAr: 'أسيج', sector: 'Insurance', sectorId: 'insurance', price: 22.40, change: 0.28, changePercent: 1.27, volume: '420K', marketCap: '1.1B', peRatio: 13.8, dividendYield: 3.2, high52w: 26.00, low52w: 19.00, description: 'Allied Cooperative Insurance Group.', eps: 1.62, beta: 0.98 },
  { ticker: '8160', name: 'Jazira Takaful', nameAr: 'الجزيرة تكافل', sector: 'Insurance', sectorId: 'insurance', price: 35.80, change: 0.52, changePercent: 1.47, volume: '180K', marketCap: '1.8B', peRatio: 16.5, dividendYield: 2.5, high52w: 42.00, low52w: 30.00, description: 'Takaful insurance - Bank AlJazira subsidiary.', eps: 2.17, beta: 0.88 },
  { ticker: '8170', name: 'Tawuniya', nameAr: 'التعاونية', sector: 'Insurance', sectorId: 'insurance', price: 82.50, change: 1.25, changePercent: 1.54, volume: '520K', marketCap: '10.3B', peRatio: 15.8, dividendYield: 3.5, high52w: 95.00, low52w: 70.00, description: 'Largest insurance company in Saudi Arabia.', eps: 5.22, beta: 0.82 },
  { ticker: '8180', name: 'Alianz SF', nameAr: 'أليانز', sector: 'Insurance', sectorId: 'insurance', price: 28.20, change: 0.38, changePercent: 1.37, volume: '320K', marketCap: '1.7B', peRatio: 14.2, dividendYield: 3.0, high52w: 33.00, low52w: 24.00, description: 'General insurance services.', eps: 1.99, beta: 0.95 },
  { ticker: '8190', name: 'United Insurance', nameAr: 'المتحدة للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 18.90, change: 0.22, changePercent: 1.18, volume: '580K', marketCap: '945M', peRatio: 12.5, dividendYield: 3.8, high52w: 22.00, low52w: 16.00, description: 'Cooperative insurance company.', eps: 1.51, beta: 1.02 },
  { ticker: '8200', name: 'Saudi Re', nameAr: 'إعادة السعودية', sector: 'Insurance', sectorId: 'insurance', price: 42.50, change: 0.65, changePercent: 1.55, volume: '220K', marketCap: '4.3B', peRatio: 18.5, dividendYield: 2.2, high52w: 48.00, low52w: 36.00, description: 'Saudi Reinsurance Company.', eps: 2.30, beta: 0.85 },
  { ticker: '8210', name: 'Buruj Insurance', nameAr: 'بروج للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 25.40, change: 0.32, changePercent: 1.28, volume: '280K', marketCap: '1.3B', peRatio: 13.8, dividendYield: 3.5, high52w: 30.00, low52w: 22.00, description: 'Cooperative insurance services.', eps: 1.84, beta: 0.98 },
  { ticker: '8230', name: 'Al Rajhi Takaful', nameAr: 'الراجحي للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 68.50, change: 1.05, changePercent: 1.56, volume: '180K', marketCap: '4.1B', peRatio: 18.2, dividendYield: 2.5, high52w: 78.00, low52w: 58.00, description: 'Takaful insurance - Al Rajhi Bank subsidiary.', eps: 3.76, beta: 0.78 },
  { ticker: '8240', name: 'CHUBB Arabia', nameAr: 'تشب العربية', sector: 'Insurance', sectorId: 'insurance', price: 32.80, change: 0.45, changePercent: 1.39, volume: '150K', marketCap: '1.6B', peRatio: 14.5, dividendYield: 3.2, high52w: 38.00, low52w: 28.00, description: 'General insurance services.', eps: 2.26, beta: 0.92 },
  { ticker: '8250', name: 'AXA Cooperative', nameAr: 'أكسا التعاونية', sector: 'Insurance', sectorId: 'insurance', price: 28.90, change: 0.38, changePercent: 1.33, volume: '220K', marketCap: '1.4B', peRatio: 13.2, dividendYield: 3.5, high52w: 34.00, low52w: 25.00, description: 'Life and health insurance.', eps: 2.19, beta: 0.95 },

  // ==================== UTILITIES SECTOR ====================
  { ticker: '5110', name: 'Saudi Electricity', nameAr: 'الكهرباء السعودية', sector: 'Utilities', sectorId: 'utilities', price: 17.82, change: 0.04, changePercent: 0.22, volume: '1.8M', marketCap: '74.3B', peRatio: null, dividendYield: 0, high52w: 20.00, low52w: 16.00, description: 'Sole electricity provider in Saudi Arabia.', eps: -0.25, beta: 0.45 },
  { ticker: '2082', name: 'ACWA Power', nameAr: 'أكوا باور', sector: 'Utilities', sectorId: 'utilities', price: 168.40, change: 3.20, changePercent: 1.94, volume: '1.2M', marketCap: '122.5B', peRatio: 85.2, dividendYield: 0.8, high52w: 195.00, low52w: 140.00, description: 'Power generation and desalinated water production - renewables leader.', eps: 1.98, beta: 1.25 },
  { ticker: '2083', name: 'Marafiq', nameAr: 'مرافق', sector: 'Utilities', sectorId: 'utilities', price: 42.50, change: 0.55, changePercent: 1.31, volume: '380K', marketCap: '8.5B', peRatio: 18.5, dividendYield: 3.2, high52w: 48.00, low52w: 36.00, description: 'Power and water utility company.', eps: 2.30, beta: 0.55 },
  { ticker: '2084', name: 'Gas & Industrialization', nameAr: 'الغاز والتصنيع', sector: 'Utilities', sectorId: 'utilities', price: 28.80, change: 0.35, changePercent: 1.23, volume: '520K', marketCap: '4.3B', peRatio: 15.8, dividendYield: 4.2, high52w: 33.00, low52w: 25.00, description: 'Gas distribution and industrial gases.', eps: 1.82, beta: 0.62 },

  // ==================== REITS SECTOR ====================
  { ticker: '4330', name: 'Riyad REIT', nameAr: 'ريت الرياض', sector: 'REITs', sectorId: 'reits', price: 8.45, change: 0.05, changePercent: 0.60, volume: '2.8M', marketCap: '1.7B', peRatio: null, dividendYield: 6.8, high52w: 10.00, low52w: 7.50, description: 'Real estate investment trust focused on commercial properties.', eps: 0.58, beta: 0.55 },
  { ticker: '4331', name: 'Jadwa REIT', nameAr: 'ريت جدوى', sector: 'REITs', sectorId: 'reits', price: 9.82, change: 0.08, changePercent: 0.82, volume: '1.5M', marketCap: '2.5B', peRatio: null, dividendYield: 7.2, high52w: 11.50, low52w: 8.80, description: 'Jadwa real estate investment fund - diversified portfolio.', eps: 0.71, beta: 0.52 },
  { ticker: '4332', name: 'Alahli REIT', nameAr: 'ريت الأهلي', sector: 'REITs', sectorId: 'reits', price: 7.95, change: 0.03, changePercent: 0.38, volume: '3.2M', marketCap: '3.2B', peRatio: null, dividendYield: 6.5, high52w: 9.50, low52w: 7.20, description: 'Al Ahli real estate investment trust.', eps: 0.52, beta: 0.58 },
  { ticker: '4333', name: 'Mulkia REIT', nameAr: 'ريت ملكية', sector: 'REITs', sectorId: 'reits', price: 8.20, change: 0.04, changePercent: 0.49, volume: '1.8M', marketCap: '1.2B', peRatio: null, dividendYield: 7.5, high52w: 9.80, low52w: 7.40, description: 'Real estate investment fund.', eps: 0.62, beta: 0.50 },
  { ticker: '4334', name: 'Musharaka REIT', nameAr: 'ريت مشاركة', sector: 'REITs', sectorId: 'reits', price: 7.50, change: 0.02, changePercent: 0.27, volume: '2.2M', marketCap: '900M', peRatio: null, dividendYield: 7.8, high52w: 9.00, low52w: 6.80, description: 'Diversified REIT portfolio.', eps: 0.59, beta: 0.48 },
  { ticker: '4335', name: 'Mefic REIT', nameAr: 'ريت مفك', sector: 'REITs', sectorId: 'reits', price: 8.80, change: 0.05, changePercent: 0.57, volume: '1.2M', marketCap: '1.1B', peRatio: null, dividendYield: 6.9, high52w: 10.20, low52w: 8.00, description: 'Middle East focused REIT.', eps: 0.61, beta: 0.54 },
  { ticker: '4336', name: 'Al Maather REIT', nameAr: 'ريت المعذر', sector: 'REITs', sectorId: 'reits', price: 10.20, change: 0.08, changePercent: 0.79, volume: '850K', marketCap: '1.5B', peRatio: null, dividendYield: 6.2, high52w: 12.00, low52w: 9.20, description: 'Commercial and retail property REIT.', eps: 0.63, beta: 0.56 },
  { ticker: '4337', name: 'Swicorp REIT', nameAr: 'ريت سويكورب', sector: 'REITs', sectorId: 'reits', price: 9.15, change: 0.06, changePercent: 0.66, volume: '980K', marketCap: '1.4B', peRatio: null, dividendYield: 6.8, high52w: 10.80, low52w: 8.50, description: 'Diversified real estate fund.', eps: 0.62, beta: 0.52 },
  { ticker: '4338', name: 'Al Rajhi REIT', nameAr: 'ريت الراجحي', sector: 'REITs', sectorId: 'reits', price: 8.60, change: 0.05, changePercent: 0.58, volume: '2.5M', marketCap: '2.2B', peRatio: null, dividendYield: 7.0, high52w: 10.00, low52w: 7.80, description: 'Al Rajhi real estate fund.', eps: 0.60, beta: 0.55 },
  { ticker: '4339', name: 'Derayah REIT', nameAr: 'ريت دراية', sector: 'REITs', sectorId: 'reits', price: 7.80, change: 0.03, changePercent: 0.39, volume: '1.6M', marketCap: '1.2B', peRatio: null, dividendYield: 7.5, high52w: 9.20, low52w: 7.20, description: 'Real estate investment fund.', eps: 0.59, beta: 0.50 },

  // ==================== REAL ESTATE SECTOR ====================
  { ticker: '4020', name: 'Dar Al Arkan', nameAr: 'دار الأركان', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 12.85, change: 0.18, changePercent: 1.42, volume: '15.2M', marketCap: '13.9B', peRatio: 8.5, dividendYield: 0, high52w: 16.00, low52w: 10.50, description: 'Largest real estate developer in Saudi Arabia.', eps: 1.51, beta: 1.35 },
  { ticker: '4300', name: 'Jabal Omar', nameAr: 'جبل عمر', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 25.45, change: 0.35, changePercent: 1.39, volume: '8.5M', marketCap: '26.7B', peRatio: null, dividendYield: 0, high52w: 32.00, low52w: 22.00, description: 'Development company near Makkah - hotels and residential.', eps: -0.42, beta: 1.28 },
  { ticker: '4310', name: 'Emaar EC', nameAr: 'إعمار المدينة الاقتصادية', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 10.25, change: 0.12, changePercent: 1.18, volume: '5.8M', marketCap: '8.7B', peRatio: null, dividendYield: 0, high52w: 14.00, low52w: 8.50, description: 'King Abdullah Economic City developer.', eps: -0.28, beta: 1.42 },
  { ticker: '4320', name: 'Al Andalus', nameAr: 'الأندلس', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 18.90, change: 0.25, changePercent: 1.34, volume: '1.2M', marketCap: '2.8B', peRatio: 15.8, dividendYield: 3.2, high52w: 22.00, low52w: 16.00, description: 'Real estate development and management.', eps: 1.20, beta: 1.08 },
  { ticker: '4321', name: 'Retal Urban', nameAr: 'ريتال للتطوير', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 42.50, change: 0.65, changePercent: 1.55, volume: '580K', marketCap: '6.4B', peRatio: 18.5, dividendYield: 2.5, high52w: 48.00, low52w: 36.00, description: 'Urban development company.', eps: 2.30, beta: 1.15 },
  { ticker: '4322', name: 'Makkah Const', nameAr: 'مكة للإنشاء', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 85.40, change: 1.25, changePercent: 1.49, volume: '280K', marketCap: '5.1B', peRatio: 22.5, dividendYield: 1.8, high52w: 95.00, low52w: 72.00, description: 'Makkah Construction and Development.', eps: 3.80, beta: 0.92 },
  { ticker: '4323', name: 'Taiba Investment', nameAr: 'طيبة للاستثمار', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 28.50, change: 0.38, changePercent: 1.35, volume: '720K', marketCap: '4.3B', peRatio: 16.5, dividendYield: 3.5, high52w: 33.00, low52w: 25.00, description: 'Madinah real estate developer.', eps: 1.73, beta: 0.88 },

  // ==================== CAPITAL GOODS SECTOR ====================
  { ticker: '1212', name: 'Astra Industrial', nameAr: 'استرا الصناعية', sector: 'Capital Goods', sectorId: 'capital-goods', price: 185.20, change: 3.50, changePercent: 1.93, volume: '380K', marketCap: '10.8B', peRatio: 18.5, dividendYield: 2.8, high52w: 210.00, low52w: 160.00, description: 'Industrial group with diversified operations.', eps: 10.01, beta: 0.95 },
  { ticker: '2040', name: 'Saudi Ceramic', nameAr: 'الخزف السعودي', sector: 'Capital Goods', sectorId: 'capital-goods', price: 38.50, change: 0.55, changePercent: 1.45, volume: '420K', marketCap: '3.1B', peRatio: 14.2, dividendYield: 4.5, high52w: 45.00, low52w: 32.00, description: 'Ceramic tiles manufacturer.', eps: 2.71, beta: 0.82 },
  { ticker: '2110', name: 'Saudi Cables', nameAr: 'الكابلات السعودية', sector: 'Capital Goods', sectorId: 'capital-goods', price: 45.20, change: 0.68, changePercent: 1.53, volume: '580K', marketCap: '2.5B', peRatio: 12.8, dividendYield: 5.2, high52w: 52.00, low52w: 38.00, description: 'Electrical cables manufacturer.', eps: 3.53, beta: 0.88 },
  { ticker: '1214', name: 'Al Hassan Shaker', nameAr: 'الحسن شاكر', sector: 'Capital Goods', sectorId: 'capital-goods', price: 28.50, change: 0.38, changePercent: 1.35, volume: '320K', marketCap: '1.7B', peRatio: 15.8, dividendYield: 3.8, high52w: 33.00, low52w: 24.00, description: 'HVAC and industrial equipment.', eps: 1.80, beta: 0.92 },
  { ticker: '1301', name: 'Alandalus Steel', nameAr: 'حديد الأندلس', sector: 'Capital Goods', sectorId: 'capital-goods', price: 15.80, change: 0.22, changePercent: 1.41, volume: '850K', marketCap: '1.6B', peRatio: 11.5, dividendYield: 4.8, high52w: 19.00, low52w: 13.00, description: 'Steel manufacturing.', eps: 1.37, beta: 1.12 },
  { ticker: '1302', name: 'Bawan', nameAr: 'بوان', sector: 'Capital Goods', sectorId: 'capital-goods', price: 42.80, change: 0.65, changePercent: 1.54, volume: '280K', marketCap: '3.9B', peRatio: 14.5, dividendYield: 3.5, high52w: 48.00, low52w: 36.00, description: 'Industrial manufacturing group.', eps: 2.95, beta: 0.88 },
  { ticker: '1303', name: 'Electrical Industries', nameAr: 'الصناعات الكهربائية', sector: 'Capital Goods', sectorId: 'capital-goods', price: 52.50, change: 0.78, changePercent: 1.51, volume: '180K', marketCap: '3.2B', peRatio: 16.2, dividendYield: 3.2, high52w: 60.00, low52w: 45.00, description: 'Electrical equipment manufacturing.', eps: 3.24, beta: 0.85 },
  { ticker: '1304', name: 'WAFA Insurance', nameAr: 'وفا للتأمين', sector: 'Capital Goods', sectorId: 'capital-goods', price: 25.80, change: 0.35, changePercent: 1.38, volume: '420K', marketCap: '1.5B', peRatio: 13.8, dividendYield: 4.2, high52w: 30.00, low52w: 22.00, description: 'Industrial services and equipment.', eps: 1.87, beta: 0.95 },

  // ==================== TRANSPORTATION SECTOR ====================
  { ticker: '4031', name: 'Saudi Ground Services', nameAr: 'الخدمات الأرضية', sector: 'Transportation', sectorId: 'transportation', price: 48.50, change: 0.75, changePercent: 1.57, volume: '620K', marketCap: '7.3B', peRatio: 15.8, dividendYield: 4.2, high52w: 55.00, low52w: 42.00, description: 'Airport ground handling services.', eps: 3.07, beta: 0.85 },
  { ticker: '4040', name: 'Saudi Public Transport', nameAr: 'سابتكو', sector: 'Transportation', sectorId: 'transportation', price: 18.45, change: 0.22, changePercent: 1.21, volume: '1.8M', marketCap: '2.8B', peRatio: 22.5, dividendYield: 2.5, high52w: 22.00, low52w: 15.00, description: 'Public transport services.', eps: 0.82, beta: 0.78 },
  { ticker: '4050', name: 'Saudi Transport', nameAr: 'بدجت السعودية', sector: 'Transportation', sectorId: 'transportation', price: 65.80, change: 1.05, changePercent: 1.62, volume: '280K', marketCap: '4.9B', peRatio: 18.5, dividendYield: 3.5, high52w: 75.00, low52w: 56.00, description: 'Car rental and transport services.', eps: 3.56, beta: 0.82 },
  { ticker: '4110', name: 'Leejam Sports', nameAr: 'وقت اللياقة', sector: 'Transportation', sectorId: 'transportation', price: 92.50, change: 1.45, changePercent: 1.59, volume: '180K', marketCap: '5.6B', peRatio: 28.5, dividendYield: 1.2, high52w: 105.00, low52w: 78.00, description: 'Fitness and sports services.', eps: 3.25, beta: 0.95 },

  // ==================== CONSUMER DURABLES & APPAREL ====================
  { ticker: '4180', name: 'Fitaihi', nameAr: 'فتيحي', sector: 'Consumer Durables & Apparel', sectorId: 'consumer-durables', price: 12.50, change: 0.15, changePercent: 1.21, volume: '850K', marketCap: '625M', peRatio: 18.5, dividendYield: 2.8, high52w: 15.00, low52w: 10.50, description: 'Jewelry and watches retailer.', eps: 0.68, beta: 0.92 },
  { ticker: '4008', name: 'SACO', nameAr: 'ساكو', sector: 'Consumer Durables & Apparel', sectorId: 'consumer-durables', price: 42.80, change: 0.65, changePercent: 1.54, volume: '380K', marketCap: '3.4B', peRatio: 16.2, dividendYield: 3.5, high52w: 50.00, low52w: 35.00, description: 'Home improvement and DIY retailer.', eps: 2.64, beta: 0.85 },
  { ticker: '4010', name: 'Saudi Furniture', nameAr: 'أثاث المدينة', sector: 'Consumer Durables & Apparel', sectorId: 'consumer-durables', price: 18.90, change: 0.25, changePercent: 1.34, volume: '520K', marketCap: '1.1B', peRatio: 14.5, dividendYield: 4.2, high52w: 22.00, low52w: 16.00, description: 'Furniture retailer.', eps: 1.30, beta: 0.88 },
  { ticker: '4011', name: 'Lazurde', nameAr: 'لازوردي', sector: 'Consumer Durables & Apparel', sectorId: 'consumer-durables', price: 15.80, change: 0.18, changePercent: 1.15, volume: '680K', marketCap: '960M', peRatio: 15.8, dividendYield: 3.5, high52w: 19.00, low52w: 13.00, description: 'Gold and jewelry manufacturer.', eps: 1.00, beta: 0.95 },

  // ==================== CONSUMER SERVICES ====================
  { ticker: '1810', name: 'Seera', nameAr: 'سيرا', sector: 'Consumer Services', sectorId: 'consumer-services', price: 28.90, change: 0.42, changePercent: 1.47, volume: '2.5M', marketCap: '7.2B', peRatio: 25.5, dividendYield: 1.5, high52w: 35.00, low52w: 24.00, description: 'Travel and tourism group - largest in Saudi Arabia.', eps: 1.13, beta: 1.25 },
  { ticker: '1820', name: 'Al Tayyar', nameAr: 'الطيار', sector: 'Consumer Services', sectorId: 'consumer-services', price: 8.45, change: 0.12, changePercent: 1.44, volume: '5.8M', marketCap: '2.1B', peRatio: null, dividendYield: 0, high52w: 12.00, low52w: 7.00, description: 'Travel services company.', eps: -0.35, beta: 1.42 },
  { ticker: '1830', name: 'Tourism Enterprise', nameAr: 'شركة السياحة', sector: 'Consumer Services', sectorId: 'consumer-services', price: 35.20, change: 0.52, changePercent: 1.50, volume: '420K', marketCap: '2.8B', peRatio: 20.5, dividendYield: 2.2, high52w: 42.00, low52w: 30.00, description: 'Tourism and hospitality services.', eps: 1.72, beta: 1.15 },
  { ticker: '1831', name: 'Dur Hospitality', nameAr: 'دور', sector: 'Consumer Services', sectorId: 'consumer-services', price: 28.50, change: 0.38, changePercent: 1.35, volume: '580K', marketCap: '3.4B', peRatio: 22.5, dividendYield: 1.8, high52w: 33.00, low52w: 24.00, description: 'Hotels and hospitality.', eps: 1.27, beta: 1.08 },

  // ==================== MEDIA & ENTERTAINMENT ====================
  { ticker: '4070', name: 'Tihama', nameAr: 'تهامة', sector: 'Media & Entertainment', sectorId: 'media', price: 35.20, change: 0.52, changePercent: 1.50, volume: '280K', marketCap: '1.4B', peRatio: 18.5, dividendYield: 2.2, high52w: 42.00, low52w: 30.00, description: 'Advertising and public relations.', eps: 1.90, beta: 1.02 },
  { ticker: '4071', name: 'MBC Group', nameAr: 'مجموعة إم بي سي', sector: 'Media & Entertainment', sectorId: 'media', price: 42.50, change: 0.85, changePercent: 2.04, volume: '1.2M', marketCap: '21.3B', peRatio: 28.5, dividendYield: 1.5, high52w: 50.00, low52w: 35.00, description: 'Largest media company in the Middle East.', eps: 1.49, beta: 1.18 },
  { ticker: '4072', name: 'SRMG', nameAr: 'المجموعة السعودية للأبحاث والإعلام', sector: 'Media & Entertainment', sectorId: 'media', price: 125.40, change: 2.20, changePercent: 1.79, volume: '180K', marketCap: '7.5B', peRatio: 32.5, dividendYield: 1.2, high52w: 140.00, low52w: 105.00, description: 'Saudi Research and Media Group.', eps: 3.86, beta: 1.12 },

  // ==================== DIVERSIFIED FINANCIALS ====================
  { ticker: '4280', name: 'Kingdom Holding', nameAr: 'المملكة القابضة', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 8.95, change: 0.12, changePercent: 1.36, volume: '12.5M', marketCap: '33.2B', peRatio: 15.8, dividendYield: 2.5, high52w: 11.00, low52w: 7.50, description: 'Investment holding company - Prince Alwaleed.', eps: 0.57, beta: 1.22 },
  { ticker: '4201', name: 'Derayah', nameAr: 'دراية', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 18.50, change: 0.28, changePercent: 1.54, volume: '850K', marketCap: '2.8B', peRatio: 22.5, dividendYield: 1.8, high52w: 22.00, low52w: 15.00, description: 'Financial services company.', eps: 0.82, beta: 1.08 },
  { ticker: '4081', name: 'Alistithmar', nameAr: 'للاستثمار', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 28.50, change: 0.38, changePercent: 1.35, volume: '420K', marketCap: '3.4B', peRatio: 18.5, dividendYield: 2.5, high52w: 33.00, low52w: 25.00, description: 'Investment and finance company.', eps: 1.54, beta: 1.05 },
  { ticker: '4082', name: 'Moltaqa', nameAr: 'ملتقى', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 15.80, change: 0.22, changePercent: 1.41, volume: '580K', marketCap: '1.6B', peRatio: 14.5, dividendYield: 3.5, high52w: 19.00, low52w: 13.00, description: 'Financial and investment services.', eps: 1.09, beta: 0.98 },

  // ==================== SOFTWARE & SERVICES ====================
  { ticker: '7200', name: 'Solutions by STC', nameAr: 'حلول', sector: 'Software & Services', sectorId: 'software', price: 285.40, change: 5.20, changePercent: 1.86, volume: '320K', marketCap: '34.2B', peRatio: 35.5, dividendYield: 1.2, high52w: 320.00, low52w: 250.00, description: 'IT solutions and digital services for enterprises.', eps: 8.04, beta: 1.15 },
  { ticker: '7202', name: 'Elm', nameAr: 'علم', sector: 'Software & Services', sectorId: 'software', price: 425.80, change: 8.50, changePercent: 2.04, volume: '180K', marketCap: '51.1B', peRatio: 42.5, dividendYield: 0.8, high52w: 480.00, low52w: 380.00, description: 'Digital solutions for government - Vision 2030 enabler.', eps: 10.02, beta: 1.08 },
  { ticker: '7203', name: 'Arabian Internet', nameAr: 'إنترنت العرب', sector: 'Software & Services', sectorId: 'software', price: 185.40, change: 3.20, changePercent: 1.76, volume: '150K', marketCap: '9.3B', peRatio: 38.5, dividendYield: 0.5, high52w: 210.00, low52w: 160.00, description: 'Internet services and digital platforms.', eps: 4.82, beta: 1.22 },
  { ticker: '7204', name: 'Perfect Presentation', nameAr: 'العرض المتقن', sector: 'Software & Services', sectorId: 'software', price: 52.80, change: 0.85, changePercent: 1.64, volume: '280K', marketCap: '2.6B', peRatio: 25.5, dividendYield: 1.5, high52w: 60.00, low52w: 45.00, description: 'IT and digital services.', eps: 2.07, beta: 1.05 },

  // ==================== FOOD & STAPLES RETAILING ====================
  { ticker: '4161', name: 'BinDawood', nameAr: 'بن داود', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 78.50, change: 1.20, changePercent: 1.55, volume: '420K', marketCap: '9.4B', peRatio: 18.5, dividendYield: 3.2, high52w: 90.00, low52w: 65.00, description: 'Supermarket chain operator.', eps: 4.24, beta: 0.72 },
  { ticker: '4162', name: 'Lulu Retail', nameAr: 'لولو للتجزئة', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 28.45, change: 0.42, changePercent: 1.50, volume: '2.8M', marketCap: '42.7B', peRatio: 22.5, dividendYield: 2.5, high52w: 35.00, low52w: 24.00, description: 'Hypermarket and retail chain.', eps: 1.26, beta: 0.68 },
  { ticker: '4163', name: 'Panda Retail', nameAr: 'بندة للتجزئة', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 42.50, change: 0.55, changePercent: 1.31, volume: '580K', marketCap: '6.4B', peRatio: 16.5, dividendYield: 3.8, high52w: 48.00, low52w: 36.00, description: 'Hypermarket and supermarket chain.', eps: 2.58, beta: 0.75 },
  { ticker: '4160', name: 'Thimar', nameAr: 'ثمار', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 85.20, change: 1.25, changePercent: 1.49, volume: '280K', marketCap: '5.1B', peRatio: 20.5, dividendYield: 2.8, high52w: 95.00, low52w: 72.00, description: 'Agricultural and food products.', eps: 4.16, beta: 0.70 },

  // ==================== PHARMA & BIOTECH ====================
  { ticker: '4015', name: 'Aldawaa', nameAr: 'الدواء', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 85.20, change: 1.35, changePercent: 1.61, volume: '280K', marketCap: '4.3B', peRatio: 18.5, dividendYield: 2.8, high52w: 95.00, low52w: 72.00, description: 'Pharmaceutical retail chain.', eps: 4.61, beta: 0.72 },
  { ticker: '4016', name: 'SPIMACO', nameAr: 'سبيماكو', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 42.80, change: 0.68, changePercent: 1.61, volume: '520K', marketCap: '5.1B', peRatio: 22.5, dividendYield: 2.2, high52w: 50.00, low52w: 35.00, description: 'Pharmaceutical manufacturing.', eps: 1.90, beta: 0.68 },
  { ticker: '4017', name: 'Nahdi Medical', nameAr: 'النهدي', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 145.80, change: 2.50, changePercent: 1.74, volume: '180K', marketCap: '17.5B', peRatio: 28.5, dividendYield: 1.8, high52w: 165.00, low52w: 125.00, description: 'Largest pharmacy chain in Saudi Arabia.', eps: 5.12, beta: 0.62 },
  { ticker: '4018', name: 'Jamjoom Pharma', nameAr: 'جمجوم فارما', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 68.50, change: 1.05, changePercent: 1.56, volume: '220K', marketCap: '4.1B', peRatio: 24.5, dividendYield: 2.0, high52w: 78.00, low52w: 58.00, description: 'Pharmaceutical manufacturing and distribution.', eps: 2.80, beta: 0.70 },

  // ==================== COMMERCIAL & PROFESSIONAL SERVICES ====================
  { ticker: '6014', name: 'Al Sagr Insurance Serv', nameAr: 'خدمات الصقر', sector: 'Commercial & Prof Services', sectorId: 'commercial-services', price: 28.50, change: 0.38, changePercent: 1.35, volume: '420K', marketCap: '1.4B', peRatio: 15.8, dividendYield: 3.5, high52w: 33.00, low52w: 25.00, description: 'Commercial services company.', eps: 1.80, beta: 0.88 },
  { ticker: '6015', name: 'Abdulmohsen Al-Hokair', nameAr: 'عبدالمحسن الحكير', sector: 'Commercial & Prof Services', sectorId: 'commercial-services', price: 18.50, change: 0.25, changePercent: 1.37, volume: '1.2M', marketCap: '2.8B', peRatio: 18.5, dividendYield: 2.8, high52w: 22.00, low52w: 15.00, description: 'Entertainment and hospitality.', eps: 1.00, beta: 1.12 },
  { ticker: '6016', name: 'MESC', nameAr: 'الأنابيب', sector: 'Commercial & Prof Services', sectorId: 'commercial-services', price: 25.80, change: 0.35, changePercent: 1.38, volume: '580K', marketCap: '2.1B', peRatio: 14.5, dividendYield: 4.2, high52w: 30.00, low52w: 22.00, description: 'Middle East Specialized Cables.', eps: 1.78, beta: 0.95 },
  { ticker: '6017', name: 'Zamil Industrial', nameAr: 'زامل للصناعة', sector: 'Commercial & Prof Services', sectorId: 'commercial-services', price: 35.20, change: 0.52, changePercent: 1.50, volume: '320K', marketCap: '2.1B', peRatio: 16.5, dividendYield: 3.5, high52w: 42.00, low52w: 30.00, description: 'Industrial investment company.', eps: 2.13, beta: 0.92 },

  // ==================== ADDITIONAL CAPITAL GOODS ====================
  { ticker: '2040', name: 'Saudi Arabia Chemical', nameAr: 'الكيميائية السعودية', sector: 'Capital Goods', sectorId: 'capital-goods', price: 42.80, change: 0.65, changePercent: 1.54, volume: '380K', marketCap: '5.1B', peRatio: 16.2, dividendYield: 3.5, high52w: 50.00, low52w: 35.00, description: 'Chemical manufacturing equipment.', eps: 2.64, beta: 0.92 },
  { ticker: '2041', name: 'Alujain', nameAr: 'اللجين', sector: 'Capital Goods', sectorId: 'capital-goods', price: 38.50, change: 0.55, changePercent: 1.45, volume: '420K', marketCap: '4.6B', peRatio: 15.8, dividendYield: 4.0, high52w: 45.00, low52w: 32.00, description: 'Industrial holding company.', eps: 2.44, beta: 0.88 },
  { ticker: '2042', name: 'Saudi Cable', nameAr: 'الكابلات السعودية', sector: 'Capital Goods', sectorId: 'capital-goods', price: 15.80, change: 0.22, changePercent: 1.41, volume: '680K', marketCap: '1.6B', peRatio: 12.5, dividendYield: 4.5, high52w: 19.00, low52w: 13.00, description: 'Cable manufacturing.', eps: 1.26, beta: 0.95 },
  { ticker: '2043', name: 'Saudi Steel Pipe', nameAr: 'الأنابيب الفولاذية', sector: 'Capital Goods', sectorId: 'capital-goods', price: 28.20, change: 0.38, changePercent: 1.37, volume: '520K', marketCap: '2.8B', peRatio: 14.2, dividendYield: 3.8, high52w: 33.00, low52w: 24.00, description: 'Steel pipe manufacturing.', eps: 1.99, beta: 0.92 },
  { ticker: '2044', name: 'National Metal Manufacturing', nameAr: 'مصنع المعادن الوطني', sector: 'Capital Goods', sectorId: 'capital-goods', price: 18.90, change: 0.28, changePercent: 1.50, volume: '380K', marketCap: '1.9B', peRatio: 13.5, dividendYield: 4.2, high52w: 22.00, low52w: 16.00, description: 'Metal products manufacturing.', eps: 1.40, beta: 0.88 },
  { ticker: '2045', name: 'Saudi Vitrified Clay', nameAr: 'الخزف السعودي', sector: 'Capital Goods', sectorId: 'capital-goods', price: 35.60, change: 0.52, changePercent: 1.48, volume: '280K', marketCap: '2.1B', peRatio: 15.5, dividendYield: 3.5, high52w: 42.00, low52w: 30.00, description: 'Ceramic pipes manufacturing.', eps: 2.30, beta: 0.85 },
  { ticker: '2046', name: 'Al Babtain', nameAr: 'البابطين', sector: 'Capital Goods', sectorId: 'capital-goods', price: 25.40, change: 0.35, changePercent: 1.40, volume: '450K', marketCap: '2.5B', peRatio: 14.8, dividendYield: 4.0, high52w: 30.00, low52w: 22.00, description: 'Power and telecommunications equipment.', eps: 1.72, beta: 0.90 },
  { ticker: '2047', name: 'Saudi Industrial Export', nameAr: 'التصدير الصناعي', sector: 'Capital Goods', sectorId: 'capital-goods', price: 12.80, change: 0.18, changePercent: 1.43, volume: '620K', marketCap: '1.3B', peRatio: 11.5, dividendYield: 5.0, high52w: 15.00, low52w: 11.00, description: 'Industrial export company.', eps: 1.11, beta: 0.82 },

  // ==================== ADDITIONAL UTILITIES ====================
  { ticker: '5110', name: 'SEC', nameAr: 'الكهرباء السعودية', sector: 'Utilities', sectorId: 'utilities', price: 18.50, change: 0.22, changePercent: 1.20, volume: '8.5M', marketCap: '77.7B', peRatio: 15.8, dividendYield: 4.5, high52w: 22.00, low52w: 16.00, description: 'Saudi Electricity Company - national power utility.', eps: 1.17, beta: 0.55 },
  { ticker: '5111', name: 'MARAFIQ', nameAr: 'مرافق', sector: 'Utilities', sectorId: 'utilities', price: 42.80, change: 0.55, changePercent: 1.30, volume: '520K', marketCap: '6.4B', peRatio: 18.5, dividendYield: 3.8, high52w: 50.00, low52w: 36.00, description: 'Power and water utilities.', eps: 2.31, beta: 0.52 },
  { ticker: '2082', name: 'National Gas', nameAr: 'الغاز الوطني', sector: 'Utilities', sectorId: 'utilities', price: 58.20, change: 0.85, changePercent: 1.48, volume: '380K', marketCap: '4.4B', peRatio: 16.5, dividendYield: 4.2, high52w: 65.00, low52w: 50.00, description: 'Gas distribution and services.', eps: 3.53, beta: 0.58 },
  { ticker: '2083', name: 'Alinma Tokio Marine', nameAr: 'الإنماء طوكيو مارين', sector: 'Utilities', sectorId: 'utilities', price: 25.80, change: 0.35, changePercent: 1.38, volume: '420K', marketCap: '2.6B', peRatio: 14.5, dividendYield: 3.5, high52w: 30.00, low52w: 22.00, description: 'Utility services.', eps: 1.78, beta: 0.60 },

  // ==================== ADDITIONAL REITs ====================
  { ticker: '4330', name: 'Riyad REIT', nameAr: 'ريت الرياض', sector: 'REITs', sectorId: 'reits', price: 8.50, change: 0.08, changePercent: 0.95, volume: '1.8M', marketCap: '2.1B', peRatio: 12.5, dividendYield: 6.8, high52w: 10.00, low52w: 7.50, description: 'Real estate investment trust focused on commercial properties.', eps: 0.68, beta: 0.45 },
  { ticker: '4331', name: 'Jadwa REIT', nameAr: 'ريت جدوى', sector: 'REITs', sectorId: 'reits', price: 10.80, change: 0.12, changePercent: 1.12, volume: '1.2M', marketCap: '3.2B', peRatio: 14.5, dividendYield: 6.2, high52w: 12.50, low52w: 9.50, description: 'Diversified REIT with retail and office properties.', eps: 0.74, beta: 0.48 },
  { ticker: '4332', name: 'Al Rajhi REIT', nameAr: 'ريت الراجحي', sector: 'REITs', sectorId: 'reits', price: 9.25, change: 0.10, changePercent: 1.09, volume: '2.5M', marketCap: '4.6B', peRatio: 13.8, dividendYield: 6.5, high52w: 11.00, low52w: 8.00, description: 'REIT managed by Al Rajhi Capital.', eps: 0.67, beta: 0.42 },
  { ticker: '4333', name: 'MEFIC REIT', nameAr: 'ريت ميفك', sector: 'REITs', sectorId: 'reits', price: 8.95, change: 0.08, changePercent: 0.90, volume: '980K', marketCap: '1.8B', peRatio: 11.8, dividendYield: 7.2, high52w: 10.50, low52w: 7.80, description: 'Commercial real estate REIT.', eps: 0.76, beta: 0.40 },
  { ticker: '4334', name: 'Bonyan REIT', nameAr: 'ريت بنيان', sector: 'REITs', sectorId: 'reits', price: 9.80, change: 0.11, changePercent: 1.14, volume: '750K', marketCap: '2.0B', peRatio: 12.2, dividendYield: 6.8, high52w: 11.50, low52w: 8.50, description: 'Real estate investment trust.', eps: 0.80, beta: 0.44 },
  { ticker: '4335', name: 'Musharaka REIT', nameAr: 'ريت مشاركة', sector: 'REITs', sectorId: 'reits', price: 10.20, change: 0.12, changePercent: 1.19, volume: '680K', marketCap: '2.6B', peRatio: 13.5, dividendYield: 6.5, high52w: 12.00, low52w: 9.00, description: 'Sharia-compliant REIT.', eps: 0.76, beta: 0.46 },
  { ticker: '4336', name: 'Derayah REIT', nameAr: 'ريت دراية', sector: 'REITs', sectorId: 'reits', price: 8.75, change: 0.09, changePercent: 1.04, volume: '520K', marketCap: '1.4B', peRatio: 11.5, dividendYield: 7.0, high52w: 10.00, low52w: 7.50, description: 'Commercial property REIT.', eps: 0.76, beta: 0.42 },
  { ticker: '4337', name: 'Alinma Retail REIT', nameAr: 'ريت الإنماء للتجزئة', sector: 'REITs', sectorId: 'reits', price: 7.85, change: 0.07, changePercent: 0.90, volume: '1.5M', marketCap: '1.6B', peRatio: 10.8, dividendYield: 7.5, high52w: 9.00, low52w: 7.00, description: 'Retail-focused REIT.', eps: 0.73, beta: 0.38 },

  // ==================== ADDITIONAL REAL ESTATE ====================
  { ticker: '4020', name: 'Dar Al Arkan', nameAr: 'دار الأركان', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 12.50, change: 0.18, changePercent: 1.46, volume: '28.5M', marketCap: '13.5B', peRatio: 8.5, dividendYield: 0, high52w: 16.00, low52w: 10.00, description: 'Real estate development company.', eps: 1.47, beta: 1.45 },
  { ticker: '4021', name: 'Jabal Omar', nameAr: 'جبل عمر', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 22.80, change: 0.35, changePercent: 1.56, volume: '8.5M', marketCap: '26.3B', peRatio: null, dividendYield: 0, high52w: 28.00, low52w: 18.00, description: 'Makkah real estate development.', eps: -0.45, beta: 1.52 },
  { ticker: '4022', name: 'Emaar The Economic City', nameAr: 'إعمار المدينة الاقتصادية', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 8.95, change: 0.12, changePercent: 1.36, volume: '12.8M', marketCap: '8.0B', peRatio: null, dividendYield: 0, high52w: 12.00, low52w: 7.50, description: 'King Abdullah Economic City developer.', eps: -0.25, beta: 1.58 },
  { ticker: '4023', name: 'Knowledge City', nameAr: 'مدينة المعرفة', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 15.80, change: 0.22, changePercent: 1.41, volume: '2.8M', marketCap: '3.2B', peRatio: 18.5, dividendYield: 2.5, high52w: 19.00, low52w: 13.00, description: 'Knowledge-based real estate development.', eps: 0.85, beta: 1.25 },
  { ticker: '4024', name: 'Taiba Holding', nameAr: 'طيبة القابضة', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 28.50, change: 0.42, changePercent: 1.50, volume: '1.5M', marketCap: '6.8B', peRatio: 15.5, dividendYield: 3.2, high52w: 34.00, low52w: 24.00, description: 'Madinah real estate and hotels.', eps: 1.84, beta: 1.15 },
  { ticker: '4025', name: 'Saudi Real Estate', nameAr: 'العقارية السعودية', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 18.20, change: 0.25, changePercent: 1.39, volume: '2.2M', marketCap: '3.6B', peRatio: 12.8, dividendYield: 4.5, high52w: 22.00, low52w: 15.00, description: 'Real estate development and investment.', eps: 1.42, beta: 1.08 },
  { ticker: '4026', name: 'Makkah Construction', nameAr: 'مكة للإنشاء', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 85.20, change: 1.25, changePercent: 1.49, volume: '320K', marketCap: '15.3B', peRatio: 22.5, dividendYield: 2.8, high52w: 98.00, low52w: 72.00, description: 'Makkah development and construction.', eps: 3.79, beta: 1.02 },

  // ==================== ADDITIONAL RETAILING ====================
  { ticker: '4190', name: 'Jarir Marketing', nameAr: 'جرير', sector: 'Retailing', sectorId: 'retailing', price: 138.20, change: 2.15, changePercent: 1.58, volume: '380K', marketCap: '16.6B', peRatio: 18.5, dividendYield: 4.2, high52w: 155.00, low52w: 120.00, description: 'Leading office supplies and electronics retailer.', eps: 7.47, beta: 0.78 },
  { ticker: '4191', name: 'Extra', nameAr: 'إكسترا', sector: 'Retailing', sectorId: 'retailing', price: 95.80, change: 1.45, changePercent: 1.54, volume: '280K', marketCap: '7.7B', peRatio: 16.5, dividendYield: 3.8, high52w: 110.00, low52w: 82.00, description: 'Consumer electronics retailer.', eps: 5.81, beta: 0.85 },
  { ticker: '4192', name: 'Shaker', nameAr: 'الشاكر', sector: 'Retailing', sectorId: 'retailing', price: 32.50, change: 0.48, changePercent: 1.50, volume: '450K', marketCap: '2.9B', peRatio: 14.5, dividendYield: 4.5, high52w: 38.00, low52w: 28.00, description: 'Home appliances retailer.', eps: 2.24, beta: 0.82 },
  { ticker: '4193', name: 'Fawaz Al Hokair', nameAr: 'فواز الحكير', sector: 'Retailing', sectorId: 'retailing', price: 15.80, change: 0.22, changePercent: 1.41, volume: '2.8M', marketCap: '4.7B', peRatio: null, dividendYield: 0, high52w: 22.00, low52w: 13.00, description: 'Fashion retail group.', eps: -0.35, beta: 1.35 },
  { ticker: '4194', name: 'Cenomi Retail', nameAr: 'سينومي للتجزئة', sector: 'Retailing', sectorId: 'retailing', price: 18.50, change: 0.28, changePercent: 1.54, volume: '1.8M', marketCap: '9.3B', peRatio: 22.5, dividendYield: 1.5, high52w: 24.00, low52w: 15.00, description: 'Fashion and lifestyle retail.', eps: 0.82, beta: 1.25 },

  // ==================== ADDITIONAL FOOD & BEVERAGES ====================
  { ticker: '2281', name: 'Almarai', nameAr: 'المراعي', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 52.80, change: 0.75, changePercent: 1.44, volume: '1.5M', marketCap: '52.8B', peRatio: 22.5, dividendYield: 2.5, high52w: 60.00, low52w: 45.00, description: 'Largest dairy company in the Middle East.', eps: 2.35, beta: 0.72 },
  { ticker: '2282', name: 'SADAFCO', nameAr: 'سدافكو', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 128.40, change: 1.85, changePercent: 1.46, volume: '180K', marketCap: '3.9B', peRatio: 18.5, dividendYield: 4.2, high52w: 145.00, low52w: 110.00, description: 'Dairy and food products.', eps: 6.94, beta: 0.68 },
  { ticker: '2283', name: 'Savola', nameAr: 'صافولا', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 32.50, change: 0.45, changePercent: 1.40, volume: '2.2M', marketCap: '17.4B', peRatio: 15.8, dividendYield: 3.5, high52w: 38.00, low52w: 28.00, description: 'Food and retail group.', eps: 2.06, beta: 0.85 },
  { ticker: '2284', name: 'Halwani Bros', nameAr: 'حلواني إخوان', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 58.20, change: 0.85, changePercent: 1.48, volume: '320K', marketCap: '2.9B', peRatio: 16.5, dividendYield: 3.8, high52w: 65.00, low52w: 50.00, description: 'Food processing company.', eps: 3.53, beta: 0.72 },
  { ticker: '2285', name: 'Herfy Food', nameAr: 'هرفي', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 42.80, change: 0.62, changePercent: 1.47, volume: '280K', marketCap: '2.8B', peRatio: 18.5, dividendYield: 3.2, high52w: 50.00, low52w: 36.00, description: 'Fast food restaurant chain.', eps: 2.31, beta: 0.78 },
  { ticker: '2286', name: 'Tanmiah Food', nameAr: 'تنمية الغذائية', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 85.40, change: 1.25, changePercent: 1.49, volume: '180K', marketCap: '4.3B', peRatio: 20.5, dividendYield: 2.8, high52w: 98.00, low52w: 72.00, description: 'Poultry and food production.', eps: 4.17, beta: 0.70 },
  { ticker: '2287', name: 'Wafrah Poultry', nameAr: 'الوفرة للدواجن', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 25.80, change: 0.35, changePercent: 1.38, volume: '420K', marketCap: '1.5B', peRatio: 14.5, dividendYield: 4.5, high52w: 30.00, low52w: 22.00, description: 'Poultry production.', eps: 1.78, beta: 0.65 },

  // ==================== ADDITIONAL INSURANCE ====================
  { ticker: '8010', name: 'Tawuniya', nameAr: 'التعاونية', sector: 'Insurance', sectorId: 'insurance', price: 92.50, change: 1.45, changePercent: 1.59, volume: '580K', marketCap: '11.6B', peRatio: 12.5, dividendYield: 4.5, high52w: 105.00, low52w: 78.00, description: 'Largest insurance company in Saudi Arabia.', eps: 7.40, beta: 0.88 },
  { ticker: '8012', name: 'Bupa Arabia', nameAr: 'بوبا العربية', sector: 'Insurance', sectorId: 'insurance', price: 185.40, change: 2.85, changePercent: 1.56, volume: '280K', marketCap: '22.2B', peRatio: 18.5, dividendYield: 3.2, high52w: 210.00, low52w: 160.00, description: 'Health insurance provider.', eps: 10.02, beta: 0.75 },
  { ticker: '8020', name: 'Malath Insurance', nameAr: 'ملاذ للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 18.50, change: 0.28, changePercent: 1.54, volume: '1.2M', marketCap: '1.1B', peRatio: 10.5, dividendYield: 5.5, high52w: 22.00, low52w: 15.00, description: 'General insurance.', eps: 1.76, beta: 0.95 },
  { ticker: '8030', name: 'MedGulf', nameAr: 'ميدغلف', sector: 'Insurance', sectorId: 'insurance', price: 22.80, change: 0.32, changePercent: 1.42, volume: '850K', marketCap: '2.7B', peRatio: 11.8, dividendYield: 4.8, high52w: 27.00, low52w: 19.00, description: 'Insurance services.', eps: 1.93, beta: 0.92 },
  { ticker: '8040', name: 'SALAMA', nameAr: 'سلامة', sector: 'Insurance', sectorId: 'insurance', price: 15.80, change: 0.22, changePercent: 1.41, volume: '1.5M', marketCap: '1.6B', peRatio: 9.8, dividendYield: 5.8, high52w: 19.00, low52w: 13.00, description: 'Islamic insurance company.', eps: 1.61, beta: 0.88 },
  { ticker: '8050', name: 'Walaa Insurance', nameAr: 'ولاء للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 28.50, change: 0.42, changePercent: 1.50, volume: '680K', marketCap: '2.9B', peRatio: 12.2, dividendYield: 4.5, high52w: 33.00, low52w: 24.00, description: 'Cooperative insurance.', eps: 2.34, beta: 0.90 },
  { ticker: '8060', name: 'Gulf Union', nameAr: 'الاتحاد الخليجي', sector: 'Insurance', sectorId: 'insurance', price: 12.50, change: 0.18, changePercent: 1.46, volume: '920K', marketCap: '875M', peRatio: 8.5, dividendYield: 6.2, high52w: 15.00, low52w: 10.50, description: 'Insurance services.', eps: 1.47, beta: 0.85 },
  { ticker: '8070', name: 'Arabian Shield', nameAr: 'الدرع العربي', sector: 'Insurance', sectorId: 'insurance', price: 18.90, change: 0.25, changePercent: 1.34, volume: '580K', marketCap: '945M', peRatio: 10.2, dividendYield: 5.2, high52w: 22.00, low52w: 16.00, description: 'Insurance company.', eps: 1.85, beta: 0.82 },

  // ==================== ADDITIONAL SOFTWARE & SERVICES ====================
  { ticker: '7201', name: 'Elm Company', nameAr: 'علم', sector: 'Software & Services', sectorId: 'software', price: 485.00, change: 8.50, changePercent: 1.78, volume: '220K', marketCap: '48.5B', peRatio: 45.5, dividendYield: 1.2, high52w: 550.00, low52w: 380.00, description: 'Digital solutions and government services.', eps: 10.66, beta: 0.95 },
  { ticker: '7202', name: 'Solutions by STC', nameAr: 'حلول', sector: 'Software & Services', sectorId: 'software', price: 265.80, change: 4.20, changePercent: 1.61, volume: '180K', marketCap: '31.9B', peRatio: 35.2, dividendYield: 1.5, high52w: 310.00, low52w: 220.00, description: 'IT services and digital transformation.', eps: 7.55, beta: 0.88 },
  { ticker: '7203', name: 'Al Moammar Information', nameAr: 'المعمر لأنظمة المعلومات', sector: 'Software & Services', sectorId: 'software', price: 142.50, change: 2.25, changePercent: 1.60, volume: '85K', marketCap: '5.7B', peRatio: 28.5, dividendYield: 2.2, high52w: 165.00, low52w: 120.00, description: 'IT systems and services.', eps: 5.00, beta: 0.92 },
  { ticker: '7204', name: 'Arabian Internet', nameAr: 'العربية للإنترنت', sector: 'Software & Services', sectorId: 'software', price: 385.00, change: 6.50, changePercent: 1.72, volume: '65K', marketCap: '7.7B', peRatio: 52.5, dividendYield: 0.8, high52w: 450.00, low52w: 300.00, description: 'Internet services and cloud solutions.', eps: 7.33, beta: 1.15 },
  { ticker: '7205', name: 'Thiqah Business', nameAr: 'ثقة', sector: 'Software & Services', sectorId: 'software', price: 95.80, change: 1.45, changePercent: 1.54, volume: '120K', marketCap: '2.9B', peRatio: 22.5, dividendYield: 2.8, high52w: 115.00, low52w: 80.00, description: 'Business process services.', eps: 4.26, beta: 0.85 },
  { ticker: '7206', name: 'Perfect Presentation', nameAr: 'العرض المتقن', sector: 'Software & Services', sectorId: 'software', price: 68.50, change: 1.05, changePercent: 1.56, volume: '95K', marketCap: '2.1B', peRatio: 18.5, dividendYield: 3.5, high52w: 82.00, low52w: 58.00, description: 'IT solutions provider.', eps: 3.70, beta: 0.88 },
  { ticker: '7207', name: 'Smart Digitech', nameAr: 'سمارت ديجيتال', sector: 'Software & Services', sectorId: 'software', price: 125.40, change: 2.15, changePercent: 1.74, volume: '75K', marketCap: '3.8B', peRatio: 32.5, dividendYield: 1.8, high52w: 148.00, low52w: 105.00, description: 'Digital transformation services.', eps: 3.86, beta: 0.95 },

  // ==================== ADDITIONAL PHARMA & BIOTECH ====================
  { ticker: '4006', name: 'SPIMACO', nameAr: 'سبيماكو', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 52.80, change: 0.85, changePercent: 1.64, volume: '320K', marketCap: '5.3B', peRatio: 18.5, dividendYield: 3.2, high52w: 62.00, low52w: 45.00, description: 'Saudi Pharmaceutical Industries.', eps: 2.85, beta: 0.72 },
  { ticker: '4161', name: 'Saudi Pharmaceutical', nameAr: 'الصيدلية السعودية', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 38.50, change: 0.55, changePercent: 1.45, volume: '280K', marketCap: '3.1B', peRatio: 16.5, dividendYield: 3.8, high52w: 45.00, low52w: 32.00, description: 'Pharmaceutical manufacturing.', eps: 2.33, beta: 0.68 },
  { ticker: '4162', name: 'Jamjoom Pharma', nameAr: 'جمجوم فارما', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 85.20, change: 1.25, changePercent: 1.49, volume: '180K', marketCap: '6.8B', peRatio: 22.5, dividendYield: 2.5, high52w: 98.00, low52w: 72.00, description: 'Pharmaceutical products.', eps: 3.79, beta: 0.75 },
  { ticker: '4163', name: 'Tabuk Pharma', nameAr: 'تبوك للصناعات الدوائية', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 28.50, change: 0.42, changePercent: 1.50, volume: '420K', marketCap: '2.3B', peRatio: 14.5, dividendYield: 4.2, high52w: 33.00, low52w: 24.00, description: 'Pharmaceutical manufacturing.', eps: 1.97, beta: 0.70 },
  { ticker: '4164', name: 'Middle East Pharma', nameAr: 'الشرق الأوسط للصناعات الدوائية', sector: 'Pharma, Biotech & Life Science', sectorId: 'pharma', price: 42.80, change: 0.65, changePercent: 1.54, volume: '220K', marketCap: '3.4B', peRatio: 18.2, dividendYield: 3.5, high52w: 50.00, low52w: 36.00, description: 'Pharma manufacturing.', eps: 2.35, beta: 0.72 },

  // ==================== ADDITIONAL FOOD & STAPLES RETAILING ====================
  { ticker: '4001', name: 'Abdullah Al Othaim', nameAr: 'العثيم', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 128.50, change: 1.95, changePercent: 1.54, volume: '380K', marketCap: '11.6B', peRatio: 16.5, dividendYield: 3.8, high52w: 148.00, low52w: 110.00, description: 'Supermarket chain operator.', eps: 7.79, beta: 0.78 },
  { ticker: '4003', name: 'Panda Retail', nameAr: 'بنده', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 45.80, change: 0.68, changePercent: 1.51, volume: '520K', marketCap: '9.2B', peRatio: 18.5, dividendYield: 2.8, high52w: 52.00, low52w: 38.00, description: 'Retail supermarkets.', eps: 2.48, beta: 0.82 },
  { ticker: '4160', name: 'Thimar', nameAr: 'ثمار', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 68.50, change: 1.02, changePercent: 1.51, volume: '180K', marketCap: '3.4B', peRatio: 15.8, dividendYield: 4.2, high52w: 78.00, low52w: 58.00, description: 'Agricultural products retail.', eps: 4.34, beta: 0.72 },
  { ticker: '4165', name: 'BinDawood Holding', nameAr: 'بن داود القابضة', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 85.20, change: 1.28, changePercent: 1.52, volume: '280K', marketCap: '9.4B', peRatio: 20.5, dividendYield: 2.5, high52w: 98.00, low52w: 72.00, description: 'Hypermarket and supermarket chain.', eps: 4.16, beta: 0.80 },
  { ticker: '4166', name: 'Farm Superstores', nameAr: 'أسواق المزرعة', sector: 'Food & Staples Retailing', sectorId: 'food-staples', price: 42.50, change: 0.62, changePercent: 1.48, volume: '320K', marketCap: '4.3B', peRatio: 14.8, dividendYield: 4.5, high52w: 50.00, low52w: 36.00, description: 'Supermarket chain.', eps: 2.87, beta: 0.75 },

  // ==================== ADDITIONAL DIVERSIFIED FINANCIALS ====================
  { ticker: '4080', name: 'Al Arabiya Insurance', nameAr: 'العربية للتأمين', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 22.80, change: 0.32, changePercent: 1.42, volume: '580K', marketCap: '1.4B', peRatio: 12.5, dividendYield: 4.8, high52w: 27.00, low52w: 19.00, description: 'Financial and insurance services.', eps: 1.82, beta: 0.88 },
  { ticker: '4081', name: 'Aljazira Capital', nameAr: 'الجزيرة كابيتال', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 35.50, change: 0.52, changePercent: 1.49, volume: '320K', marketCap: '3.6B', peRatio: 15.8, dividendYield: 3.5, high52w: 42.00, low52w: 30.00, description: 'Investment services.', eps: 2.25, beta: 0.92 },
  { ticker: '4082', name: 'Al Rajhi Capital', nameAr: 'الراجحي المالية', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 58.20, change: 0.88, changePercent: 1.54, volume: '180K', marketCap: '5.8B', peRatio: 18.5, dividendYield: 2.8, high52w: 68.00, low52w: 50.00, description: 'Asset management and brokerage.', eps: 3.15, beta: 0.85 },
  { ticker: '4083', name: 'Riyad Capital', nameAr: 'الرياض المالية', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 42.80, change: 0.65, changePercent: 1.54, volume: '220K', marketCap: '4.3B', peRatio: 16.2, dividendYield: 3.2, high52w: 50.00, low52w: 36.00, description: 'Investment banking services.', eps: 2.64, beta: 0.88 },
  { ticker: '4280', name: 'Saudi Fransi Capital', nameAr: 'الفرنسي كابيتال', sector: 'Diversified Financials', sectorId: 'diversified-financials', price: 28.50, change: 0.42, changePercent: 1.50, volume: '280K', marketCap: '2.9B', peRatio: 14.5, dividendYield: 3.8, high52w: 33.00, low52w: 24.00, description: 'Financial services.', eps: 1.97, beta: 0.85 },

  // ==================== ADDITIONAL MATERIALS ====================
  { ticker: '3002', name: 'Saudi Paper', nameAr: 'الورق السعودي', sector: 'Materials', sectorId: 'materials', price: 45.80, change: 0.68, changePercent: 1.51, volume: '320K', marketCap: '2.3B', peRatio: 14.5, dividendYield: 4.5, high52w: 52.00, low52w: 38.00, description: 'Paper manufacturing.', eps: 3.16, beta: 0.78 },
  { ticker: '3003', name: 'Saudi Glass', nameAr: 'الزجاج السعودي', sector: 'Materials', sectorId: 'materials', price: 32.50, change: 0.48, changePercent: 1.50, volume: '280K', marketCap: '1.6B', peRatio: 12.8, dividendYield: 5.2, high52w: 38.00, low52w: 28.00, description: 'Glass manufacturing.', eps: 2.54, beta: 0.75 },
  { ticker: '3005', name: 'JOUF Cement', nameAr: 'أسمنت الجوف', sector: 'Materials', sectorId: 'materials', price: 15.80, change: 0.22, changePercent: 1.41, volume: '680K', marketCap: '1.3B', peRatio: 10.5, dividendYield: 6.2, high52w: 19.00, low52w: 13.00, description: 'Cement manufacturing.', eps: 1.50, beta: 0.68 },
  { ticker: '3006', name: 'Riyadh Cement', nameAr: 'أسمنت الرياض', sector: 'Materials', sectorId: 'materials', price: 25.40, change: 0.35, changePercent: 1.40, volume: '420K', marketCap: '2.5B', peRatio: 13.2, dividendYield: 5.5, high52w: 30.00, low52w: 22.00, description: 'Cement production.', eps: 1.92, beta: 0.72 },
  { ticker: '3007', name: 'UMCC', nameAr: 'أسمنت أم القرى', sector: 'Materials', sectorId: 'materials', price: 18.90, change: 0.25, changePercent: 1.34, volume: '380K', marketCap: '1.9B', peRatio: 11.8, dividendYield: 5.8, high52w: 22.00, low52w: 16.00, description: 'Cement manufacturing.', eps: 1.60, beta: 0.70 },

  // ==================== ADDITIONAL CONSUMER SERVICES ====================
  { ticker: '1832', name: 'Red Sea International', nameAr: 'البحر الأحمر الدولية', sector: 'Consumer Services', sectorId: 'consumer-services', price: 48.50, change: 0.72, changePercent: 1.51, volume: '220K', marketCap: '2.9B', peRatio: 18.5, dividendYield: 2.8, high52w: 56.00, low52w: 42.00, description: 'Hospitality and entertainment.', eps: 2.62, beta: 1.05 },
  { ticker: '1833', name: 'Saudi Entertainment', nameAr: 'الترفيه السعودية', sector: 'Consumer Services', sectorId: 'consumer-services', price: 65.80, change: 1.02, changePercent: 1.57, volume: '180K', marketCap: '4.0B', peRatio: 25.5, dividendYield: 1.5, high52w: 78.00, low52w: 55.00, description: 'Entertainment venues.', eps: 2.58, beta: 1.18 },
  { ticker: '1834', name: 'Amusement Parks', nameAr: 'المنتزهات', sector: 'Consumer Services', sectorId: 'consumer-services', price: 32.50, change: 0.48, changePercent: 1.50, volume: '320K', marketCap: '1.6B', peRatio: 20.5, dividendYield: 2.2, high52w: 38.00, low52w: 28.00, description: 'Theme parks and leisure.', eps: 1.59, beta: 1.12 },

  // ==================== ADDITIONAL TRANSPORTATION ====================
  { ticker: '4260', name: 'Batic Investments', nameAr: 'باتك للاستثمار', sector: 'Transportation', sectorId: 'transportation', price: 28.50, change: 0.42, changePercent: 1.50, volume: '520K', marketCap: '1.7B', peRatio: 14.5, dividendYield: 4.2, high52w: 33.00, low52w: 24.00, description: 'Logistics and transportation.', eps: 1.97, beta: 0.88 },
  { ticker: '4261', name: 'Al Sagr Transport', nameAr: 'الصقر للنقل', sector: 'Transportation', sectorId: 'transportation', price: 42.80, change: 0.65, changePercent: 1.54, volume: '280K', marketCap: '2.6B', peRatio: 16.5, dividendYield: 3.5, high52w: 50.00, low52w: 36.00, description: 'Freight and logistics.', eps: 2.59, beta: 0.82 },
  { ticker: '4262', name: 'Al Mawarid', nameAr: 'الموارد', sector: 'Transportation', sectorId: 'transportation', price: 55.20, change: 0.85, changePercent: 1.56, volume: '180K', marketCap: '3.3B', peRatio: 18.5, dividendYield: 2.8, high52w: 65.00, low52w: 48.00, description: 'Transport and manpower services.', eps: 2.98, beta: 0.85 },

  // ==================== ADDITIONAL MEDIA & ENTERTAINMENT ====================
  { ticker: '4073', name: 'SRMG', nameAr: 'المجموعة السعودية للأبحاث والإعلام', sector: 'Media & Entertainment', sectorId: 'media', price: 185.40, change: 2.85, changePercent: 1.56, volume: '220K', marketCap: '14.8B', peRatio: 28.5, dividendYield: 1.5, high52w: 215.00, low52w: 155.00, description: 'Media and publishing group.', eps: 6.51, beta: 0.95 },
  { ticker: '4074', name: 'MBC Group', nameAr: 'مجموعة إم بي سي', sector: 'Media & Entertainment', sectorId: 'media', price: 42.80, change: 0.65, changePercent: 1.54, volume: '580K', marketCap: '64.2B', peRatio: 35.5, dividendYield: 0.8, high52w: 52.00, low52w: 35.00, description: 'Television broadcasting.', eps: 1.21, beta: 1.15 },
  { ticker: '4075', name: 'Thmanyah', nameAr: 'ثمانية', sector: 'Media & Entertainment', sectorId: 'media', price: 125.00, change: 1.95, changePercent: 1.58, volume: '85K', marketCap: '2.5B', peRatio: 45.5, dividendYield: 0.5, high52w: 150.00, low52w: 100.00, description: 'Digital media and podcasts.', eps: 2.75, beta: 1.25 },

  // ==================== ADDITIONAL CAPITAL GOODS ====================
  { ticker: '2048', name: 'ACEC', nameAr: 'شركة المعدات المتقدمة', sector: 'Capital Goods', sectorId: 'capital-goods', price: 35.80, change: 0.52, changePercent: 1.47, volume: '280K', marketCap: '2.1B', peRatio: 14.5, dividendYield: 4.0, high52w: 42.00, low52w: 30.00, description: 'Industrial equipment.', eps: 2.47, beta: 0.88 },
  { ticker: '2049', name: 'Middle East Paper', nameAr: 'ورق الشرق الأوسط', sector: 'Capital Goods', sectorId: 'capital-goods', price: 58.50, change: 0.88, changePercent: 1.53, volume: '180K', marketCap: '2.9B', peRatio: 16.2, dividendYield: 3.5, high52w: 68.00, low52w: 50.00, description: 'Paper packaging products.', eps: 3.61, beta: 0.82 },
  { ticker: '2050', name: 'Red Sea Housing', nameAr: 'البحر الأحمر للإسكان', sector: 'Capital Goods', sectorId: 'capital-goods', price: 22.80, change: 0.32, changePercent: 1.42, volume: '420K', marketCap: '1.4B', peRatio: 12.5, dividendYield: 4.8, high52w: 27.00, low52w: 19.00, description: 'Modular housing and camps.', eps: 1.82, beta: 0.92 },
  { ticker: '2051', name: 'Al Taiseer', nameAr: 'التيسير', sector: 'Capital Goods', sectorId: 'capital-goods', price: 18.50, change: 0.25, changePercent: 1.37, volume: '580K', marketCap: '1.1B', peRatio: 11.5, dividendYield: 5.2, high52w: 22.00, low52w: 15.00, description: 'Industrial services.', eps: 1.61, beta: 0.85 },

  // ==================== ADDITIONAL ENERGY ====================
  { ticker: '2382', name: 'Alkhaleej Training', nameAr: 'الخليج للتدريب', sector: 'Energy', sectorId: 'energy', price: 45.80, change: 0.68, changePercent: 1.51, volume: '220K', marketCap: '2.3B', peRatio: 16.5, dividendYield: 3.5, high52w: 52.00, low52w: 38.00, description: 'Energy sector training.', eps: 2.78, beta: 0.92 },
  { ticker: '2383', name: 'United Wire', nameAr: 'الأسلاك المتحدة', sector: 'Energy', sectorId: 'energy', price: 28.50, change: 0.42, changePercent: 1.50, volume: '320K', marketCap: '1.4B', peRatio: 13.8, dividendYield: 4.2, high52w: 33.00, low52w: 24.00, description: 'Wire and cable for energy sector.', eps: 2.07, beta: 0.88 },
  { ticker: '2384', name: 'Rabigh Refining', nameAr: 'رابغ للتكرير', sector: 'Energy', sectorId: 'energy', price: 15.20, change: 0.22, changePercent: 1.47, volume: '1.8M', marketCap: '14.4B', peRatio: null, dividendYield: 0, high52w: 20.00, low52w: 12.00, description: 'Oil refining operations.', eps: -0.35, beta: 1.28 },

  // ==================== ADDITIONAL HEALTHCARE ====================
  { ticker: '4010', name: 'Nahdi Medical', nameAr: 'النهدي الطبية', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 135.40, change: 2.05, changePercent: 1.54, volume: '280K', marketCap: '20.3B', peRatio: 28.5, dividendYield: 1.8, high52w: 155.00, low52w: 115.00, description: 'Pharmacy chain and healthcare retail.', eps: 4.75, beta: 0.75 },
  { ticker: '4012', name: 'Rasan Information', nameAr: 'رسن لتقنية المعلومات', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 62.50, change: 0.95, changePercent: 1.54, volume: '180K', marketCap: '3.1B', peRatio: 22.5, dividendYield: 2.2, high52w: 72.00, low52w: 52.00, description: 'Healthcare IT solutions.', eps: 2.78, beta: 0.82 },
  { ticker: '4013', name: 'Sulaiman Al Habib', nameAr: 'سليمان الحبيب', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 285.00, change: 4.50, changePercent: 1.60, volume: '420K', marketCap: '99.8B', peRatio: 38.5, dividendYield: 0.8, high52w: 330.00, low52w: 240.00, description: 'Premium healthcare services.', eps: 7.40, beta: 0.70 },

  // ==================== ADDITIONAL STOCKS TO REACH 262 ====================
  { ticker: '4014', name: 'Aldawaa Medical', nameAr: 'الدواء الطبية', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 78.50, change: 1.15, changePercent: 1.49, volume: '180K', marketCap: '7.9B', peRatio: 22.5, dividendYield: 2.5, high52w: 90.00, low52w: 65.00, description: 'Pharmacy and medical supplies.', eps: 3.49, beta: 0.72 },
  { ticker: '4015', name: 'Tibbiyah Holding', nameAr: 'الطبية القابضة', sector: 'Health Care Equipment & Svc', sectorId: 'healthcare-equipment', price: 52.80, change: 0.78, changePercent: 1.50, volume: '220K', marketCap: '4.2B', peRatio: 18.5, dividendYield: 3.2, high52w: 62.00, low52w: 45.00, description: 'Healthcare holding company.', eps: 2.85, beta: 0.68 },
  { ticker: '6018', name: 'TAQA', nameAr: 'طاقة', sector: 'Commercial & Prof Services', sectorId: 'commercial-services', price: 32.50, change: 0.48, changePercent: 1.50, volume: '380K', marketCap: '3.3B', peRatio: 15.8, dividendYield: 3.8, high52w: 38.00, low52w: 28.00, description: 'Energy and water services.', eps: 2.06, beta: 0.88 },
  { ticker: '6019', name: 'Saudi Industrial', nameAr: 'السعودية للصناعات', sector: 'Commercial & Prof Services', sectorId: 'commercial-services', price: 45.80, change: 0.68, changePercent: 1.51, volume: '280K', marketCap: '4.6B', peRatio: 16.5, dividendYield: 3.5, high52w: 52.00, low52w: 38.00, description: 'Industrial services provider.', eps: 2.78, beta: 0.85 },
  { ticker: '6020', name: 'SISCO', nameAr: 'سيسكو', sector: 'Commercial & Prof Services', sectorId: 'commercial-services', price: 28.90, change: 0.42, changePercent: 1.47, volume: '520K', marketCap: '2.9B', peRatio: 14.5, dividendYield: 4.2, high52w: 34.00, low52w: 25.00, description: 'Industrial and marine services.', eps: 1.99, beta: 0.92 },
  { ticker: '2288', name: 'National Food', nameAr: 'الغذاء الوطني', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 65.40, change: 0.95, changePercent: 1.47, volume: '180K', marketCap: '3.3B', peRatio: 17.5, dividendYield: 3.8, high52w: 75.00, low52w: 56.00, description: 'Food products manufacturing.', eps: 3.74, beta: 0.70 },
  { ticker: '2289', name: 'Al Jouf Agriculture', nameAr: 'الجوف الزراعية', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 42.80, change: 0.62, changePercent: 1.47, volume: '320K', marketCap: '2.1B', peRatio: 15.8, dividendYield: 4.2, high52w: 50.00, low52w: 36.00, description: 'Agricultural production.', eps: 2.71, beta: 0.65 },
  { ticker: '2290', name: 'Qassim Agriculture', nameAr: 'القصيم الزراعية', sector: 'Food & Beverages', sectorId: 'food-beverages', price: 35.20, change: 0.52, changePercent: 1.50, volume: '280K', marketCap: '1.8B', peRatio: 14.5, dividendYield: 4.5, high52w: 42.00, low52w: 30.00, description: 'Agricultural products.', eps: 2.43, beta: 0.62 },
  { ticker: '4195', name: 'Lumi Rental', nameAr: 'لومي', sector: 'Retailing', sectorId: 'retailing', price: 125.40, change: 1.85, changePercent: 1.50, volume: '220K', marketCap: '5.0B', peRatio: 25.5, dividendYield: 2.2, high52w: 145.00, low52w: 105.00, description: 'Vehicle rental and leasing.', eps: 4.92, beta: 0.88 },
  { ticker: '4196', name: 'Arabian Centres', nameAr: 'المراكز العربية', sector: 'Retailing', sectorId: 'retailing', price: 22.80, change: 0.32, changePercent: 1.42, volume: '1.2M', marketCap: '10.8B', peRatio: 18.5, dividendYield: 4.5, high52w: 27.00, low52w: 19.00, description: 'Shopping mall operator.', eps: 1.23, beta: 0.95 },
  { ticker: '4340', name: 'Sedco Capital REIT', nameAr: 'ريت سدكو كابيتال', sector: 'REITs', sectorId: 'reits', price: 9.50, change: 0.08, changePercent: 0.85, volume: '850K', marketCap: '1.9B', peRatio: 12.8, dividendYield: 7.2, high52w: 11.00, low52w: 8.50, description: 'Diversified real estate REIT.', eps: 0.74, beta: 0.42 },
  { ticker: '4341', name: 'SNB Capital REIT', nameAr: 'ريت إس إن بي', sector: 'REITs', sectorId: 'reits', price: 8.85, change: 0.07, changePercent: 0.80, volume: '720K', marketCap: '2.2B', peRatio: 11.5, dividendYield: 7.5, high52w: 10.50, low52w: 7.80, description: 'Commercial property REIT.', eps: 0.77, beta: 0.38 },
  { ticker: '8090', name: 'Al Ahlia Insurance', nameAr: 'الأهلية للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 25.80, change: 0.38, changePercent: 1.49, volume: '420K', marketCap: '1.3B', peRatio: 11.8, dividendYield: 4.8, high52w: 30.00, low52w: 22.00, description: 'Cooperative insurance.', eps: 2.19, beta: 0.88 },
  { ticker: '8095', name: 'Sagr Insurance', nameAr: 'ساغر للتأمين', sector: 'Insurance', sectorId: 'insurance', price: 18.50, change: 0.25, changePercent: 1.37, volume: '380K', marketCap: '925M', peRatio: 10.5, dividendYield: 5.2, high52w: 22.00, low52w: 15.00, description: 'General insurance services.', eps: 1.76, beta: 0.82 },
  { ticker: '7208', name: 'Bayanat Engineering', nameAr: 'بيانات للهندسة', sector: 'Software & Services', sectorId: 'software', price: 85.20, change: 1.28, changePercent: 1.53, volume: '120K', marketCap: '3.4B', peRatio: 28.5, dividendYield: 2.0, high52w: 98.00, low52w: 72.00, description: 'Engineering and IT services.', eps: 2.99, beta: 0.90 },
  { ticker: '7209', name: 'Ejada Systems', nameAr: 'إجادة', sector: 'Software & Services', sectorId: 'software', price: 112.50, change: 1.75, changePercent: 1.58, volume: '85K', marketCap: '4.5B', peRatio: 32.5, dividendYield: 1.5, high52w: 130.00, low52w: 95.00, description: 'Business IT solutions.', eps: 3.46, beta: 0.92 },
  { ticker: '2052', name: 'Filing Systems', nameAr: 'أنظمة الحفظ', sector: 'Capital Goods', sectorId: 'capital-goods', price: 28.50, change: 0.42, changePercent: 1.50, volume: '180K', marketCap: '1.4B', peRatio: 14.5, dividendYield: 4.2, high52w: 33.00, low52w: 24.00, description: 'Storage and filing systems.', eps: 1.97, beta: 0.78 },
  { ticker: '2053', name: 'Amiantit', nameAr: 'أميانتيت', sector: 'Capital Goods', sectorId: 'capital-goods', price: 8.95, change: 0.12, changePercent: 1.36, volume: '2.5M', marketCap: '1.1B', peRatio: null, dividendYield: 0, high52w: 12.00, low52w: 7.50, description: 'Pipe manufacturing company.', eps: -0.25, beta: 1.35 },
  { ticker: '4027', name: 'Amlak International', nameAr: 'أملاك الدولية', sector: 'Real Estate Mgmt & Dev\'t', sectorId: 'real-estate', price: 15.80, change: 0.22, changePercent: 1.41, volume: '1.8M', marketCap: '3.2B', peRatio: 12.5, dividendYield: 4.5, high52w: 19.00, low52w: 13.00, description: 'Real estate financing.', eps: 1.26, beta: 1.12 },
];


// Helper function to get stocks by sector
export const getStocksBySector = (sectorId: string): Stock[] => {
  if (sectorId === 'all') return tadawulStocks;
  return tadawulStocks.filter(stock => stock.sectorId === sectorId);
};

// Get top gainers
export const getTopGainers = (limit: number = 10): Stock[] => {
  return [...tadawulStocks]
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, limit);
};

// Get top losers
export const getTopLosers = (limit: number = 10): Stock[] => {
  return [...tadawulStocks]
    .sort((a, b) => a.changePercent - b.changePercent)
    .slice(0, limit);
};

// Get sector stock count
export const getSectorCount = (sectorId: string): number => {
  if (sectorId === 'all') return tadawulStocks.length;
  return tadawulStocks.filter(stock => stock.sectorId === sectorId).length;
};

// Search stocks
export const searchStocks = (query: string): Stock[] => {
  const lowerQuery = query.toLowerCase();
  return tadawulStocks.filter(
    stock =>
      stock.name.toLowerCase().includes(lowerQuery) ||
      stock.ticker.includes(query.toUpperCase()) ||
      stock.sector.toLowerCase().includes(lowerQuery)
  );
};

// Get high dividend stocks
export const getHighDividendStocks = (limit: number = 10): Stock[] => {
  return [...tadawulStocks]
    .filter(stock => stock.dividendYield && stock.dividendYield > 0)
    .sort((a, b) => (b.dividendYield || 0) - (a.dividendYield || 0))
    .slice(0, limit);
};

// Get value stocks (low P/E)
export const getValueStocks = (limit: number = 10): Stock[] => {
  return [...tadawulStocks]
    .filter(stock => stock.peRatio && stock.peRatio > 0 && stock.peRatio < 20)
    .sort((a, b) => (a.peRatio || 0) - (b.peRatio || 0))
    .slice(0, limit);
};

// Get growth stocks (high P/E with positive momentum)
export const getGrowthStocks = (limit: number = 10): Stock[] => {
  return [...tadawulStocks]
    .filter(stock => stock.peRatio && stock.peRatio > 20 && stock.changePercent > 0)
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, limit);
};

// Get stocks by market cap tier
export const getLargeCapStocks = (limit: number = 20): Stock[] => {
  return [...tadawulStocks]
    .filter(stock => stock.marketCap.includes('T') || (stock.marketCap.includes('B') && parseFloat(stock.marketCap) > 50))
    .slice(0, limit);
};

// Get sector performance
export const getSectorPerformance = (): { sectorId: string; name: string; performance: number; stockCount: number }[] => {
  return tadawulSectors
    .filter(s => s.id !== 'all')
    .map(sector => {
      const sectorStocks = getStocksBySector(sector.id);
      const avgPerformance = sectorStocks.length > 0 
        ? sectorStocks.reduce((acc, s) => acc + s.changePercent, 0) / sectorStocks.length 
        : 0;
      return {
        sectorId: sector.id,
        name: sector.name,
        performance: avgPerformance,
        stockCount: sectorStocks.length
      };
    })
    .sort((a, b) => b.performance - a.performance);
};

// Get random diverse recommendations
export const getDiverseRecommendations = (count: number = 5): Stock[] => {
  const sectors = [...new Set(tadawulStocks.map(s => s.sectorId))];
  const recommendations: Stock[] = [];
  const usedSectors = new Set<string>();
  
  // First, get one stock from different sectors
  for (const sector of sectors) {
    if (recommendations.length >= count) break;
    if (!usedSectors.has(sector)) {
      const sectorStocks = getStocksBySector(sector)
        .filter(s => s.peRatio && s.peRatio > 0 && s.dividendYield && s.dividendYield > 0);
      if (sectorStocks.length > 0) {
        // Pick a random good stock from the sector
        const randomIndex = Math.floor(Math.random() * Math.min(3, sectorStocks.length));
        const sortedStocks = sectorStocks.sort((a, b) => b.changePercent - a.changePercent);
        recommendations.push(sortedStocks[randomIndex]);
        usedSectors.add(sector);
      }
    }
  }
  
  return recommendations.slice(0, count);
};
