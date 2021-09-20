import axios from 'axios'

const axiosInstance = () => {
  const instance = axios.create({
    headers: { 'Content-Type': 'application/json' },
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log(error)
    }
  )

  return instance
}

export { axiosInstance }
