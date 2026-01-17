import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { navLinkStyles, bookButtonStyles } from '../../utils/navigationStyles'
import { LanguageSwitcher } from './LanguageSwitcher'

export function DesktopNavigation() {
  const { t } = useTranslation()

  return (
    <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Основное меню">
      <NavLink to="/" end className={navLinkStyles}>
        {t('header.home')}
      </NavLink>
      <NavLink to="/services" className={navLinkStyles}>
        {t('header.services')}
      </NavLink>
      <NavLink to="/activities" className={navLinkStyles}>
        {t('header.activities')}
      </NavLink>
      <a 
        href="#about" 
        className="text-warm-600 hover:text-primary-600 transition-colors font-medium"
      >
        {t('header.about')}
      </a>
      
      <LanguageSwitcher variant="desktop" />

      <NavLink 
        to="/contact" 
        className={bookButtonStyles}
      >
        {t('header.book')}
      </NavLink>
    </nav>
  )
}