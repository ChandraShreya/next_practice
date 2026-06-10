import axios from "axios"

export const baseURL = `https://dummyjson.com`
export const AxiosInstance = axios.create({
    baseURL
})
export default AxiosInstance