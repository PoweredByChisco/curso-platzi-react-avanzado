import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCategories = async () => {
      const response = await window.fetch(
        'https://petgram-server-fco-o0ywu3gts-poweredbychisco.vercel.app/categories'
      )
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }

    fetchCategories()
  }, []) /* The second parameter is for that the hook run when the component mount  */

  return { categories, loading }
}
