import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../ui/logo/logo.component';
import { SocialIconComponent } from '../../ui/social-icon/social-icon.component';
import { PRIMARY_NAV } from '../../navigation';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent, SocialIconComponent],
  template: `
    <footer class="border-t border-border bg-surface">
      <div class="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-12 lg:gap-8"
        >
          <div class="sm:col-span-2 lg:col-span-4">
            <app-logo variant="dark" size="large" />
            <p class="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Work that matters. Growth that lasts. We help you think bigger, build stronger, and expand opportunity for
              all.
            </p>
          </div>

          <div class="lg:col-span-2">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-foreground">Explore</h2>
            <ul class="mt-4 space-y-1">
              @for (item of nav; track item.path) {
                <li>
                  <a
                    class="inline-flex min-h-11 items-center rounded-md text-sm text-muted hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    [routerLink]="item.path"
                  >
                    {{ item.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <div class="lg:col-span-3">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h2>
            <address class="mt-4 not-italic text-sm leading-relaxed text-muted">
              <p class="font-medium text-foreground">AiGenix</p>
              <p class="mt-2">
                <a
                  class="text-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  href="mailto:hello@aigenix.example"
                >
                  hello&#64;aigenix.example
                </a>
              </p>
            </address>
          </div>

          <div class="lg:col-span-3">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-foreground">Social</h2>
            <div class="mt-4 flex flex-wrap gap-3">
              <a
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AiGenix on LinkedIn"
              >
                <app-social-icon platform="linkedin" />
              </a>
              <a
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AiGenix on YouTube"
              >
                <app-social-icon platform="youtube" />
              </a>
              <a
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AiGenix on Instagram"
              >
                <app-social-icon platform="instagram" />
              </a>
            </div>
          </div>
        </div>

        <p class="mt-10 border-t border-border pt-8 text-center text-xs text-muted">
          © {{ year }} AiGenix. All rights reserved.
        </p>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly nav = PRIMARY_NAV;
  protected readonly year = new Date().getFullYear();
}
