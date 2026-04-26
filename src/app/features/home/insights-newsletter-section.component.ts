import { Component, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import type { InsightsContent } from './home.content';

@Component({
  selector: 'app-insights-newsletter-section',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, SectionHeadingComponent],
  template: `
    <section class="border-y border-border bg-background py-16 md:py-20" aria-labelledby="insights-heading">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <app-section-heading
          headingId="insights-heading"
          eyebrow="Insights"
          [title]="content().title"
          [subtitle]="content().description"
        />
        <p class="mt-6 max-w-3xl text-sm text-muted">
          <a
            class="font-medium text-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            [href]="content().referenceHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ content().referenceLabel }}
          </a>
        </p>

        <div class="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-4">
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
            <p class="text-sm font-semibold text-foreground">Subscribe</p>
            <form
              class="mt-3 rounded-xl border border-border bg-surface p-6 md:p-8"
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
              novalidate
            >
              <label class="block text-sm font-medium text-foreground" for="insights-email">Email address</label>
              <input
                id="insights-email"
                type="email"
                autocomplete="email"
                formControlName="email"
                class="mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-foreground shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                [attr.aria-invalid]="form.controls.email.invalid && form.controls.email.touched"
                aria-describedby="insights-email-hint"
              />
              <p id="insights-email-hint" class="mt-2 text-xs text-muted">
                We respect your inbox. This demo form does not send data yet.
              </p>
              @if (form.controls.email.touched && form.controls.email.hasError('email')) {
                <p class="mt-2 text-sm text-brand" role="alert">Enter a valid email address.</p>
              }

              <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <app-button type="submit" [variant]="'primary'">Subscribe</app-button>
                <span class="text-xs text-muted">Or continue with Apple, Google, or LinkedIn — coming soon.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
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
