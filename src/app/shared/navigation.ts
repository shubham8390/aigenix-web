export interface NavItem {
  label: string;
  path: string;
}

export const PRIMARY_NAV: readonly NavItem[] = [
  { label: 'Product', path: '/product' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Startups', path: '/startups' },
  { label: 'Company', path: '/company' },
  { label: 'Resources', path: '/resources' },
] as const;
