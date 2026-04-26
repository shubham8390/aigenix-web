import { ChangeDetectionStrategy, Component, inject, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-stub-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <h1 class="text-4xl font-semibold tracking-tight text-foreground">{{ title() }}</h1>
      <p class="mt-6 text-lg text-muted">
        This section is coming soon. Explore the
        <a
          class="font-medium text-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          routerLink="/"
          >home page</a
        >
        for our latest narrative, case study, and programs.
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StubPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly title = input.required<string>();
  readonly description = input.required<string>();

  ngOnInit(): void {
    this.seo.setPageMeta({ title: this.title(), description: this.description() });
  }
}
