import React from 'react'

const Home = () => {
  return (
    <div>
      <section id='home' class="px-12 flex w-full mt-16 md:gap-5 bg-red-400">
        <div class="mt-12 flex flex-col justify-center col-span-1 text-center lg:text-start">
          <div class="flex items-center justify-center mb-4 lg:justify-normal">
            <img class="h-5" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-1.png" alt="logo" />
            <h4 class="ml-2 animate-fade-right animate-ease-out text-sm font-bold tracking-widest text-primary uppercase">Weather big or small we have all </h4>
          </div>
          <h1 class="mb-8 animate-fade-right animate-ease-out text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">Feeling better with your little friend</h1>
          <p class="animate-fade-right animate-ease-out mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
            Say goodbye to endless hours spent on building templates from scratch. Experience the quickest, most responsive, and trendiest dashboard solution available. Seriously.
          </p>
          <div class="mb-5 flex flex-col items-center gap-4 lg:flex-row">
            <button class="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">Get started now</button>
            <button class=" hover:animate-once animate-bounce animate-duration-[1000ms] animate-delay-0 animate-ease-in-out bg-slate-700 flex items-center py-4 text-sm font-medium px-7 text-red-200 hover:text-white transition duration-300 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path>
              </svg>
              Book a free call
            </button>
          </div>
        </div>
        <div class=" items-center justify-end hidden col-span-1 md:flex">
          <img class="animate-fade-left w-4/5 hidden lg:flex lg:w-4/5 bg-cover" src="../photo/dog2.png" alt="header image" />
        </div>
      </section>


      <section id='partner' class=" px-12 h-auto py-8 bg-gray-800 hover:bg-red-900">
        <h1 class="p-4 mb-5 text-4xl font-extrabold text-white">Our Partners</h1>
        {/* <button type="button" class="my-12 p-5 w-12 h-auto flex-auto  text-md font-medium  focus:ring-gray-700 bg-gray-900 text-gray-100 border-gray-600 hover:text-white hover:bg-red-700">
                <i class='bx bxs-dog text-3xl'></i>
                <h1 className='py-2'>Buy a dog</h1>
                </button>
                */}
        <div class=" mb-5 md:justify-center md:items-center flex flex-row overflow-x-auto">
          <button class=" flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

          <button class="flex m-1 bg-white flex-row items-center rounded-xl p-2 hover:bg-gray-100">
            <img src="https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg" class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200"></img>
            <div class=" truncate ml-2 md:-ml-2 w-48 text-sm font-semibold" style={{ maxWidth: '7rem' }}>Henry Bould</div>
          </button>

        </div>
      </section>

      <section id='about' class="px-12 h-auto py-8 bg-white">
        <h1 class="p-10 -mb-8 text-4xl font-extrabold text-black">About us</h1>
        <div class="md:block">
          <div class="w-full md:mr-10">
            <model-viewer src="../photo/shiba.glb" camera-controls disable-pan shadow-intensity="1" auto-rotate disable-tap disable-zoom></model-viewer>
          </div>

          <div class="md:flex ">
            <div class="p-5 bg-gray-600 rounded mb-10">
              <p class="font-sans	 block mb-1  text-left text-white text-2xl leading-tight font-black underline">About</p>
              <p class="text-left md:text-justify	text-xl	text-white">Welcome to Doggo, where love, compassion, and wagging tails come together to make a difference in the lives of dogs in need. We are a dedicated team of animal lovers who have made it our mission to provide a safe haven for dogs who are searching for their forever homes.</p>

            </div>
            <div class=" p-5 md:ml-5 bg-red-500 rounded mb-10">
              <p class="font-sans	 block mb-1 text-left text-black text-2xl  leading-tight font-black underline">Our Story</p>
              <p class="text-left md:text-justify	text-xl	text-white">Doggo was founded with a simple yet profound goal: to rescue, rehabilitate, and rehome dogs that have faced adversity and abandonment. Our journey began 2018 when a group of like-minded individuals came together with a shared passion for making a positive impact on the lives of our four-legged friends.
              </p>

            </div>
            </div>

        </div>
      </section>

      <section id='breed' class="px-12 md:px-24 h-auto py-8 bg-red-400">
        <h1 class="p-10 mb-6 text-4xl font-extrabold text-grey-600">Popular Breed</h1>

        <div class="hover:animate-shake mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class=" md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="../photo/type2.png" alt="Modern building architecture" />
            </div>
            <div class="p-8 bg-gray-800">
              <a href="#" class="block mt-1 text-white text-lg leading-tight font-medium hover:underline">Pug</a>
              <p class="mt-2 text-white"> Pugs live to please their people, so they are generally easy to train. Their feelings are easily hurt, and harsh training methods should never be used.</p>
            </div>
          </div>
        </div>


        <div class="hover:animate-shake mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="../photo/type1.png" alt="Modern building architecture" />
            </div>
            <div class="p-8 bg-red-600">
              <a href="#" class="block mt-1 text-white text-lg leading-tight font-medium hover:underline">Bichon Frise</a>
              <p class="mt-2 text-white">It stands among the world's great 'personality dogs.Since antiquity, these irresistible canine comedians have relied on charm, beauty, and intelligence to weather history's ups and downs.</p>
            </div>
          </div>
        </div>



        <div class="hover:animate-shake mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="../photo/type3.png" alt="Modern building architecture" />
            </div>
            <div class="p-8 bg-gray-800">
              <a href="#" class="block mt-1 text-white text-lg leading-tight font-medium hover:underline">Bull Terrier</a>
              <p class="mt-2 text-white">Bull Terrier live to protect their people, so they are generally easy to train. Their feelings are loyal, and harsh training methods should be used.</p>
            </div>
          </div>
        </div>

        <div class="hover:animate-shake mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="../photo/type5.png" alt="Modern building architecture" />
            </div>
            <div class="p-8 bg-red-600">
              <a href="#" class="block mt-1 text-white text-lg leading-tight font-medium hover:underline">Boxer</a>
              <p class="mt-2 text-white">It stands among the world's great 'personality dogs.Since antiquity, these irresistible canine comedians have relied on charm, beauty, and intelligence to weather history's ups and downs.</p>
            </div>
          </div>
        </div>

      </section>

      <section id='contact' class="bg-gray-800">
   
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl font-bold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to reach out? Contact Me!</p>
<form class="space-y-8">
<div>
              <label for="email" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" name="name" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ayush Shrestha" required/>
          </div>
          <div>
              <label for="email" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="from_name" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject"  class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" name="to_name" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how i can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" name="message" placeholder="Message"></textarea>
          </div>
          <button type="submit" value="Send" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
  </section>
      
      <footer class="bg-red-400">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-black sm:text-center">Ayush Shrestha 
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <p class="mr-4 text-black hover:underline md:mr-6 ">ayyush227@gmail.com</p>
        </li>
       
    </ul>
    </div>
</footer>
    

    </div>
  )
}

export default Home