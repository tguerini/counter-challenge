'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function getCurrentValue(): Promise<number>{
  let counter = await prisma.counter.findUnique({
    where: { id: 1 },
  })
  const now = new Date()
  const TWENTY_MINUTES = 20 * 60 * 1000

  if (!counter) {
    const newCounter = await prisma.counter.create({
      data: { id: 1, value: 0, updatedAt: now },
    })
    return newCounter.value
  }
  const timePassed = now.getTime() - counter.updatedAt.getTime()
  if (timePassed > TWENTY_MINUTES) {
    counter = await prisma.counter.update({
      where: { id: 1 },
      data: { value: 0, updatedAt: now },
    })
  }
  return counter.value
}

export async function increment(){
  const counter = await prisma.counter.update({
    where: { id: 1 },
    data: {
      value: { increment: 1 },
      updatedAt: new Date()
    },
  })
  revalidatePath('/')
}

export async function decrement() {
  const counter = await prisma.counter.update({
    where: { id: 1 },
    data: {
      value: { decrement: 1 },
      updatedAt: new Date()
    },
  })
  revalidatePath('/')
}

export async function reset() {
  await prisma.counter.update({
    where: { id: 1 },
    data: { 
      value: 0, 
      updatedAt: new Date()
    },
  })
  revalidatePath('/')
}
