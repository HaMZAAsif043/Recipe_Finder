import { createContext } from 'react';
import { useState } from 'react';
export const globalContext = createContext(null);

export default function GlobalState({ children }) {
    const [Search, setSearch] = useState('');
    const [Loading, setLoading] = useState(false);
    const [Recipes, setRecipes] = useState([]);
    const [RecipeDetails, setRecipeDetails] = useState({});
    const [FavoriteList, setFavoriteList] = useState([]);


    function handleAddToFavorite(getCurrentItem) {
        console.log(getCurrentItem);
        let cpyFavoritesList = [...FavoriteList];
        const index = cpyFavoritesList.findIndex(item => item.id === getCurrentItem.id);

        if (index === -1) {
            cpyFavoritesList.push(getCurrentItem);
        } else {
            cpyFavoritesList.splice(index, 1); // Correctly removes the item
        }

        setFavoriteList(cpyFavoritesList);
    }


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${Search}`);
            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipes(data.data.recipes);
                setLoading(false)
                setSearch('')
            }
        }
        catch (e) {
            console.log(e);
            setLoading(false)
            setSearch('')
        }
        console.log(Loading, Recipes)
    }
    return <globalContext.Provider value={{
        Search,
        setSearch,
        handleSubmit,
        Loading,
        Recipes,
        RecipeDetails,
        setRecipeDetails,
        handleAddToFavorite,
        FavoriteList
    }}>{children}</globalContext.Provider>
};
