/* eslint-disable */
// @ts-nocheck
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var Toast = /** @class */ (function () {
  function Toast() {}
  Toast.prototype.setDropDown = function (dropDown) {
    this.dropDown = dropDown
  }
  Toast.prototype.info = function (title, msg) {
    console.info(title, msg)
    this.alertWithType('info', title, msg)
  }
  Toast.prototype.warn = function (title, msg) {
    console.warn(title, msg)
    this.alertWithType('warn', title, msg)
  }
  Toast.prototype.error = function (title, msg) {
    if (title instanceof Error) {
      console.error(title.name + ':', title.message)
      this.alertWithType('error', title.message)
    } else {
      console.error(title, msg)
      this.alertWithType('error', title, msg)
    }
  }
  Toast.prototype.success = function (title, msg) {
    this.alertWithType('success', title, msg)
  }
  Toast.prototype.alertWithType = function (type, title, msg) {
    if (!msg) {
      msg = title
      title = ''
    }
    this.dropDown.alertWithType(type, title, msg)
  }
  return Toast
})()
exports.default = new Toast()
