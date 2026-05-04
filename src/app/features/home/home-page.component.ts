import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { HOME_CONTENT } from './home.content';
import { CaseStudyTilesSectionComponent } from './case-study-tiles-section.component';
import { HeroSectionComponent } from './hero-section.component';
import { InsightsNewsletterSectionComponent } from './insights-newsletter-section.component';
import { FoundersTalkSectionComponent } from './founders-talk-section.component';
import { WhatWeDoSectionComponent } from './what-we-do-section.component';
import { FounderProgramsSectionComponent } from './founder-programs-section.component';
import { CareersTeaserSectionComponent } from './careers-teaser-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CaseStudyTilesSectionComponent,
    InsightsNewsletterSectionComponent,
    FoundersTalkSectionComponent,
    WhatWeDoSectionComponent,
    FounderProgramsSectionComponent,
    CareersTeaserSectionComponent,
  ],
  template: `
    <app-hero-section [hero]="content.hero" [caseStudy]="content.caseStudy" />
    <app-case-study-tiles-section [tiles]="content.caseStudyTiles" />
    <app-insights-newsletter-section [content]="content.insights" />
    <app-founders-talk-section [content]="content.foundersTalk" />
    <app-what-we-do-section [content]="content.whatWeDo" />
    <app-founder-programs-section [content]="content.founderPrograms" />
    <app-careers-teaser-section [content]="content.careers" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly content = HOME_CONTENT;

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'AiGenix',
      description:
        'AiGenix helps organizations build intelligent, agentic systems through products, consulting, and founder programs.',
    });
  }
}
