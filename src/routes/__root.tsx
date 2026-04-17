import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AnimatedBackground } from "../components/AnimatedBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-16">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold font-display gradient-text">404</h1>
        <p className="mt-4 text-muted-foreground">Página não encontrada.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { title: "Issami Umeoka" },

      { name: "description", content: "Portfólio de Issami Umeoka, Desenvolvedor de Software Multiplataforma." },
      { property: "og:title", content: "Issami Umeoka" },
      { property: "og:description", content: "Portfólio de Issami Umeoka, Desenvolvedor de Software Multiplataforma." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },

      { rel: "icon", href: "/assets/images/gato2.png" },

      { rel: "apple-touch-icon", href: "/assets/images/gato2.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}