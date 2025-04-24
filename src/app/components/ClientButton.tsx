'use client'

import { useTransition } from 'react'

type ClientButtonProps = {
  action: () => Promise<void>
  label: string
  color: 'red' | 'green'
}

export default function ClientButton({ action, label, color }: ClientButtonProps) {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(() => {
      action()
    })
  }

  const baseColor = color === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={isPending}
        className={`px-4 py-2 rounded ${baseColor} disabled:opacity-50`}
      >
        {label}
      </button>
      {isPending && (
        <span className="absolute -bottom-6 transform -translate-x-1/2 text-sm text-gray-400 animate-pulse left-7">
          Loading...
        </span>
      )}
    </div>
  )
}
