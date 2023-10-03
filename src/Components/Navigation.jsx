import React, { useState } from 'react';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
     
<nav class="fixed top-0 backdrop-blur-md z-10 bg-white/70 w-full border-gray-200 px-4">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a to="/" class="flex items-center">
            <a class='text-2xl text-black bx bx-message-dots'></a>
            <span class="self-center text-black text-2xl font-semibold whitespace-nowrap p-2"> Doggo</span>
          </a>
          <button
            id="menuToggleButton"
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only ">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div
            class={`${isMenuOpen ? 'block' : 'hidden'
              } w-full md:block md:w-auto `}
            id="navbar-default" 
          >
            <ul class=" font-medium flex flex-col p-4  mt-2 md:flex-row md:space-x-8 ">
              <li>
                <a href='#home' class="my-px max-sm:bg-red-600 block py-2 rounded px-2 text-black md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href='#partner' class="my-pe max-sm:bg-red-600 block py-2 rounded px-2 text-black md:p-0 md:text-black">Partners</a>
              </li>
              <li>
                <a href="#about" class="my-pe max-sm:bg-red-600 block py-2 rounded px-2 text-black md:p-0 md:text-black">Aboutus</a>
              </li>
              <li>
                <a href='#breed' class="my-pe max-sm:bg-red-600 block py-2 rounded px-2 text-black md:p-0 md:text-black">Breeds</a>
              </li>
        
              <li>
                <div class="dropdown ">

                    <a href="#contact" class="flex items-center py-1 px-4  my-px text-sm font-bold rounded-xl bg-red-300 text-purple-blue-600 hover:bg-purple-600 hover:text-white transition duration-300">
                        Contact
                    </a>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </div>
  );
};

export default Navigation;