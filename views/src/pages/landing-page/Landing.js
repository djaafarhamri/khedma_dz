import hero from'../../assets/hero.svg'
import ahmed from '../../assets/ahmed.JPG'
import djaafar from '../../assets/djaafar.jpg'

const Landing = () => {
    return ( 
        <div className='font-inter'>
             {/*hero */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={hero} />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Find the best professionals in your region</h1>
                <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-green-cyan border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">Register</button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Login</button>
                </div>
              </div>
            </div>
        </section>
        {/* features */}
               <section className="text-gray-600 body-font">
         <div className="container px-5 py-24 mx-auto">
           <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-dark-blue">Our Features</h1>
             <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">our platform offer you many amazing features to use and to save u effort and time with user exp.</p>
           </div>
           <div className="flex flex-wrap -m-4">
             <div className="xl:w-1/3 md:w-1/2 p-4">
               <div className="border border-gray-200 p-6 rounded-lg">
                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                   </svg>
                 </div>
                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                 <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
               </div>
             </div>
             <div className="xl:w-1/3 md:w-1/2 p-4">
               <div className="border border-gray-200 p-6 rounded-lg">
                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-cyan mb-4">
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <circle cx="6" cy="6" r="3"></circle>
                     <circle cx="6" cy="18" r="3"></circle>
                     <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                   </svg>
                 </div>
                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                 <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
               </div>
             </div>
             <div className="xl:w-1/3 md:w-1/2 p-4">
               <div className="border border-gray-200 p-6 rounded-lg">
                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-cyan mb-4">
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                     <circle cx="12" cy="7" r="4"></circle>
                   </svg>
                 </div>
                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                 <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
               </div>
             </div>
             <div className="xl:w-1/3 md:w-1/2 p-4">
               <div className="border border-gray-200 p-6 rounded-lg">
                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                   </svg>
                 </div>
                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                 <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
               </div>
             </div>
             <div className="xl:w-1/3 md:w-1/2 p-4">
               <div className="border border-gray-200 p-6 rounded-lg">
                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                   </svg>
                 </div>
                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                 <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
               </div>
             </div>
             <div className="xl:w-1/3 md:w-1/2 p-4">
               <div className="border border-gray-200 p-6 rounded-lg">
                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                   </svg>
                 </div>
                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                 <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
               </div>
             </div>
           </div>  
         </div>
       </section>

       {/*teams */}
       <h1 className='text-dark-blue font-semibold text-2xl lg:text-4xl text-center'>Team Member</h1>
       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 mx-auto sm:grid-cols-2  lg:max-w-screen-lg">
        <div>
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src={ahmed}
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Mekkaoui Ahmed</p>
            <p className="mb-4 text-xs text-dark-blue">Founder, Admin</p>
            <p className="text-sm tracking-wide text-gray-800">
              a junior programmer starve for learning and experiencing new things, speciality of web dev average skills but keep improving.
            </p>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src={djaafar}
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Djaafar Hamri</p>
            <p className="mb-4 text-xs text-gray-800">Founder, Admin</p>
            <p className="text-sm tracking-wide text-gray-800">
              Secondary fermentation degrees plato units of bitterness, cask
              conditioned ale ibu real ale pint glass craft beer. krausen goblet
              grainy ibu.
            </p>
          </div>
        </div>
        
      </div>
    </div>
        </div>
     );
}
 
export default Landing;