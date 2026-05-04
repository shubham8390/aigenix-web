import { Component, ChangeDetectionStrategy, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import type { InsightsContent } from './home.content';

@Component({
  selector: 'app-insights-newsletter-section',
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeadingComponent],
  template: `
    <section class="border-y border-border bg-background py-16 md:py-20" aria-labelledby="insights-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <app-section-heading
          headingId="insights-heading"
          eyebrow="Insights"
          [title]="content().title"
          [subtitle]="content().description"
        />

        <div class="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-3 md:gap-4">
              @for (img of content().gallery.slice(0, 2); track img.src) {
                <div class="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                  <img
                    [src]="img.src"
                    width="640"
                    height="480"
                    class="aspect-[4/3] h-full w-full object-cover"
                    [alt]="img.alt"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              }
            </div>
            @if (content().gallery[2]; as wide) {
              <div class="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                <img
                  [src]="wide.src"
                  width="1200"
                  height="675"
                  class="aspect-video w-full object-cover"
                  [alt]="wide.alt"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            }
          </div>

          <div class="lg:pt-2">
            <p class="text-center font-serif text-lg font-semibold leading-snug text-foreground md:text-left md:text-xl">
              Subscribe to the latest AiGenix insights on the topics you care about.
            </p>
            <form
              class="mt-6 rounded-xl border border-border bg-surface p-6 md:p-8"
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
              novalidate
            >
              <label class="sr-only" for="insights-email">Email address</label>
              <div
                class="flex gap-0 overflow-hidden rounded-md border border-border bg-background shadow-sm focus-within:ring-2 focus-within:ring-brand"
              >
                <input
                  id="insights-email"
                  type="email"
                  autocomplete="email"
                  placeholder="Email address"
                  formControlName="email"
                  class="min-h-11 min-w-0 flex-1 border-0 bg-background px-3 py-3 text-foreground placeholder:text-muted outline-none focus:ring-0"
                  [attr.aria-invalid]="form.controls.email.invalid && form.controls.email.touched"
                  aria-describedby="insights-email-hint"
                />
                <button
                  type="submit"
                  class="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center bg-brand text-on-inverse transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Subscribe"
                >
                  <span aria-hidden="true" class="text-lg font-semibold">→</span>
                </button>
              </div>
              <p id="insights-email-hint" class="mt-2 text-xs text-muted">
                We respect your inbox. This demo form does not send data yet.
              </p>
              @if (form.controls.email.touched && form.controls.email.hasError('email')) {
                <p class="mt-2 text-sm text-brand" role="alert">Enter a valid email address.</p>
              }

              <p class="mt-8 flex items-center gap-3 text-center text-xs text-muted md:text-sm">
                <span class="h-px flex-1 bg-border"></span>
                Or continue with
                <span class="h-px flex-1 bg-border"></span>
              </p>
              <div class="mt-4 flex flex-wrap justify-center gap-2">
                <span class="inline-flex min-h-10 items-center rounded-md border border-border px-4 text-xs font-medium text-muted"
                  >Apple</span
                >
                <span class="inline-flex min-h-10 items-center rounded-md border border-border px-4 text-xs font-medium text-muted"
                  >Google</span
                >
                <span class="inline-flex min-h-10 items-center rounded-md border border-border px-4 text-xs font-medium text-muted"
                  >LinkedIn</span
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsightsNewsletterSectionComponent {
  private readonly fb = inject(FormBuilder);

  readonly content = input.required<InsightsContent>();

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.form.reset();
  }
}
