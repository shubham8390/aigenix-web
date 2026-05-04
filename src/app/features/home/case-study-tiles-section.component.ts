import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CaseStudyHomeTile } from './home.content';

@Component({
  selector: 'app-case-study-tiles-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="border-b border-border bg-background pb-12 pt-2 md:pb-16 md:pt-4" aria-labelledby="case-study-tiles-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 id="case-study-tiles-heading" class="sr-only">Featured case studies</h2>
        <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          @for (tile of tiles(); track tile.imageSrc) {
            <a
              [routerLink]="tile.linkPath"
              class="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-surface shadow-sm outline-none ring-offset-background transition hover:border-brand/35 hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:min-h-[260px]"
            >
              <img
                [src]="tile.imageSrc"
                width="800"
                height="600"
                class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                [alt]="tile.imageAlt"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                aria-hidden="true"
              ></div>
              <div class="relative p-5 md:p-6">
                <p class="text-xs font-semibold uppercase tracking-wider text-brand">Case study</p>
                <p class="mt-2 font-serif text-lg font-semibold leading-snug text-on-inverse md:text-xl">
                  {{ tile.title }}
                  <span aria-hidden="true" class="whitespace-nowrap"> ›</span>
                </p>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyTilesSectionComponent {
  readonly tiles = input.required<readonly CaseStudyHomeTile[]>();
}
