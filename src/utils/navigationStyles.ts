export const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  `transition-colors font-medium ${
    isActive 
      ? 'text-primary-600 font-semibold' 
      : 'text-warm-600 hover:text-primary-600'
  }`

export const mobileNavLinkStyles = ({ isActive }: { isActive: boolean }) =>
  `transition-colors py-2 font-medium ${
    isActive 
      ? 'text-primary-600 font-semibold px-2 bg-sand-100 rounded-lg' 
      : 'text-warm-600 hover:text-primary-600'
  }`

export const bookButtonStyles = ({ isActive }: { isActive: boolean }) =>
  `px-5 py-2 rounded-xl transition-all duration-300 font-semibold shadow-sm hover:shadow-md ${
    isActive 
      ? 'bg-primary-600 text-white shadow-inner' 
      : 'bg-primary-500 text-white hover:bg-primary-600'
  }`

export const mobileBookButtonStyles = ({ isActive }: { isActive: boolean }) =>
  `px-5 py-2.5 rounded-xl transition-all duration-300 text-center mt-2 font-semibold ${
    isActive 
      ? 'bg-primary-600 text-white shadow-inner' 
      : 'bg-primary-500 text-white hover:bg-primary-600'
  }`
