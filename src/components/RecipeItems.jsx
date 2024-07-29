import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItems = ({ recipe }) => {
    return (
        <div className="w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden mx-5 my-5">
            <img src={recipe.image_url} alt="food" className="w-full h-40 object-cover object-center" />
            <div className="p-4">
                <p className="text-sm text-gray-500 mt-1">{recipe.publisher}</p>
                <h1 className="text-2xl font-semibold mb-3">{recipe.title}</h1>
                <Link to={`/recipe-items/${recipe.id}`} className='text-sm p-3 px-8 rounded-lg font-medium uppercase inline-block tracking-wider shadow-md bg-black text-white'>
                    Recipe Details
                </Link>
            </div>
        </div>
    )
}

export default RecipeItems;
