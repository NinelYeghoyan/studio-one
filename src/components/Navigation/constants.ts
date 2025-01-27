import type { NavLinkType } from '@components/Navigation/type.ts';
import { routes } from '@routes/routes.ts';

export const navLinks: NavLinkType[] = [
  { id: 1, to: routes.home.path, label: 'home.title' },
  { id: 2, to: routes.news.path, label: 'news.title' },
  { id: 3, to: routes.profile.path, label: 'profile.title' },
];
