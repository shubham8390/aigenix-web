import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import type { CaseStudyContent } from './home.content';

@Component({
  selector: 'app-case-study-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section class="bg-surface py-16 md:py-24" aria-labelledby="case-study-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <app-section-heading
          headingId="case-study-heading"
          [eyebrow]="c().eyebrow"
          [title]="c().title"
        />

        <div class="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-start">
          <article class="max-w-prose font-serif text-base leading-relaxed text-foreground md:text-lg">
            <h3 class="text-xl font-semibold text-foreground md:text-2xl">Client profile</h3>
            <p class="mt-3 text-muted">{{ c().clientProfile }}</p>

            <h3 class="mt-10 text-xl font-semibold text-foreground md:text-2xl">The strategic concern</h3>
            <p class="mt-3 text-muted">{{ c().strategicConcern }}</p>

            <h3 class="mt-10 text-xl font-semibold text-foreground md:text-2xl">AiGenix engagement</h3>
            <p class="mt-3 text-muted">{{ c().engagement }}</p>

            <h3 class="mt-10 text-xl font-semibold text-foreground md:text-2xl">{{ c().phase1Title }}</h3>
            <p class="mt-3 text-muted">{{ c().phase1Body }}</p>
            <ul class="mt-4 list-disc space-y-2 pl-6 text-muted">
              @for (line of c().pilotBullets; track $index) {
                <li class="leading-relaxed">{{ line }}</li>
              }
            </ul>

            <h3 class="mt-10 text-xl font-semibold text-foreground md:text-2xl">{{ c().metricsTitle }}</h3>
            <p class="mt-3 text-muted">{{ c().metricsBody }}</p>

            <h3 class="mt-10 text-xl font-semibold text-foreground md:text-2xl">{{ c().phase2Title }}</h3>
            <p class="mt-3 text-muted">{{ c().phase2Body }}</p>

            <h3 class="mt-10 text-xl font-semibold text-foreground md:text-2xl">{{ c().impactTitle }}</h3>
            <p class="mt-3 text-muted">{{ c().impactBody }}</p>

            <h3 class="mt-10 text-xl font-semibold text-foreground md:text-2xl">{{ c().demonstratesTitle }}</h3>
            <ol class="mt-4 list-decimal space-y-3 pl-8 text-muted [list-style-position:outside]">
              @for (line of c().demonstratesBullets; track $index) {
                <li class="leading-relaxed [overflow-wrap:anywhere]">
                  <span class="text-muted">{{ line }}</span>
                </li>
              }
            </ol>
            <p class="mt-6 text-muted">{{ c().demonstratesClosing }}</p>
          </article>

          <aside class="lg:sticky lg:top-28">
            <figure class="overflow-hidden border border-border bg-background shadow-sm">
              <img
                [src]="c().imageSrc"
                width="900"
                height="1200"
                class="h-auto w-full object-cover"
                [alt]="c().imageAlt"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </figure>
          </aside>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudySectionComponent {
  readonly content = input.required<CaseStudyContent>();

  protected c(): CaseStudyContent {
    return this.content();
  }
}
