import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="max-w-3xl">
      @if (eyebrow(); as e) {
        <p class="text-sm font-semibold uppercase tracking-wider text-brand">{{ e }}</p>
      }
      <h2
        class="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        [attr.id]="headingId() ?? null"
      >
        {{ title() }}
      </h2>
      @if (subtitle(); as s) {
        <p class="mt-4 text-lg text-muted">{{ s }}</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  /** When set, used as the `id` on the `h2` for `aria-labelledby`. */
  readonly headingId = input<string>();
}
