import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
  className?: string
}

export function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl border border-sand-200 shadow-sm p-6 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-sand-300 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-warm-800 mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
