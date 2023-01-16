const node = import.meta.env.VITE_NURL
const php = import.meta.env.VITE_PURL

// queries api methods
/**
 * 1. GET
 * url/visit/
 * url/annouc/
 * url/about/
 * url/haikal/
 * url/haiah/id
 * url/haiah?qism=qism
 * url/fees/
 * url/qobul/
 * url/kuliat/
 * url/program/id
 * url/program?page=5&perpage=10
 * url/program?category=keyword
 * url/program?s=keyword
 * url/studies?program=program
 * 
 * 2. DELETE
 * url/visit/id
 * url/annouc/id
 * url/about/id
 * url/haikal/id
 * url/haiah/id
 * url/fees/id
 * url/qobul/id
 * url/kuliat/id
 * url/program/id
 * url/studies/id
 */

class Apis {
  // getting api

  getVisitors = async () => {
    await fetch(`${url}/visit/`)
      .then(j => j.json())
  }

  getAdmin = async () => {
    await fetch(`${url}/admin/`)
      .then(j => j.json())
  }

  getAnnoucement = async () => {
    await fetch(`${url}/annouc/`)
      .then(j => j.json())
  }

  getVismis = async () => {
    await fetch(`${url}/vision/`)
      .then(j => j.json())
  }

  getTasjeel = async () => {
    await fetch(`${url}/tasjeel/`)
      .then(j => j.json())
  }

  getHaikal = async () => {
    await fetch(`${url}/haikal/`)
      .then(j => j.json())
  }

  getHaiahs = async (qism) => {
    await fetch(`${url}/haiah?qism=${qism}`)
      .then(j => j.json())
  }

  getHaiah = async (id) => {
    await fetch(`${url}/haiah/${id}`)
      .then(j => j.json())
  }

  getFees = async () => {
    await fetch(`${url}/fees/`)
      .then(j => j.json())
  }

  getQobul = async () => {
    await fetch(`${url}/qobul/`)
      .then(j => j.json())
  }

  getKuliat = async () => {
    await fetch(`${url}/kuliat/`)
      .then(j => j.json())
  }

  getProgram = async (id) => {
    await fetch(`${url}/program/${id}`)
      .then(j => j.json())
  }

  getAllPrograms = async (page) => {
    await fetch(`${url}/program?page=${page}&perpage=10`)
      .then(j => j.json())
  }

  getProgramCategories = async (key) => {
    await fetch(`${url}/program?category=${key}`)
      .then(j => j.json())
  }

  searchProgram = async (key) => {
    await fetch(`${url}/program?s=${key}`)
      .then(j => j.json())
  }

  getStudies = async (program) => {
    await fetch(`${url}/studies?program=${program}`)
      .then(j => j.json())
  }

  // deleting api
  delAnnoucement = async (id) => {
    await fetch(`${url}/annouc/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delAdmin = async (id) => {
    await fetch(`${url}/admin/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delVismis = async (id) => {
    await fetch(`${url}/vision/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delHaikal = async (id) => {
    await fetch(`${url}/haikal/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delHaiah = async (id) => {
    await fetch(`${url}/haiah/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delFees = async (id) => {
    await fetch(`${url}/fees/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delQobul = async (id) => {
    await fetch(`${url}/qobul/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delKuliat = async (id) => {
    await fetch(`${url}/kuliat/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delStudies = async (id) => {
    await fetch(`${url}/studies/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delTasjeel = async (id) => {
    await fetch(`${url}/tasjeel/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delProgram = async (id) => {
    await fetch(`${url}/program/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }
}

const apis = new Apis()
export default apis