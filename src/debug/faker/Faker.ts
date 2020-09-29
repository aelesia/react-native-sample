export function random(min: number, max: number): number {
  return Math.floor(Math.random() * Math.floor(max + 1 - min)) + min
}

export function randomArray<T>(arr: T[]): T {
  return arr[random(0, arr.length - 1)]
}

type PicsumDimension = 100 | 200 | 300 | 400
export function fakerImage(options?: {
  height?: PicsumDimension
  width?: PicsumDimension
}): string {
  const height = options?.height ?? randomArray([100, 200, 300, 400])
  const width = options?.width ?? randomArray([100, 200, 300, 400])
  const id = random(0, 999)
  return `https://picsum.photos/id/${id}/${width}/${height}.jpg`
}

export function fakerFace(): string {
  const id = random(0, 99)
  const gender = randomArray(['men', 'women'])
  return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`
}
