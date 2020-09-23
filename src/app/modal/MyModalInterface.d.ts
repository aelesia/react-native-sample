import { ReactElement } from 'react'

export interface MyModalInterface {
  startForResult<T>(style: 'alert' | 'sheet' | 'no_wrapper', element: ReactElement): Promise<T>
}
