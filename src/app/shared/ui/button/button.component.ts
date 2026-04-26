import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [attr.type]="type()"
      class="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      [class]="classes()"
    >
      <ng-content />
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly type = input<'button' | 'submit'>('button');

  protected classes(): string {
    switch (this.variant()) {
      case 'secondary':
        return 'bg-foreground text-background hover:bg-foreground/90';
      case 'outline':
        return 'border-2 border-brand bg-transparent text-brand hover:bg-brand hover:text-background';
      default:
        return 'bg-brand text-background hover:bg-brand-hover';
    }
  }
}
