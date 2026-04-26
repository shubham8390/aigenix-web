import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { SocialIconComponent } from '../../shared/ui/social-icon/social-icon.component';
import type { FoundersTalkContent } from './home.content';

@Component({
  selector: 'app-founders-talk-section',
  standalone: true,
  imports: [ButtonComponent, SectionHeadingComponent, SocialIconComponent],
  template: `
    <section class="bg-surface py-16 md:py-24" aria-labelledby="founders-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <app-section-heading
          headingId="founders-heading"
          [title]="content().title"
          [subtitle]="content().description"
        />

        <div class="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <figure class="relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <!-- Wide posters: full width + intrinsic height avoids object-cover cropping on-image typography. -->
            <img
              [src]="content().posterSrc"
              width="1600"
              height="900"
              class="relative z-0 block h-auto w-full object-contain object-center"
              [alt]="content().posterAlt"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div
              class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"
              aria-hidden="true"
            ></div>
            <div class="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
              <app-button variant="secondary">{{ content().ctaLabel }}</app-button>
            </div>
          </figure>

          <div>
            <p class="text-sm font-medium text-foreground">Follow the conversation</p>
            <div class="mt-4 flex flex-wrap gap-3">
              <a
                class="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <app-social-icon platform="linkedin" />
                <span class="text-sm font-semibold">LinkedIn</span>
              </a>
              <a
                class="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <app-social-icon platform="youtube" />
                <span class="text-sm font-semibold">YouTube</span>
              </a>
              <a
                class="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <app-social-icon platform="instagram" />
                <span class="text-sm font-semibold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoundersTalkSectionComponent {
  readonly content = input.required<FoundersTalkContent>();
}
