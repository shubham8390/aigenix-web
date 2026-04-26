import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FounderProgramsContent } from './home.content';

@Component({
  selector: 'app-founder-programs-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="founder-programs" class="border-y border-border bg-background py-16 md:py-24" aria-labelledby="founder-programs-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p class="text-sm text-muted">
          <a
            class="font-medium text-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            [href]="content().layoutHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ content().layoutNote }}
          </a>
        </p>

        <p class="mt-6 text-xl font-semibold text-foreground md:text-2xl">
          {{ content().headline }}
        </p>

        <h2 id="founder-programs-heading" class="mt-10 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {{ content().sectionTitle }}
        </h2>
        <p class="mt-4 max-w-3xl text-lg text-muted">
          {{ content().belief }}
        </p>

        <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (p of content().programs; track p.title) {
            <article class="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <div class="aspect-[16/10] overflow-hidden bg-border">
                <img
                  [src]="p.imageSrc"
                  width="640"
                  height="400"
                  class="h-full w-full object-cover"
                  [alt]="p.imageAlt"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="flex flex-1 flex-col p-6 md:p-7">
                <h3 class="text-xl font-semibold text-foreground">{{ p.title }}</h3>
                <p class="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                  {{ p.description }}
                </p>
                <a
                  class="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  [routerLink]="p.ctaPath"
                >
                  {{ p.ctaLabel }}
                </a>
              </div>
            </article>
          }
        </div>

        <div class="mt-14 flex flex-col items-center rounded-2xl border border-border bg-surface px-6 py-10 text-center md:px-10">
          <p class="text-lg font-semibold text-foreground">{{ content().communityHeadline }}</p>
          <a
            class="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            [routerLink]="content().communityCtaPath"
          >
            {{ content().communityCtaLabel }}
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FounderProgramsSectionComponent {
  readonly content = input.required<FounderProgramsContent>();
}
