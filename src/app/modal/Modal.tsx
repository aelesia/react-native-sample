import { ReactElement } from 'react'

import { MyModalInterface } from './MyModalInterface'

export type ModalHandler<T = undefined> = {
  ok: (result?: T) => void
  cancel: () => void
}
export type ModalProps<T = void> = {
  ok?: () => T
  cancel?: () => void
}

class ModalClass {
  modal: MyModalInterface = undefined as any

  setModal(modal: any) {
    this.modal = modal
  }

  sheet<T = any>(element: ReactElement): Promise<T> {
    if (this.modal == null) {
      throw Error(
        'Modal not initialized. Please render <Modal> in the top level component and call setModal(ref)'
      )
    }
    return this.modal.startForResult('sheet', element)
  }

  popup<T = any>(element: ReactElement): Promise<T> {
    if (this.modal == null) {
      throw Error(
        'Modal not initialized. Please render <Modal> in the top level component and call setModal(ref)'
      )
    }
    return this.modal.startForResult('alert', element)
  }

  fullPage<T = any>(element: ReactElement): Promise<T> {
    if (this.modal == null) {
      throw Error(
        'Modal not initialized. Please render <Modal> in the top level component and call setModal(ref)'
      )
    }
    return this.modal.startForResult('no_wrapper', element)
  }
}
export const Modal = new ModalClass()
