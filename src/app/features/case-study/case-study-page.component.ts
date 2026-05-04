import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { HOME_CONTENT } from '../home/home.content';
import { CaseStudySectionComponent } from '../home/case-study-section.component';

@Component({
  selector: 'app-case-study-page',
  standalone: true,
  imports: [CaseStudySectionComponent],
  template: ` <app-case-study-section [content]="caseStudy" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly caseStudy = HOME_CONTENT.caseStudy;

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Case study: Agentic transformation in a service-based IT enterprise',
      description:
        'How AiGenix assessed readiness, ran controlled internal pilots, and helped a mid-sized IT services company scale agentic solutions with governance and proof.',
    });
  }
}
