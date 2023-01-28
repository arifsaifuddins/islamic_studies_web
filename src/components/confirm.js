import { confirmAlert } from "react-confirm-alert"
import apis from './apis.js'

export const ConfirmAlert = (id, each) => {

  return confirmAlert({
    title: 'تأكيد العملية',
    message: 'هل تأكدت من حذف هذا؟',
    buttons: [
      {
        label: 'نعم',
        onClick: () => {

          if (each == 'admin') {
            apis.delAdmin(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'annouc') {
            apis.delAnnoucement(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'vismis') {
            apis.delVismis(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'fees') {
            apis.delFees(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'haiah') {
            apis.delHaiah(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'haikal') {
            apis.delHaikal(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'kuliat') {
            apis.delKuliat(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'program') {
            apis.delProgram(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'studies') {
            apis.delStudies(id).then(a => a.json()).then(_ => location.reload())
          }

          if (each == 'tasjeel') {
            apis.delTasjeel(id).then(a => a.json()).then(_ => location.reload())
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