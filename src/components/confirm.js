import { confirmAlert } from "react-confirm-alert"
import apis from './apis'

export const ConfirmAlert = (id, each) => {

  confirmAlert({
    title: 'تأكيد الحذف',
    message: 'هل تأكدت من حذف هذا؟',
    buttons: [
      {
        label: 'نعم',
        onClick: () => {
          if (each == 'admin') {
            window.history.back()
            apis.delAdmin(id)
          }

          if (each == 'annouc') {
            window.history.back()
            apis.delAnnoucement(id)
          }

          if (each == 'vismis') {
            window.history.back()
            apis.delVismis(id)
          }

          if (each == 'fees') {
            window.history.back()
            apis.delFees(id)
          }

          if (each == 'haiah') {
            window.history.back()
            apis.delHaiah(id)
          }

          if (each == 'haikal') {
            window.history.back()
            apis.delHaikal(id)
          }

          if (each == 'kuliat') {
            window.history.back()
            apis.delKuliat(id)
          }

          if (each == 'program') {
            window.history.back()
            apis.delProgram(id)
          }

          if (each == 'studies') {
            window.history.back()
            apis.delStudies(id)
          }

          if (each == 'tasjeel') {
            window.history.back()
            apis.delTasjeel(id)
          }
        }
      },
      {
        label: 'لا',
        onClick: () => null
      }
    ]
  })
}