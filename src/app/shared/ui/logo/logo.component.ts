import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandAssets } from '../../brand-assets';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a
      routerLink="/"
      class="inline-flex min-h-11 items-center py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      [attr.aria-label]="'AiGenix home'"
    >
      <img
        [src]="src()"
        width="320"
        height="84"
        alt="AiGenix"
        [class]="imgClass()"
        decoding="async"
      />
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly variant = input<'dark' | 'light'>('dark');
  /** `large` is used in the site header and footer for stronger brand presence. */
  readonly size = input<'default' | 'large'>('default');

  protected src(): string {
    return this.variant() === 'light' ? BrandAssets.logoWhite : BrandAssets.logoBlack;
  }

  protected imgClass(): string {
    const base = 'w-auto max-w-none object-contain object-left ';
    return (
      base +
      (this.size() === 'large'
        ? 'h-14 w-auto sm:h-16 md:h-[4.25rem] lg:h-20'
        : 'h-12 w-auto sm:h-14 md:h-16')
    );
  }
}
