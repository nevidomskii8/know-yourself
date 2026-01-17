import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Logo() {
  const { t } = useTranslation()
  
  return (
    <Link to="/" className="text-xl sm:text-2xl font-bold text-primary-600">
      {t('header.logo')}
    </Link>
  )
}