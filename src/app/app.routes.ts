import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./features/stub-page/stub-page.component').then((m) => m.StubPageComponent),
        data: {
          title: 'Product',
          description: 'Explore AiGenix agentic SaaS products — full product pages coming soon.',
        },
      },
      {
        path: 'consulting',
        loadComponent: () =>
          import('./features/stub-page/stub-page.component').then((m) => m.StubPageComponent),
        data: {
          title: 'Consulting',
          description: 'Learn how AiGenix consulting helps enterprises adopt agentic systems — details coming soon.',
        },
      },
      {
        path: 'startups',
        loadComponent: () =>
          import('./features/stub-page/stub-page.component').then((m) => m.StubPageComponent),
        data: {
          title: 'Startups',
          description: 'Programs and support for founders — more information coming soon.',
        },
      },
      {
        path: 'company',
        loadComponent: () =>
          import('./features/stub-page/stub-page.component').then((m) => m.StubPageComponent),
        data: {
          title: 'Company',
          description: 'About AiGenix, our mission, and leadership — expanded story coming soon.',
        },
      },
      {
        path: 'resources',
        loadComponent: () =>
          import('./features/stub-page/stub-page.component').then((m) => m.StubPageComponent),
        data: {
          title: 'Resources',
          description: 'Articles, research, and tools from AiGenix — library coming soon.',
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
