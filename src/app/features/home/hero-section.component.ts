import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { HeroContent } from './home.content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="border-b border-border bg-background" aria-labelledby="hero-heading">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <h1 id="hero-heading" class="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {{ content().title }}
          </h1>
          <p class="mt-6 max-w-xl text-lg text-muted md:text-xl">
            {{ content().subtitle }}
          </p>
        </div>
        <div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm lg:aspect-auto lg:min-h-[320px]">
          <img
            [src]="content().imageSrc"
            width="1200"
            height="800"
            class="absolute inset-0 h-full w-full object-cover"
            [alt]="content().imageAlt"
            fetchpriority="high"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly content = input.required<HeroContent>();
}
