import { useEffect } from 'react'

/**
 * Хук для обработки нажатия клавиши Escape
 * @param handler - функция-обработчик
 * @param enabled - включен ли хук
 */
export function useEscapeKey(
  handler: () => void,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [handler, enabled])
}
