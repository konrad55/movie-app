# Movie Database 🍿📽️

A modern, responsive web application for discovering movies and exploring detailed information about them. Built with Next.js 14 and powered by The Movie Database (TMDB) API.

[🚀 Live Demo](https://moviedbapp55.netlify.app/)

## ✨ Features

- **Movie Discovery**: Browse through thousands of movies with real-time data from TMDB API
- **Advanced Filtering**: Filter movies by genre, release year, and multiple sorting options
- **Smart Search**: Search for movies with debounced input for optimal performance
- **Detailed Information**: View comprehensive movie details including cast, crew, ratings, and more
- **Pagination**: Navigate through large movie collections with intuitive pagination controls
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices
- **Optimized Performance**: Implements SWR for efficient data fetching and caching
- **Modern UI**: Beautiful interface built with Shadcn UI components and Tailwind CSS
- **Type Safety**: Full TypeScript implementation for better developer experience

## 🛠️ Technologies

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Data Fetching & State
- **[SWR](https://swr.vercel.app/)** - React Hooks for data fetching
- **[Axios](https://axios-http.com/)** - HTTP client

### Testing
- **[Vitest](https://vitest.dev/)** - Unit testing framework
- **[Testing Library](https://testing-library.com/)** - Testing utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/movie-app.git
cd movie-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory and add your TMDB API credentials:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
NEXT_PUBLIC_TMDB_API_URL=https://api.themoviedb.org/3
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest

## 🏗️ Project Structure

```
movie-app/
├── src/
│   ├── actions/          # Server actions
│   ├── app/              # Next.js app directory
│   │   ├── api/          # API routes
│   │   ├── movie/        # Movie detail pages
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/           # Shadcn UI components
│   │   └── tests/        # Component tests
│   ├── hooks/            # Custom React hooks
│   ├── icons/            # Custom icon components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── package.json
```

## 🎨 Features in Detail

### Filtering & Sorting
- Filter by genre (Action, Comedy, Drama, etc.)
- Filter by release year
- Sort by popularity (ascending/descending)
- Sort by vote average (ascending/descending)
- Sort by release date (ascending/descending)

### Movie Details
- Movie poster and backdrop images
- Release date and runtime
- Vote average and vote count
- Overview and tagline
- Cast and crew information
- Genres and production details

### User Experience
- Debounced search to reduce API calls
- Loading skeletons for better perceived performance
- Error handling and fallback states
- Mobile-friendly drawer for filters
- Smooth pagination navigation

## 🧪 Testing

The project includes unit tests for components and hooks using Vitest and Testing Library.

Run tests:
```bash
npm run test
```

## 🌐 API

This application uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

## 📧 Contact

Konrad - [konrad2381@gmail.com](mailto:konrad2381@gmail.com)

Project Link: [https://github.com/konrad55/movie-app](https://github.com/konrad55/movie-app)

---

**Note**: This project is for educational purposes and uses TMDB API. All movie data and images are property of their respective owners.
