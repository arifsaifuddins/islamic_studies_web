const node = import.meta.env.VITE_NURL
const php = import.meta.env.VITE_PURL

class Apis {
  // getting api

  getVisitors = async () => {
    return await fetch(`${node}/visit/`)
      .then(j => j.json())
  }

  getAdmin = async (id) => {
    return await fetch(`${node}/admin/${id}`)
      .then(j => j.json())
  }

  getAdmins = async () => {
    return await fetch(`${node}/admin/`)
      .then(j => j.json())
  }

  getVismis = async () => {
    return await fetch(`${node}/about/`)
      .then(j => j.json())
  }

  getTasjeel = async () => {
    return await fetch(`${node}/tasjeel/`)
      .then(j => j.json())
  }

  getFees = async () => {
    return await fetch(`${node}/fees/`)
      .then(j => j.json())
  }

  getQobul = async () => {
    return await fetch(`${node}/tasjeel/`)
      .then(j => j.json())
  }

  getStudies = async () => {
    return await fetch(`${node}/studies/`)
      .then(j => j.json())
  }

  getHaikal = async () => {
    return await fetch(`${node}/haikal/`)
      .then(j => j.json())
  }

  getAnnoucement = async () => {
    return await fetch(`${php}/annoucs.php`)
      .then(j => j.json())
  }

  getAnnoucementOne = async (id) => {
    return await fetch(`${php}/annoucs.php?id=${id}`)
      .then(j => j.json())
  }

  getHaiahs = async (qism) => {
    return await fetch(`${php}/teachers.php?specialization=${qism}`)
      .then(j => j.json())
  }

  getHaiah = async (id) => {
    return await fetch(`${php}/teachers.php?id=${id}`)
      .then(j => j.json())
  }

  getKuliat = async () => {
    return await fetch(`${php}/kuliats.php`)
      .then(j => j.json())
  }

  getProgram = async (id) => {
    return await fetch(`${php}/programs.php?id=${id}`)
      .then(j => j.json())
  }

  getAllPrograms = async (page) => {
    return await fetch(`${php}/programs.php?page=${page}&perpage=10`)
      .then(j => j.json())
  }

  getProgramCategories = async (key, page) => {
    return await fetch(`${php}/programs.php?category=${key}page=${page}&perpage=10`)
      .then(j => j.json())
  }

  searchProgram = async (key, page) => {
    return await fetch(`${php}/programs.php?s=${key}page=${page}&perpage=10`)
      .then(j => j.json())
  }

  // deleting api

  delAdmin = async (id) => {
    return await fetch(`${node}/admin/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delVismis = async (id) => {
    return await fetch(`${node}/about/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delHaikal = async (id) => {
    return await fetch(`${node}/haikal/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delStudies = async (id) => {
    return await fetch(`${node}/studies/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delTasjeel = async (id) => {
    return await fetch(`${node}/tasjeel/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delFees = async (id) => {
    return await fetch(`${node}/fees/${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delHaiah = async (id) => {
    return await fetch(`${php}/teachers.php?id=${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delKuliat = async (id) => {
    return await fetch(`${php}/kuliats.php?id=${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delAnnoucement = async (id) => {
    return await fetch(`${php}/annoucs.php?id=${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }

  delProgram = async (id) => {
    return await fetch(`${url}/programs.php?id=${id}`, {
      method: 'DELETE'
    })
      .then(j => j.json())
  }
}

const apis = new Apis()
export default apis