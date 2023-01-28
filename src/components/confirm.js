import { confirmAlert } from "react-confirm-alert"
import apis from './apis.js'

export const ConfirmAlert = (id, each) => {

  return confirmAlert({
    title: 'تأكيد العملية',
    message: 'هل تأكدت من حذف هذا؟',
    buttons: [
      {
        label: 'نعم',
        onClick: async () => {

          if (each == 'admin') {
            await apis.delAdmin(id)
            location.reload()
          }

          if (each == 'annouc') {
            await apis.delAnnoucement(id)
            location.reload()
          }

          if (each == 'vismis') {
            await apis.delVismis(id)
            location.reload()
          }

          if (each == 'fees') {
            await apis.delFees(id)
            location.reload()
          }

          if (each == 'haiah') {
            await apis.delHaiah(id)
            location.reload()
          }

          if (each == 'haikal') {
            await apis.delHaikal(id)
            location.reload()
          }

          if (each == 'kuliat') {
            await apis.delKuliat(id)
            location.reload()
          }

          if (each == 'program') {
            await apis.delProgram(id)
            location.reload()
          }

          if (each == 'studies') {
            await apis.delStudies(id)
            location.reload()
          }

          if (each == 'tasjeel') {
            await apis.delTasjeel(id)
            location.reload()
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