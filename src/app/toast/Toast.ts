type text = string | number | Error

class Toast {
  dropDown: any

  setDropDown(dropDown: any) {
    this.dropDown = dropDown
  }

  info(title: text, msg?: text) {
    console.info(title, msg)
    this.alertWithType('info', title, msg)
  }

  warn(title: text, msg?: text) {
    console.warn(title, msg)
    this.alertWithType('warn', title, msg)
  }

  error(title: text | Error, msg?: text) {
    if (title instanceof Error) {
      console.error(`${title.name}:`, title.message)
      this.alertWithType('error', title.message)
    } else {
      console.error(title, msg)
      this.alertWithType('error', title, msg)
    }
  }
  success(title: text, msg?: text) {
    this.alertWithType('success', title, msg)
  }

  private alertWithType(type: 'info' | 'warn' | 'error' | 'success', title: text, msg?: text) {
    if (!msg) {
      msg = title
      title = ''
    }
    this.dropDown.alertWithType(type, title, msg)
  }
}
export default new Toast()
