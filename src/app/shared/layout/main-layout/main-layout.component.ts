import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { SiteFooterComponent } from '../site-footer/site-footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <a
      class="absolute left-[-9999px] top-0 z-[100] rounded-md bg-background px-4 py-3 text-sm font-semibold text-foreground shadow focus:left-4 focus:top-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      href="#main-content"
    >
      Skip to main content
    </a>
    <app-site-header />
    <main id="main-content">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
