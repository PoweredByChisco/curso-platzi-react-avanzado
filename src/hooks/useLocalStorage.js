import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value)) /* The stringigy is unnecessary, setItem by default convert the value in a string */
      setValue(value)
    } catch (err) { /* If the navegator is in private mode, you will catch the error cause in that mode your don't have LocalStorage */
      console.error(err)
    }
  }

  return [storedValue, setLocalStorage]
}
