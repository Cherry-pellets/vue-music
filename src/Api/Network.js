import axios from 'axios'
// import Vue from 'vue'

// axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.timeout = 3000
// axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  get: function (path = '', data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(path, {
        params: data
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
      axios.post(path = '', data)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
