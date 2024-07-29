import { useContext } from "react";
import { globalContext } from "../components/store/Context";
import RecipeItems from "../components/RecipeItems";

export default function Favorites() {
    const { FavoriteList } = useContext(globalContext);

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {FavoriteList.length > 0 ? (
                FavoriteList.map((item) => <RecipeItems key={item.id} recipe={item} />)
            ) : (
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing is added to favorites.
                    </p>
                </div>
            )}
        </div>
    );
}




