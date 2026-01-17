import { useState } from 'react'
import { Logo } from './Logo'
import { DesktopNavigation } from './DesktopNavigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-sand-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNavigation />
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher variant="mobile" />
            <MobileMenuButton 
              isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </div>
        </div>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  )
}
export default Header