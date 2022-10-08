import { getPseudoRandomNumber } from '@/utils/numbers'

export const getRandomString = (length: number): string => {
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result: string = ''

  for (let i = 0; i < length; i++) {
    result += characters[getPseudoRandomNumber(characters.length - 1)]
  }

  return result
}