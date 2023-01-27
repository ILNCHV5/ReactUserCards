import { useState, useEffect } from 'react'
 
const retrievedFavs = JSON.parse(localStorage.getItem("favoriteCards"));

export default function useLocalStorage(initialState) {
    const [favorites, setFavorites] = useState(retrievedFavs ? retrievedFavs : initialState);

    useEffect(() => {
        const favsToBeStored = JSON.stringify(favorites);
        localStorage.setItem("favoriteCards", favsToBeStored);
      }, [favorites]);

    return [favorites, setFavorites];
}