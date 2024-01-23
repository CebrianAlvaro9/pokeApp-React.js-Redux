
import React from 'react'
import { SidebarPokemon } from '../components/SidebarPokemon'
import { CarrouselPokemon } from '../components/CarrouselPokemon'
import { PokemonCard } from '../components/PokemonCard'
export const PokemonPage = () => {
  return (
    <div className='container mx-auto m-2'>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center'>
          <img className='w-60' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
          <div className='ml-2'> {/* Añadido contenedor para el título */}
            <h1 className='text-3xl text-gray-600'> Shop</h1>
          </div>
        </div>

        <div className='flex items-center'>
          {/* Aquí puedes agregar tu componente de carrito de compras */}
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 4c0-.6.4-1 1-1h1.5c.5 0 .9.3 1 .8L7.9 6H19a1 1 0 0 1 1 1.2l-1.3 6a1 1 0 0 1-1 .8h-8l.2 1H17a3 3 0 1 1-2.8 2h-2.4a3 3 0 1 1-4-1.8L5.7 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <CarrouselPokemon />
      <div className="flex flex-col lg:flex-row mt-2">
        <div className="w-full lg:w-1/4 mt-14 ">
          <SidebarPokemon />
        </div>

        <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
          <h1 className='text-3xl mb-4 dark:text-white'>Pokemons</h1>

          <div className="flex flex-wrap justify-center">
            {/* Para pantallas grandes (lg), mostrar 4 tarjetas en una fila */}
            
              <PokemonCard />
              
          
            
          </div>
        </div>
      </div>







    </div>

  )
}