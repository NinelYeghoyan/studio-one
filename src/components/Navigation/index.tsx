import { navLinks } from '@components/Navigation/constants.ts';
import { StyledNav } from '@components/Navigation/styled.ts';
import { normalizeKey } from '@utils/index.ts';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navigation: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledNav className="flex mx-auto gap-32">
      {navLinks.map((link) => {
        return (
          <NavLink key={link.id} to={link.to} className="px-8 py-8">
            {t(normalizeKey(link.label))}
          </NavLink>
        );
      })}
    </StyledNav>
  );
};

export default Navigation;
