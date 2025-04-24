'use server'
import {increment} from '@/app/server/actions'
import {getCurrentValue} from '@/app/server/actions'
import { getIsLoading } from '@/app/server/actions'
import {decrement} from '@/app/server/actions'
import ClientButton from './ClientButton'

export default async function Counter() {
  const count = await getCurrentValue()

  return (
    <div className="space-y-4">
      <div className="text-6xl">{count}</div>
      <div className="flex justify-center space-x-4">
        <ClientButton action={decrement} label="-" color="red" />
        <ClientButton action={increment} label="+" color="green" />
      </div>
    </div>
  )
}


