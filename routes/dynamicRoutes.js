import axios from 'axios'
import { API_BASE_URL, API_KEY } from '../config/microcms'

export default async () => {
  const { data: { contents: contentsProject } = {} } = await axios.get(
    `${API_BASE_URL}/project`,
    {
      headers: { 'X-API-KEY': API_KEY }
    }
  )
  const { data: { contents: contentsProcess } = {} } = await axios.get(
    `${API_BASE_URL}/process`,
    {
      headers: { 'X-API-KEY': API_KEY }
    }
  )
  const routeProject = contentsProject.map((content) => ({
    route: `/project/${content.projectSlug}`,
    payload: content
  }))
  const routeProcess = contentsProcess.map((content) => ({
    route: `/process/${content.processSlug}`,
    payload: content
  }))
  return [...routeProject, ...routeProcess]
}
