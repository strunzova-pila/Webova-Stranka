# Strunzova Pila - Apartmány v Krkonoších

Next.js webová aplikace pro prezentaci apartmánů Strunzova Pila.

## 📁 Struktura projektu

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout s Navbar
│   ├── page.tsx         # Hlavní stránka
│   └── globals.css      # Globální styly
├── components/          # React komponenty
│   └── Navbar.tsx       # Hlavní navigace
├── types/              # TypeScript type definitions
│   └── index.ts        # Centralizované typy
├── utils/              # Utility funkce a konstanty
│   └── constants.ts    # Konstanty projektu
├── styles/             # Styly a design system
│   └── colors.ts       # Color palette
└── hooks/              # Custom React hooks (připraveno)

public/
└── strunzova-pila-logo.png  # Logo
```

## 🚀 Spuštění

```bash
npm run dev
# nebo
yarn dev
```

Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči.

## 🎨 Design System

- **Barvy**: Definovány v `src/styles/colors.ts`
- **Konstanty**: Centralizované v `src/utils/constants.ts`
- **Typy**: TypeScript typy v `src/types/index.ts`

## 📦 Technologie

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS

## Learn More![alt text](vscode-file://vscode-app/Users/danielmitka/Library/Application%20Support/Cursor/User/workspaceStorage/images/image-23d5d28a-9d25-4bdd-956c-a80509c5dfc9.png?t%3D1750933213940)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
