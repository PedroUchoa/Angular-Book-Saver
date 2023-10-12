export interface Book extends Array<Book> {
  id: number,
  name: string,
  author:string,
  description: string,
  image: string
}
