import axios from 'axios'
const baseURL = 'https://vishal-nodejs.herokuapp.com/'
const API = {
  MakeRequest (endpoint, method, SuccessBlock, CatchBlock, FinallyBlock) {
    const url = baseURL + endpoint
    return axios({
      method,
      url
    })
      .then((response) => {
        if (SuccessBlock) {
          return SuccessBlock(response)
        }
        return null
      })
      .catch((error) => {
        if (CatchBlock) {
          return CatchBlock(error)
        }
        return null
      })
      .finally(() => {
        if (FinallyBlock) {
          return FinallyBlock()
        }
        return null
      })
  },
  MakeRequestWithBody (endpoint, method, values, SuccessBlock, CatchBlock, FinallyBlock) {
    const url = baseURL + endpoint
    return axios({
      method,
      url,
      data: values
    })
      .then((response) => {
        if (SuccessBlock) {
          return SuccessBlock(response)
        }
        return null
      })
      .catch((error) => {
        if (CatchBlock) {
          return CatchBlock(error)
        }
        return null
      })
      .finally(() => {
        if (FinallyBlock) {
          return FinallyBlock()
        }
        return null
      })
  }
}
export default API
