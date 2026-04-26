import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  standalone: true,
  template: `
    <a
      class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-foreground underline-offset-4 hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      [href]="href()"
      [attr.target]="external() ? '_blank' : null"
      [attr.rel]="external() ? 'noopener noreferrer' : null"
      [attr.aria-label]="label()"
    >
      <ng-content />
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkComponent {
  readonly href = input.required<string>();
  readonly label = input.required<string>();
  readonly external = input(false);
}
