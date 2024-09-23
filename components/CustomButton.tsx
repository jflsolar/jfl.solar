import Link from 'next/link'
import { useMemo } from 'react'

import { Loader2 } from 'tabler-icons-react'

type CustomButtonProps = {
  variant?: 'primary' | 'secondary' | 'custom' | 'gradient' | 'link-light'
  loading?: boolean
  loadingText?: string
  text?: string
  className?: string
  customClassName?: string
  size?: string
  type?: string
  disabled?: boolean
  href?: string
  onClick?: () => void
}

const CustomButton = ({
  variant = 'primary',
  loading = false,
  loadingText = 'Loading...',
  text = 'Save',
  className = 'text-sm ',
  customClassName = '',
  type = 'submit',
  href,
  disabled = false,
  onClick,
}: CustomButtonProps) => {
  const styles = useMemo(() => {
    if (disabled) {
      return 'bg-slate-300 text-slate-500'
    } else if (variant === 'primary') {
      return 'bg-brand-yellow hover:bg-brand-yellow/90 text-black'
    } else if (variant === 'gradient') {
      return 'bg-gradient hover:bg-brand-yellow/90 text-white'
    } else if (variant === 'secondary') {
      return 'border-slate-800 border hover:bg-slate-800/90 text-slate-800 hover:text-white'
    } else if (variant === 'link-light') {
      return 'text-slate-100 hover:underline'
    } else if (variant === 'custom') {
      return customClassName
    }
  }, [disabled, variant, customClassName])
  

  if(type === 'link' && href) {
    return (
      <Link
      href={href}
      aria-disabled={disabled || loading}
      className={`${styles} ${className} flex items-center justify-center gap-5 rounded-md px-4 min-w-[120px] min-h-[40px] py-2 font-semibold`}
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          {loadingText}
        </>
      ) : (
        <>{text}</>
      )}
    </Link>
    )
  } else {
    return (
      <button
      type={type === 'button'? 'button' : 'submit'}
      disabled={disabled || loading}
      className={`${styles} ${className} flex items-center justify-center gap-5 rounded-md px-4 min-w-[120px] min-h-[40px] py-2 font-semibold`}
      onClick={() => onClick && onClick()}
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          {loadingText}
        </>
      ) : (
        <>{text}</>
      )}
    </button>
    )
  }

  
}

export default CustomButton
