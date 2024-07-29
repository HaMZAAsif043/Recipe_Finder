import React, { useContext } from 'react';
import { globalContext } from '../components/store/Context';
import RecipeItems from '../components/RecipeItems';

export default function Home() {

    const { Recipes, Loading } = useContext(globalContext);

    if (Loading === true) {
        return <h1 className="text-3xl text-center mt-32">Loading...</h1>
    }

    return (
        <>
            <div className='py-8 container mx-auto flex flex-wrap justify-center gp-10'>
                {Recipes && Recipes.length > 0 ? Recipes.map((recipe) => (
                    <RecipeItems key={recipe.id} recipe={recipe} />
                )) : <h1 className="text-3xl text-center mt-32">No Data Found</h1>}
            </div>
        </>
    )
}
