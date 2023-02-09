import { useState, useEffect } from 'react'

export function useLocalStorage() {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favoriteCards')) || []);
  
  useEffect(() => {
    localStorage.setItem("favoriteCards", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(id, isFavorite) {  
    setFavorites(favorites.find(item => item.id === id)
    ? favorites.map(item => item.id === id ? {...item, isFavorite: !item.isFavorite} : item)
    : [...favorites, {id: id, isFavorite: !isFavorite}])  
  }

  return [favorites, toggleFavorite];
}

