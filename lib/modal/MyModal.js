/* eslint-disable */
// @ts-nocheck
'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) {
              t[p] = s[p]
            }
          }
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) {
            throw t[1]
          }
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) {
        throw new TypeError('Generator is already executing.')
      }
      while (_) {
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          ) {
            return t
          }
          if (((y = 0), t)) {
            op = [op[0] & 2, t.value]
          }
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) {
                _.ops.pop()
              }
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      }
      if (op[0] & 5) {
        throw op[1]
      }
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) {
      return mod
    }
    var result = {}
    if (mod != null) {
      for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) {
          result[k] = mod[k]
        }
      }
    }
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var react_native_1 = require('react-native')
var react_native_modal_1 = __importDefault(require('react-native-modal'))
exports.MyModal = react_1.forwardRef(function (props, ref) {
  var _a = react_1.useState(false),
    visibility = _a[0],
    setVisibility = _a[1]
  var _b = react_1.useState(react_1.default.createElement(react_native_1.Text, null, '{modal}')),
    reactElement = _b[0],
    setReactElement = _b[1]
  var _c = react_1.useState('sheet'),
    style = _c[0],
    setStyle = _c[1]
  react_1.useImperativeHandle(ref, function () {
    return {
      startForResult: function (style_, element) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            if (visibility) {
              console.warn('[Modal]: Modal render was called before it was closed')
            }
            return [
              2 /*return*/,
              new Promise(function (res, rej) {
                var ok = function (result) {
                  setVisibility(false)
                  res(result)
                }
                var cancel = function () {
                  setVisibility(false)
                  rej()
                }
                var props_ = __assign(__assign({}, element.props), {
                  modal: { ok: ok, cancel: cancel }
                })
                setReactElement(react_1.default.createElement(element.type, props_))
                setStyle(style_)
                setVisibility(true)
              })
            ]
          })
        })
      }
    }
  })
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    style === 'alert' &&
      react_1.default.createElement(
        react_native_modal_1.default,
        {
          isVisible: visibility,
          animationIn: 'fadeIn',
          animationOut: 'fadeOut',
          avoidKeyboard: true,
          onBackdropPress: function () {
            return setVisibility(false)
          },
          backdropTransitionOutTiming: 0,
          onDismiss: function () {
            return setVisibility(false)
          }
        },
        react_1.default.createElement(
          react_native_1.View,
          { style: { width: '100%', alignSelf: 'center' } },
          reactElement
        )
      ),
    style === 'no_wrapper' &&
      react_1.default.createElement(
        react_native_modal_1.default,
        {
          style: { margin: 0 },
          isVisible: visibility,
          animationIn: 'fadeIn',
          animationOut: 'fadeOut',
          avoidKeyboard: true,
          onBackdropPress: function () {
            return setVisibility(false)
          },
          backdropTransitionOutTiming: 0,
          onDismiss: function () {
            return setVisibility(false)
          }
        },
        reactElement
      ),
    style === 'sheet' &&
      // FIXME: Handle swipe down OR scrollview inside Modal
      react_1.default.createElement(
        react_native_modal_1.default,
        // swipeDirection={'down'}
        {
          // swipeDirection={'down'}
          style: { justifyContent: 'flex-end', margin: 0 },
          isVisible: visibility,
          animationIn: 'slideInUp',
          animationOut: 'slideOutDown',
          // onSwipeComplete={() => setVisibility(false)}
          onBackdropPress: function () {
            return setVisibility(false)
          },
          onDismiss: function () {
            return setVisibility(false)
          }
        },
        reactElement
      )
  )
})
