# LIFTOFF™ - Next.js 15 App

A premium digital product studio website built with Next.js 15, TypeScript, and Tailwind CSS v3.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v3** for styling
- **Lucide React** for icons
- Custom cursor effects
- 3D terrain canvas animation
- Smooth scroll animations
- Responsive design

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   ├── About.tsx        # About/Studio section
│   ├── CustomCursor.tsx # Custom cursor component
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section
│   ├── MarqueeText.tsx  # Infinite scrolling text
│   ├── Navigation.tsx   # Navigation bar
│   ├── Scanline.tsx     # Scanline overlay
│   ├── Services.tsx     # Services section
│   ├── TerrainCanvas.tsx # 3D terrain canvas
│   ├── TickerTape.tsx   # Ticker tape component
│   ├── TimeDisplay.tsx  # Time display component
│   └── Work.tsx         # Work/Projects section
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v3
- Lucide React

## License

ISC

