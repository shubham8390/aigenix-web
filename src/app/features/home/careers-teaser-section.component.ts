import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import type { CareersContent } from './home.content';

@Component({
  selector: 'app-careers-teaser-section',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent],
  template: `
    <section class="border-t border-border bg-surface py-16 md:py-24" aria-labelledby="careers-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <app-section-heading
            headingId="careers-heading"
            eyebrow="Careers"
            [title]="content().title"
            [subtitle]="content().body"
          />
          <a
            class="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md border-2 border-brand bg-transparent px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            [routerLink]="content().ctaPath"
          >
            {{ content().ctaLabel }}
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersTeaserSectionComponent {
  readonly content = input.required<CareersContent>();
}
