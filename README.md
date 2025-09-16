# This is a work in progress and we are seeking contributors!!!

# सत्यसंग्रह (Satyasangraha) - Anti-Corruption Platform for Nepal

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

**सत्यसंग्रह** (Satyasangraha) - meaning "truth-force" or "holding onto truth" - is a civic technology platform designed to empower Nepali citizens in the fight against corruption through secure, anonymous reporting and data-driven transparency.

## 🇳🇵 About the Project

Born from Nepal's September 2025 youth-led anti-corruption protests, this platform addresses the critical gap in digital tools for transparency and accountability in Nepal. With 40% of Nepal's population belonging to Generation Z and no specialized corruption reporting platforms currently operating, Satyasangraha provides a culturally-sensitive, mobile-first solution for systemic change.

### Mission Statement

To create a safe, accessible, and culturally-appropriate platform that empowers Nepali citizens to report corruption, access educational resources about their rights, and contribute to data-driven transparency initiatives.

## ✨ Key Features

### 🔒 Secure Reporting System
- **Anonymous reporting** with multiple privacy levels
- **Multi-modal input** supporting text, voice, and photo evidence
- **Progressive disclosure** allowing users to add details gradually
- **Offline capability** with automatic sync when connected

### 📊 Data Visualization & Analytics
- **Interactive heat maps** showing corruption patterns across Nepal's districts
- **Real-time statistics** tracking reports, prevention, and impact
- **Department-wise analytics** comparing government agency performance
- **Trend analysis** correlating corruption with political and economic events

### 🎓 Educational Resources
- **Know Your Rights** section explaining RTI procedures and legal protections
- **Service guides** detailing proper government procedures
- **Safety resources** for whistleblower protection
- **Success stories** highlighting positive outcomes

### 🌐 Cultural Adaptation
- **Bilingual interface** (English/Nepali) with Roman Nepali priority
- **Cultural design elements** incorporating Nepal's flag colors and mountain imagery
- **Mobile-first design** optimized for Nepal's 96% mobile internet usage
- **Low-bandwidth optimization** for rural connectivity

## 🛠 Technology Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS with custom Nepal-themed design system
- **UI Components**: shadcn/ui with cultural customizations
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/codefornepal/satyasangraha.git
   cd satyasangraha
   ```

2. **Install dependencies**
   ```
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   DATABASE_URL=your_database_url
   ENCRYPTION_KEY=your_encryption_key
   ```

4. **Run the development server**
   ```
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### For Citizens
1. **Report Corruption**: Use the anonymous reporting system to document incidents
2. **Explore Data**: View corruption trends and patterns in your area
3. **Learn Rights**: Access educational resources about legal protections
4. **Track Impact**: Follow up on reports and see community impact

### For Journalists
1. **Access Data**: Use the analytics dashboard for investigative reporting
2. **Verify Sources**: Connect with verified reports while protecting anonymity
3. **Export Data**: Download datasets for in-depth analysis

### For Government Officials
1. **Monitor Performance**: View department-wise transparency metrics
2. **Identify Issues**: Spot systemic problems requiring attention
3. **Track Improvements**: Measure progress in corruption reduction

## 🔐 Security & Privacy

This platform prioritizes user safety and data protection:

- **End-to-end encryption** for all sensitive communications
- **Anonymous reporting** with no personal data collection
- **Secure hosting** with servers outside Nepal's jurisdiction
- **Legal protection resources** connecting users with human rights organizations

## 📊 Impact Metrics

Track the platform's effectiveness through:
- Number of corruption reports filed
- Government responses to reports
- Policy changes influenced by data
- User safety and satisfaction metrics
- Media coverage and public awareness

## 🏛 Government Integration

The platform is designed to complement, not replace, existing government transparency initiatives:

- Integration with Hello Sarkar complaint system
- Compatibility with CIAA reporting procedures
- Support for Right to Information (RTI) requests
- Collaboration with transparency initiatives


*Built with ❤️ for Nepal's democratic future*
