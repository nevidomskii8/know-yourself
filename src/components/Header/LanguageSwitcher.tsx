import { useTranslation } from 'react-i18next'
import { useState, useRef, useCallback } from 'react'
import { LANGUAGES } from '../../utils/constants'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEscapeKey } from '../../hooks/useEscapeKey'

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile'
}

export function LanguageSwitcher({ variant = 'desktop' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  const closeDropdown = useCallback(() => setIsOpen(false), [])

  const isMobile = variant === 'mobile'

  // Закрытие при клике вне меню и по клавише Escape
  useClickOutside(dropdownRef, closeDropdown, isOpen)
  useEscapeKey(closeDropdown, isOpen)

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Выбрать язык"
        className={`flex items-center space-x-1 font-medium uppercase transition-colors ${
          isMobile 
            ? 'text-warm-700 text-sm' 
            : 'text-warm-600 hover:text-primary-600'
        }`}
      >
        <span>{i18n.language.split('-')[0]}</span>
        <svg className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div 
          role="menu"
          className={`absolute right-0 mt-2 bg-white border border-sand-200 shadow-lg overflow-hidden z-50 ${
            isMobile ? 'w-20 rounded-lg' : 'w-24 rounded-xl'
          }`}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              role="menuitem"
              aria-label={lang.fullName}
              className={`w-full text-left hover:bg-sand-50 transition-colors ${
                isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-2 text-sm'
              } ${
                i18n.language.startsWith(lang.code) ? 'text-primary-600 font-bold bg-sand-50' : 'text-warm-600'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}