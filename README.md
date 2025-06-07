## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd ReactPortfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── assets/        # Static assets like images, fonts, etc.
├── components/    # Reusable UI components
├── contexts/      # React context providers
├── data/          # Data files for projects, skills, etc.
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── pages/         # Page components
├── styles/        # Global styles and theme
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # Main App component
└── index.tsx      # Entry point
```

## Building for Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the compiled assets.

## Deployment

This site can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

## Built With

- React
- TypeScript
- React Router
- Styled Components
- Tailwind CSS
- shadcn/ui

## License

This project is licensed under the MIT License - see the LICENSE file for details.
