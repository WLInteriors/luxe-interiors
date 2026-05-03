import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-serif text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-charcoal text-charcoal-foreground text-xs tracking-[0.25em] uppercase"
        >
          Return Home
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
      { title: "Westchester Luxury Interiors — Bespoke Renovations & Custom Millwork" },
      {
        name: "description",
        content:
          "Luxury general contractor and in-house custom millwork shop serving Westchester, NYC, and the Tri-State area. Licensed, insured, MBE/DBE certified.",
      },
      { name: "author", content: "Westchester Luxury Interiors" },
      { property: "og:title", content: "Westchester Luxury Interiors" },
      {
        property: "og:description",
        content: "Bespoke luxury interiors and custom millwork for Westchester & NYC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
