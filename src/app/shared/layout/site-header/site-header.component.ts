import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../ui/logo/logo.component';
import { PRIMARY_NAV } from '../../navigation';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  template: `
    <header class="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 md:px-6 lg:px-8">
        <app-logo variant="dark" size="large" />

        <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
          @for (item of nav; track item.path) {
            <a
              class="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-surface hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              [routerLink]="item.path"
            >
              {{ item.label }}
            </a>
          }
        </nav>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="hidden min-h-11 min-w-11 items-center justify-center rounded-md border border-border p-2 text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:inline-flex"
            aria-label="Search (not available yet)"
            disabled
          >
            <span aria-hidden="true" class="text-lg font-semibold">⌕</span>
          </button>

          <button
            type="button"
            class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border p-2 text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:hidden"
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            @if (menuOpen()) {
              <span class="text-xl leading-none" aria-hidden="true">×</span>
            } @else {
              <span class="text-lg leading-none" aria-hidden="true">☰</span>
            }
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <div
          id="mobile-nav"
          class="border-t border-border bg-background px-4 py-4 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav class="flex flex-col gap-1" aria-label="Mobile primary">
            @for (item of nav; track item.path) {
              <a
                class="min-h-11 rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                [routerLink]="item.path"
                (click)="closeMenu()"
              >
                {{ item.label }}
              </a>
            }
          </nav>
        </div>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  protected readonly nav = PRIMARY_NAV;

  private readonly menuOpenState = signal(false);

  protected menuOpen(): boolean {
    return this.menuOpenState();
  }

  protected toggleMenu(): void {
    this.menuOpenState.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpenState.set(false);
  }
}
