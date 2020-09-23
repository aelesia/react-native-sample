declare type text = string | number | Error
declare class Toast {
  dropDown: any
  setDropDown(dropDown: any): void
  info(title: text, msg?: text): void
  warn(title: text, msg?: text): void
  error(title: text | Error, msg?: text): void
  success(title: text, msg?: text): void
  private alertWithType
}
declare const _default: Toast
export default _default
