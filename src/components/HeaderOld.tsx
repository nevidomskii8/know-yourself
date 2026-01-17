import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
  }

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `transition-colors font-medium ${
      isActive 
        ? 'text-primary-600 font-semibold' 
        : 'text-warm-600 hover:text-primary-600'
    }`

  const mobileNavLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `transition-colors py-2 font-medium ${
      isActive 
        ? 'text-primary-600 font-semibold px-2 bg-sand-100 rounded-lg' 
        : 'text-warm-600 hover:text-primary-600'
    }`

  const languages = [
    { code: 'ru', name: 'RU' },
    { code: 'uk', name: 'UK' },
    { code: 'en', name: 'EN' }
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-sand-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-primary-600">
            {t('header.logo')}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              end
              className={navLinkStyles}
            >
              {t('header.home')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={navLinkStyles}
            >
              {t('header.services')}
            </NavLink>
            <NavLink 
              to="/activities" 
              className={navLinkStyles}
            >
              {t('header.activities')}
            </NavLink>
            <a 
              href="#about" 
              className="text-warm-600 hover:text-primary-600 transition-colors font-medium"
            >
              {t('header.about')}
            </a>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-warm-600 hover:text-primary-600 transition-colors font-medium uppercase"
              >
                <span>{i18n.language.split('-')[0]}</span>
                <svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white border border-sand-200 rounded-xl shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-sand-50 transition-colors ${
                        i18n.language.startsWith(lang.code) ? 'text-primary-600 font-bold bg-sand-50' : 'text-warm-600'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-5 py-2 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md ${
                  isActive 
                    ? 'bg-primary-600 text-white shadow-inner' 
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`
              }
            >
              {t('header.book')}
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
             {/* Mobile Language Switcher */}
             <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-warm-700 font-medium uppercase text-sm"
              >
                <span>{i18n.language.split('-')[0]}</span>
                <svg className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white border border-sand-200 rounded-lg shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-3 py-2 text-left text-xs hover:bg-sand-50 transition-colors ${
                        i18n.language.startsWith(lang.code) ? 'text-primary-600 font-bold bg-sand-50' : 'text-warm-600'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              className="p-2 text-warm-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sand-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <NavLink 
                to="/" 
                end
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.home')}
              </NavLink>
              <NavLink 
                to="/services" 
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.services')}
              </NavLink>
              <NavLink 
                to="/activities" 
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.activities')}
              </NavLink>
              <a 
                href="#about" 
                className="text-warm-600 hover:text-primary-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.about')}
              </a>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-5 py-2.5 rounded-xl transition-all duration-300 text-center mt-2 font-semibold ${
                    isActive 
                      ? 'bg-primary-600 text-white shadow-inner' 
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.book')}
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
