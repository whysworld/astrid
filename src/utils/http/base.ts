import { DEV_API_ENDPOINT } from "../constants"
export abstract class BaseService {

  protected async get(segment: string): Promise<any> {
    return this.fetch(segment, 'GET')
  }

  protected async post(segment: string, body: any): Promise<any> {
    return this.fetch(segment, 'POST', body)
  }

  protected async patch(segment: string, body: any): Promise<any> {
    return this.fetch(segment, 'PATCH', body)
  }

  protected async delete(segment: string): Promise<any> {
    return this.fetch(segment, 'DELETE')
  }

  protected async put<T = any>(segment: string, body?: any, token?: string): Promise<T> {
    return this.fetch(segment, 'PUT', body, token)
  }

  private async fetch(segment: string, method: string, body?: any, token?: string): Promise<any> {
    const options = {
      method,
      headers: this.headers(token),
      body: !body ? undefined : JSON.stringify(body)
    }

    try {
      const response = await fetch(`${DEV_API_ENDPOINT}${segment}`, options)
      if (response.ok) return this.handleResponse(response)
      else throw new Error(response.statusText)
    } catch (error) {
      throw error
    }
  }

  private async handleResponse(response: Response): Promise<any> {
    return response.json()
  }

  private headers(token = ""): Headers {
    const headers: { [key: string]: string } = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    if (token) headers.Authorization = `Bearer ${token}`
    return new Headers(headers)
  }

}
