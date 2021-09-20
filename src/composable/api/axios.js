import axios from 'axios'

const baseURL = import.meta.env.VITE_RSS2JSON_URL

const axiosInstance = () => {
  const instance = axios.create({
    baseURL,
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
