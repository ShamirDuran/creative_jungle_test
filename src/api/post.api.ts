import { Post } from './models'

interface Methods {
  getPosts: () => Promise<Post[]>
}

export class PostApi implements Methods {
  url: string

  constructor() {
    this.url = 'https://jsonplaceholder.typicode.com'
  }

  async getPosts() {
    const response = await fetch(`${this.url}/posts`)
    const data: Post[] = await response.json()
    return data
  }
}
