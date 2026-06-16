# Aziz — Cloud Engineer Portfolio

Personal portfolio site for **Mouhamed Aziz Mejri**, a Cloud Computing & IT Architecture student focused on scalable infrastructure, automation, and reliable systems.

Built with Next.js, React, and Tailwind CSS. Includes light/dark mode, animated sections, and Docker support for production deployment.

## Live preview

After deployment, the site runs at `http://localhost:3000` locally or on your hosting platform of choice.

## Features

- **Hero** — introduction with 3D character and quick navigation
- **Command Center** — animated terminal-style profile summary
- **Projects** — showcase of CloudAura, YallaTN, TRIPIFLY, and FoodLik with interactive detail views
- **Education** — academic background and timeline
- **Experience** — internships at SONEDE, Polina, and Tunisie Telecom
- **Skills** — filterable tech stack (Kubernetes, Docker, OpenStack, Ansible, CI/CD, and more)
- **Contact** — email form and social links
- **Theme** — system-aware light/dark mode

## Tech stack

| Layer | Technologies |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/), shadcn/ui |
| Animation | [Motion](https://motion.dev/) |
| Package manager | [pnpm](https://pnpm.io/) |
| Containerization | Docker (multi-stage build) |

## Getting started

### Prerequisites

- Node.js 20+
- pnpm

### Install and run locally

```bash
# Clone the repository
git clone https://github.com/MejryAzyz/Aziz.git
cd Aziz_Portfolio

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
pnpm build
pnpm start
```

## Docker

Build and run the app in a container:

```bash
docker build -t aziz-portfolio .
docker run -p 3000:3000 aziz-portfolio
```

The Dockerfile uses a multi-stage build with Next.js standalone output for a smaller production image.

## Project structure

```
├── app/              # Next.js app router (layout, page, global styles)
├── components/       # UI sections and shared components
├── lib/              # Utilities
├── public/           # Static assets (icons, logos, media)
├── Dockerfile        # Production container image
└── next.config.mjs   # Next.js configuration
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |

## Contact

- **Email:** [MouhamedAZIZ.MEJRI@esprit.tn](mailto:MouhamedAZIZ.MEJRI@esprit.tn)
- **GitHub:** [@MejryAzyz](https://github.com/MejryAzyz)
- **LinkedIn:** [mejry-azyz](https://www.linkedin.com/in/mejry-azyz)

## License

This project is private and intended for personal portfolio use.
