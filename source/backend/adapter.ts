//----------------------------------------------------------------------------------
import axios from 'axios';
import { showNotification } from '@/plugins/sweet.alert';
//----------------------------------------------------------------------------------
const AXIOS = axios.create({
  baseURL: 'http://localhost:4040'
})
//----------------------------------------------------------------------------------
AXIOS.interceptors.response.use(
  ({ data: response }) => {
    showNotification(response.message)
    return response
  },
  ({ response }: any) => {
    showNotification(response.data.message)
    return response.data
  },
)
//----------------------------------------------------------------------------------
export async function POST(endpoint: string, DBModel: object) {
  return AXIOS.post(endpoint, DBModel)
}
//----------------------------------------------------------------------------------
export async function PUT(endpoint: string, DBModel: object) {
  return await AXIOS.put(endpoint, DBModel)
}
//----------------------------------------------------------------------------------