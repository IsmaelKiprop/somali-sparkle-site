# Somali Youth Party (SYP) - Xisbiga Dhallinyarada Soomaaliyeed

**Hal Qaran. Hal Mustaqbal.**

A modern political party website for the Somali Youth Party, built to engage and mobilize Somalia's next generation of leaders.

## 🌐 Live Demo

**URL**: https://somali-sparkle-site.vercel.app/

## 📋 Project Overview

The Somali Youth Party (SYP) website is a comprehensive digital platform designed to:
- Present the party's vision and mission
- Showcase leadership team members
- Manage events and campaigns
- Enable member registration
- Provide information about party agenda and initiatives
- Engage with supporters through integrated chatbot features

## 🚀 Key Features

- **Multi-page Navigation**: Home, About, Agenda, Events, Leadership, Registration
- **Admin Dashboard**: CMS-like functionality for content management
- **Event Management**: Campaign and event organization
- **Member Registration**: User onboarding and data collection
- **Integrated Chatbot**: AI-powered assistance for visitors
- **Responsive Design**: Optimized for all devices
- **Smooth Animations**: Modern UI transitions and interactions
- **SEO Optimized**: Meta tags and structured data for search engines

## 🛠️ Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **Database**: Supabase for backend services
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Markdown**: React Markdown with GitHub Flavored Markdown

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── AboutPageFull.tsx
│   ├── Agenda.tsx
│   ├── Events.tsx
│   ├── LeadershipTeam.tsx
│   ├── Register.tsx
│   └── Candidate.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── integrations/       # External service integrations
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd somali-sparkle-site

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌍 Deployment

### Production Deployment

The project is currently deployed on Vercel:
- **Live URL**: https://somali-sparkle-site.vercel.app/

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Custom Domain Setup

To connect a custom domain:
1. Navigate to your hosting provider's domain settings
2. Add DNS records pointing to the deployment
3. Configure SSL certificates
4. Update environment variables if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and belongs to the Somali Youth Party (SYP).

## 📞 Contact

- **Website**: https://somali-sparkle-site.vercel.app/
- **Email**: info@somaliparty.so
- **Social Media**: @SomaliYouthParty

---

**Hal Qaran. Hal Mustaqbal.**
