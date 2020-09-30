import { Str } from '@aelesia/commons'

export function testUtils(): string {
  return 'test'
}

export function formatNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
