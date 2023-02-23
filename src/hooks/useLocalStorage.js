import { useState, useEffect } from 'react'

export function useLocalStorage(users) {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favoriteCards')) || []);

  useEffect(() => {
    if (!favorites.length) {
      setFavorites(users.map(user => ({ id: user.id, isFavorite: user.isFavorite })))
    }
    localStorage.setItem("favoriteCards", JSON.stringify(favorites));
  }, [favorites, users]);

  return [favorites, setFavorites];
}