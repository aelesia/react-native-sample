import { ReactElement } from 'react'

import { MyModalInterface } from './MyModalInterface'
export declare type ModalHandler<T = undefined> = {
  ok: (result?: T) => void
  cancel: () => void
}
export declare type ModalProps<T = void> = {
  ok?: () => T
  cancel?: () => void
}
declare class ModalClass {
  modal: MyModalInterface
  setModal(modal: any): void
  sheet<T = any>(element: ReactElement): Promise<T>
  popup<T = any>(element: ReactElement): Promise<T>
  fullPage<T = any>(element: ReactElement): Promise<T>
}
export declare const Modal: ModalClass
export {}
