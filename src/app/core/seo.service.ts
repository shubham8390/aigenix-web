import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  setPageMeta(opts: { title: string; description?: string }): void {
    const fullTitle = opts.title.includes('AiGenix') ? opts.title : `${opts.title} | AiGenix`;
    this.title.setTitle(fullTitle);
    if (opts.description) {
      this.meta.updateTag({ name: 'description', content: opts.description });
    }
  }
}
