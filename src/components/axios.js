import axios from 'axios'

export const getData = (url, method, data) => {

  return new Promise((resolve, reject) => {
    // console.log(data)
    if(data!==null){
      if (method === 'GET' || method === 'get') {
        axios.get(url, {
          params: data
        })
          .then(function (response) {
            resolve(response.data)
          })
          .catch(function (error) {
            reject(error)
          })
      } else {
        axios.post(url, data)
          .then(function (response) {
            resolve(response.data)
          })
          .catch(function (error) {
            reject(error)
          })
      }
    }else{
      if (method === 'GET' || method === 'get') {
        axios.get(url)
          .then(function (response) {
            resolve(response.data)
          })
          .catch(function (error) {
            reject(error)
          })
      } else {
        axios.post(url)
          .then(function (response) {
            resolve(response.data)
          })
          .catch(function (error) {
            reject(error)
          })
      }
    }
  })
}
