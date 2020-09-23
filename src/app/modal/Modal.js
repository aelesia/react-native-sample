"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModalClass = /** @class */ (function () {
    function ModalClass() {
        this.modal = undefined;
    }
    ModalClass.prototype.setModal = function (modal) {
        this.modal = modal;
    };
    ModalClass.prototype.sheet = function (element) {
        if (this.modal == null) {
            throw Error('Modal not initialized. Please render <Modal> in the top level component and call setModal(ref)');
        }
        return this.modal.startForResult('sheet', element);
    };
    ModalClass.prototype.popup = function (element) {
        if (this.modal == null) {
            throw Error('Modal not initialized. Please render <Modal> in the top level component and call setModal(ref)');
        }
        return this.modal.startForResult('alert', element);
    };
    ModalClass.prototype.fullPage = function (element) {
        if (this.modal == null) {
            throw Error('Modal not initialized. Please render <Modal> in the top level component and call setModal(ref)');
        }
        return this.modal.startForResult('no_wrapper', element);
    };
    return ModalClass;
}());
exports.Modal = new ModalClass();
