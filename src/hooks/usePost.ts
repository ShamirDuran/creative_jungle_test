import { useEffect, useState } from 'react'
import { PostApi } from '../api'
import { Post } from '../api/models'
import { toast } from 'sonner'

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<Post[]>([])
  const [filterValue, setFilterValue] = useState('') // Nuevo estado para el valor del filtro
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]) // Usar un nuevo estado para los posts filtrados

  let timer: NodeJS.Timeout | null = null
  const api = new PostApi()

  const getPosts = async () => {
    const posts = await api.getPosts()

    setPosts(posts)
    setIsLoading(false)
  }

  const filterPostsById = () => {
    if (filterValue === '') {
      setFilteredPosts([]) // Limpiar los posts filtrados
      return
    }

    const filtered = posts.filter((post) => post.id.toString() === filterValue)
    setFilteredPosts(filtered) // Actualizar los posts filtrados
  }

  const removePost = (id: string) => {
    setPosts((prev) => prev.filter((post) => post.id.toString() !== id))
    toast.success(`Se elimito el post con id ${id}`)
  }

  /// Función para manejar el cambio de valor del filtro, con un retraso de 2.5 segundos
  const handleChangeFilterValue = (value: string) => {
    // Reiniciar el temporizador cada vez que el usuario escriba
    if (timer) {
      clearTimeout(timer)
    }

    // Configurar un nuevo temporizador de 2 segundos
    timer = setTimeout(() => {
      // Llamar a la función que deseas ejecutar después del retraso
      setFilterValue(value)
    }, 250)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    filterPostsById()
  }, [filterValue])

  return {
    posts: filterValue !== '' ? filteredPosts : posts, // Mostrar los posts filtrados si existen
    handleChangeFilterValue,
    removePost,
    isLoading,
  }
}
