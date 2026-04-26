import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { WhatWeDoContent } from './home.content';

@Component({
  selector: 'app-what-we-do-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-background py-16 md:py-24" aria-labelledby="what-we-do-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <!-- Centered header (client reference layout); light theme unchanged -->
        <header class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand">
            {{ content().eyebrow }}
          </p>
          <h2
            id="what-we-do-heading"
            class="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            {{ content().title }}
          </h2>
          <p class="mt-4 text-lg text-muted md:text-xl">
            {{ content().subtitle }}
          </p>
        </header>

        <div class="mt-14 grid gap-8 md:grid-cols-2 md:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          @for (pillar of content().pillars; track pillar.title) {
            <article
              class="flex flex-col overflow-hidden border border-border bg-background shadow-sm rounded-b-xl"
            >
              <div class="aspect-[16/10] overflow-hidden bg-border">
                <img
                  [src]="pillar.imageSrc"
                  width="640"
                  height="400"
                  class="h-full w-full object-cover rounded-none"
                  [alt]="pillar.imageAlt"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div class="flex flex-1 flex-col p-6 md:p-7">
                <a
                  class="group inline-flex items-center gap-1.5 text-lg font-semibold text-foreground hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  [routerLink]="pillar.linkPath"
                >
                  {{ pillar.title }}
                  <span
                    class="text-xl font-normal leading-none transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                    >›</span
                  >
                </a>
                <p class="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                  {{ pillar.body }}
                </p>
              </div>
            </article>
          }
        </div>

        <div class="mt-16 rounded-2xl border border-border bg-surface p-8 md:mt-20 md:p-10">
          <p class="text-center text-sm font-semibold uppercase tracking-wide text-muted">Product family</p>
          <div
            class="mt-10 flex flex-col items-stretch gap-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:gap-14"
          >
            @for (p of content().products; track p.name) {
              <div class="flex flex-1 flex-col items-center gap-4 text-center sm:min-w-[140px] sm:flex-initial">
                <div
                  class="flex h-24 w-full max-w-[220px] items-center justify-center rounded-xl border border-border bg-background px-4 py-3 shadow-sm"
                >
                  <img
                    [src]="p.logoSrc"
                    width="200"
                    height="80"
                    class="max-h-16 w-auto max-w-full object-contain md:max-h-[4.5rem]"
                    [alt]="p.alt"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span class="text-sm font-medium text-foreground">{{ p.name }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatWeDoSectionComponent {
  readonly content = input.required<WhatWeDoContent>();
}
