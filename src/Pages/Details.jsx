import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { globalContext } from '../components/store/Context';
import { MdFavoriteBorder } from "react-icons/md";




const Details = () => {
    const { id } = useParams();
    const { RecipeDetails, setRecipeDetails, handleAddToFavorite } = useContext(globalContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDetails(id) {
            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
                const data = await response.json();
                if (data.data && data.data.recipe) {
                    setRecipeDetails(data.data.recipe);
                } else {
                    console.error('Recipe not found');
                }
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            getDetails(id);
        } else {
            console.log('No ID found');
            setLoading(false);
        }
    }, [id, setRecipeDetails]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!RecipeDetails || !RecipeDetails.ingredients) {
        return <div>No recipe details available.</div>;
    }

    return (
        <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='row-start-2 lg:row-start-auto'>
                <div className='h-90 overflow-hidden rounded-xl group'>
                    <img src={RecipeDetails.image_url || 'default_image_url'} alt="food" className='w-full h-auto object-cover block group-hover:scale-105 duration-300' />
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold mb-4'>{RecipeDetails.title || 'No Title'}</h1>
                <p className='text-lg mb-4'>{RecipeDetails.publisher || 'Unknown Publisher'}</p>
                <button onClick={() => handleAddToFavorite(RecipeDetails)} className='text-sm p-3 px-8 rounded-lg font-medium uppercase inline-block tracking-wider shadow-md bg-black text-white'>
                    <MdFavoriteBorder />
                </button>
                <p className='py-5'>Ingredients:</p>
                <ul className='list-disc pl-5'>
                    {RecipeDetails.ingredients.map((ingredient, index) => (
                        <li key={index} className='mb-2'>
                            {ingredient.quantity} {ingredient.unit} {ingredient.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Details;