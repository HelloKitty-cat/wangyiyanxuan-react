import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
      let promise
      if (type === 'GET'){
        let queryString = '';
        Object.keys(data).forEach(key => {
          const value = data[key]
          queryString += `${key}=${value}&`
        })

        if (queryString !== ''){
          queryString = queryString.substring(0,queryString.length-1)
          url += '?'+queryString
        }
        promise = axios.get(url)
      } else{
        promise = axios.post(url,data)
      }
      promise
        .then(res => {
          resolve(res.data)
        })
        .catch(err =>{
          reject(err)
        })

    })

}
