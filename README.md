# AI for Everyone - Kerala

A statewide initiative to democratize AI knowledge and empower **1 lakh+ learners** across Kerala to become creators, not just consumers of AI technology.

🌐 **Live Website**: [https://aiforeveryone-tinkerhub.vercel.app](https://aiforeveryone-tinkerhub.vercel.app)

## About the Campaign

**AI for Everyone - Kerala** is a collaborative movement designed to make AI literacy accessible to all Keralites, regardless of age, background, or technical expertise. The campaign is powered by [TinkerHub](https://tinkerhub.org), Kerala's largest community of tinkerers, makers, and innovators.

### Our Mission

- **Literacy for All**: Making AI knowledge accessible to students, workers, elders, and everyone in between
- **Creators Not Consumers**: Empowering learners to create AI solutions for local challenges
- **Knowledge as Public Good**: Building a movement where AI education is free, open, and community-driven

### Our Approach

True learning engages the **Head, Hand, and Heart**:

1. **Head — Understand**: Learn how AI works and why it matters in everyday life
2. **Hand — Build**: Experiment with AI tools, create projects, and solve local problems through hands-on learning
3. **Heart — Create & Share**: Share knowledge, mentor others, and help build an inclusive AI-powered future for Kerala

### Target Audience

- **KuttyMakers** (Ages 10-17): Foundational AI concepts through interactive workshops and fun projects
- **Young Makers** (College Students): Problem-solving and building solutions through hackathons and mentorship
- **Friends of the Movement** (Educators, Professionals, Parents): Understanding AI's impact and guiding the next generation

## Project Setup

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/) or install using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** (comes with Node.js) or **bun** (optional)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd ai-for-kerala
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if using bun:
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or if using bun:
   ```bash
   bun run dev
   ```

4. **Open your browser**
   - The development server will start on `http://localhost:8080`
   - The page will automatically reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technology Stack

This project is built with modern web technologies:

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - High-quality component library
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management

## Project Structure

```
ai-for-kerala/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Feature components
│   ├── pages/          # Page components
│   ├── assets/         # Images and static assets
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static files
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Deployment

This project is deployed on **Vercel**. The site is automatically deployed when changes are pushed to the main branch.

**Live URL**: [https://aiforeveryone-tinkerhub.vercel.app](https://aiforeveryone-tinkerhub.vercel.app)

### Manual Deployment

To deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the production-ready files

3. Deploy to your preferred hosting service (Vercel, Netlify, etc.)

## Contributing

We welcome contributions! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact & Partnership

For partnership opportunities or inquiries:

- **Email**: hello@tinkerhub.org
- **Website**: [tinkerhub.org](https://tinkerhub.org)
- **Twitter**: [@tinkerhub](https://twitter.com/tinkerhub)

## License

This project is part of the AI for Everyone - Kerala campaign, powered by TinkerHub.

---

**Together, let's build Kerala's AI-literate future!** 🚀
