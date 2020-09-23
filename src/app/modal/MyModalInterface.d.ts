import { ReactElement } from 'react'
import { ModalHandler } from 'src/app/modal/Modal'

export interface MyModalInterface {
  startForResult<T>(style: 'alert' | 'sheet' | 'no_wrapper', element: ReactElement): Promise<T>
}
