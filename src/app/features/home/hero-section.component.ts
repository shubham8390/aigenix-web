import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CaseStudyContent, HeroContent } from './home.content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="border-b border-border bg-background text-foreground" aria-labelledby="hero-heading">
      <div
        class="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:gap-10 md:px-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(260px,38%)] lg:items-center lg:gap-8 lg:px-8 lg:py-20"
      >
        <div class="min-w-0 lg:max-w-xl">
          <h1
            id="hero-heading"
            class="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
          >
            {{ hero().title }}
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {{ hero().subtitle }}
          </p>
        </div>

        <div class="flex justify-center lg:flex-none lg:self-center">
          <a
            [routerLink]="caseStudy().detailRoute"
            class="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-on-inverse shadow-md transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Read the case study"
          >
            <span aria-hidden="true" class="text-2xl font-semibold leading-none">→</span>
          </a>
        </div>

        <a
          [routerLink]="caseStudy().detailRoute"
          class="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-border shadow-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:min-h-[min(420px,52vh)]"
        >
          <img
            [src]="caseStudy().imageSrc"
            width="900"
            height="1200"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            [alt]="caseStudy().imageAlt"
            fetchpriority="high"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" aria-hidden="true"></div>
          <div class="relative p-6 md:p-8">
            <p class="text-xs font-semibold uppercase tracking-wider text-brand">{{ caseStudy().eyebrow }}</p>
            <p class="mt-3 font-serif text-xl font-semibold leading-snug text-on-inverse md:text-2xl">
              {{ caseStudy().title }}
              <span aria-hidden="true" class="ml-1 inline-block font-normal opacity-90">›</span>
            </p>
            <span
              class="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition group-hover:border-brand/40 group-hover:text-brand"
            >
              Read the case study
              <span aria-hidden="true" class="font-normal">→</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly hero = input.required<HeroContent>();
  readonly caseStudy = input.required<CaseStudyContent>();
}
