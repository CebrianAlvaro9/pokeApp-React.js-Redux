
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm"
import { setQuery } from "../../slices/pokemon/pokemonSlice";
import { useEffect } from "react";
import { useState } from "react";

export const SearchInput = () => {

    // const { register, watch } = useForm();
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState('Name')
    const [formValues, handleInputChange] = useForm({ search: '' });
    const { search } = formValues;

    const dropdownData = ['Abilities', 'Weakness', 'Name', 'Type']

    useEffect(() => {
        dispatch(setQuery({ query: search, page: 1, filter: dropdown }))
    }, [dispatch, search, dropdown])

    return (
        <>
            <form className="lg:w-1/2">
                <div className="flex">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg
                     hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button">Search by {dropdown}<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg></button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            { dropdownData.map((item) => (
                                  <li key={item}>
                                  <button onClick={()=>setDropdown(item)} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</button>
                              </li>
                            ))

                            }


                        </ul>
                    </div>

                    <div className="relative w-full">
                        <input name="search"
                            value={search}
                            onChange={handleInputChange}
                            type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-neutral-500" placeholder="Search Pokemons by type, name..." required />
                        <button className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-neutral-700 rounded-e-lg border border-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>

            </form>



        </>



    )
}
