import { ButtonLink, Container, Arrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="blueprint-grid bg-cream-100">
      <Container className="flex min-h-[55vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
          404 — Page not found
        </p>
        <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-balance text-brand-800 sm:text-5xl">
          This page didn&apos;t pass inspection
        </h1>
        <p className="mt-4 max-w-md text-lg text-ink/70">
          The page you&apos;re after doesn&apos;t exist or has moved. Let&apos;s
          get you back somewhere solid.
        </p>
        <ButtonLink href="/" className="mt-8">
          Back to home <Arrow />
        </ButtonLink>
      </Container>
    </section>
  );
}
