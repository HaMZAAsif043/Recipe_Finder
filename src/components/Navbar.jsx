import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { globalContext } from "./store/Context";
export default function Navbar() {
    const { Search, setSearch, handleSubmit } = useContext(globalContext);
    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
            <li>
                <NavLink to="/recipe-items" className="text-black hover:text-gray-700 duration-300">FoodRecipe</NavLink>
            </li>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="Search"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search recipe"
                className="bg-white p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200" />
        </form>
        <ul className="flex gap-5">
            <li>
                <NavLink to="/" className="text-black hover:text-gray-700 duration-300">Home</NavLink>
            </li>
            <li>
                <NavLink to="/favorites" className="text-black hover:text-gray-700 duration-300">Favorites</NavLink>
            </li>
        </ul>
    </nav>
}