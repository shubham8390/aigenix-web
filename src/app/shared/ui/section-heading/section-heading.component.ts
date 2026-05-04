import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="max-w-3xl">
      @if (eyebrow(); as e) {
        <p
          class="text-sm font-semibold uppercase tracking-wider"
          [class.text-brand]="variant() === 'light'"
          [class.text-white]="variant() === 'on-dark'"
        >
          {{ e }}
        </p>
      }
      <h2
        class="mt-2 text-3xl font-semibold tracking-tight md:text-4xl"
        [class.font-serif]="variant() === 'on-dark'"
        [class.text-foreground]="variant() === 'light'"
        [class.text-on-inverse]="variant() === 'on-dark'"
        [attr.id]="headingId() ?? null"
      >
        {{ title() }}
      </h2>
      @if (subtitle(); as s) {
        <p class="mt-4 text-lg" [class.text-muted]="variant() === 'light'" [class.text-muted-on-inverse]="variant() === 'on-dark'">
          {{ s }}
        </p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  /** `on-dark`: white headings for editorial sections (burgundy canvas or charcoal). */
  readonly variant = input<'light' | 'on-dark'>('light');
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  /** When set, used as the `id` on the `h2` for `aria-labelledby`. */
  readonly headingId = input<string>();
}
