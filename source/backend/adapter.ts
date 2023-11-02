//----------------------------------------------------------------------------------
import axios from 'axios';
//----------------------------------------------------------------------------------
const AXIOS = axios.create({
  baseURL: 'http://localhost:4040'
})
//----------------------------------------------------------------------------------
AXIOS.interceptors.response.use(
  ({ data: response }) => {
    return response
  },
  ({ response }: any) => {
    return response.data
  },
)
//----------------------------------------------------------------------------------
export async function POST(endpoint: string, DBModel: object) {
  return AXIOS.post(endpoint, DBModel)
}
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
export async function GET(endpoint: string, DBModel: object) {
  return AXIOS.get(endpoint, DBModel)
}
//----------------------------------------------------------------------------------
export async function PUT(endpoint: string, DBModel: object) {
  return await AXIOS.put(endpoint, DBModel)
}
//----------------------------------------------------------------------------------