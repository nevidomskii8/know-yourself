import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { mobileNavLinkStyles, mobileBookButtonStyles } from '../../utils/navigationStyles'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation()

  return (
    <div 
      id="mobile-menu"
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-sand-200 ${
        isOpen 
          ? 'max-h-96 opacity-100 mt-4 pb-4' 
          : 'max-h-0 opacity-0'
      }`}
    >
      <nav 
        className="flex flex-col space-y-4 pt-4"
        role="navigation"
        aria-label="Мобильное меню"
      >
        <NavLink to="/" end className={mobileNavLinkStyles} onClick={onClose}>
          {t('header.home')}
        </NavLink>
        <NavLink to="/services" className={mobileNavLinkStyles} onClick={onClose}>
          {t('header.services')}
        </NavLink>
        <NavLink to="/activities" className={mobileNavLinkStyles} onClick={onClose}>
          {t('header.activities')}
        </NavLink>
        <a 
          href="#about" 
          className="text-warm-600 hover:text-primary-600 transition-colors py-2 font-medium"
          onClick={onClose}
        >
          {t('header.about')}
        </a>
        <NavLink 
          to="/contact" 
          className={mobileBookButtonStyles}
          onClick={onClose}
        >
          {t('header.book')}
        </NavLink>
      </nav>
    </div>
  )
}