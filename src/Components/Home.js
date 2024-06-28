import React from 'react'


 import { CloudArrowUpIcon, LockClosedIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'



const features = [
  {
    name: 'Rooting for Our Future: The Importance of Forests',
    description:
      'In this section, we’ll delve into the critical role that forests play in maintaining ecological balance, supporting biodiversity, and combating climate change. From carbon sequestration to providing habitat for countless species, forests are our lifelines.',
     icon: CloudArrowUpIcon,
  },
  {
    name: 'Plant a Tree, Grow a Legacy: Promoting Tree Plantation',
    description: 'Discover how each sapling we plant contributes to a greener, healthier planet. We’ll explore practical tips for tree planting, the benefits of urban forests, and how communities can come together to create sustainable green spaces.',
     icon: LockClosedIcon,
  },
  {
    name: 'Forest Guardians: Advocating for Conservation',
    description: 'Meet the unsung heroes—forest rangers, conservationists, and local communities—who tirelessly protect our forests. Learn about their challenges, successes, and the urgent need for collective action to safeguard these invaluable ecosystems.',
     icon: ChatBubbleLeftEllipsisIcon,
  },
]


export default function Home() {



  return (
    
    <>
    <div >
      <div className="bg-white text-white "
        style={{
          backgroundImage:"URL('https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize:'auto' ,
          opacity: 50,
        }}
      
      >

   

      <div className="relative px-6 pt-14 lg:px-8 text-white"
     
      >
        <div
          className=""
          aria-hidden="true"
          
        >
          <div
            className="relative "
           
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative ">
              Announcing our next round of funding.{' '}
              <a href="/" className="font-semibold text-white-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
             Hi , I am Pratham This is My Fullstack Project
            </h1>
          
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md border px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Get started
              </a>
              <a href="/" className="text-sm font-semibold leading-6 text-white-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className=""
          aria-hidden="false"
        >
          <div
           
          />
        </div>
      </div>
    </div>


    <div className="overflow-hidden bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Tress and Forests</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Remember, every leaf, every branch, and every tree matters. Let’s nurture our forests and ensure a thriving planet for generations to come! 🌳🌿🌎
              </p>

              <div data-aos="flip-left" data-aos-anchor=".">
             
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" /> */}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
</div>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/25961210/pexels-photo-25961210/free-photo-of-a-group-of-children-holding-seedlings-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>



    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
     
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Remember, every leaf, every branch, and every tree matters. Let’s nurture our forests and ensure a thriving planet for generations to come! 🌳🌿🌎
             </p>
         
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>





    <footer class="bg-black rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-100 sm:text-center dark:text-gray-400">© 2024 Pratham Verma. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/About.js" class="hover:underline me-4 md:me-6">About</a>
        </li>
       
       
        <li>
            <a href="/Contactform.js" class="hover:underline">Contact Form</a>
        </li>
    </ul>
    </div>
</footer>



  

</div>




    </>
  )
}
