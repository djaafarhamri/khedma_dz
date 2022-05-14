import img from '../../assets/O.jpg'

const Card = () => {
   
    return ( 
        <div class="antialiased  text-dark-blue  p-6">
        <div class="container mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a href="" class=" block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div className="md:flex md:justify-center">
                <div class="relative pb-48 md:rounded-full md:w-7/12 lg:w-2/5 xl:w-8/12 overflow-hidden">
                  <img class="absolute inset-0 h-full w-full object-cover ease-in-out duration-300  hover:scale-105" src={img} alt=""/>
                </div>
              </div>
              <div class="p-4">
                <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-base">Ahmed Yacine</span>
                <h2 class="mt-2 mb-2  font-bold">programmer</h2>
                <p class="text-sm"> im ahmed from saida work as fullstack programmer with some reallife experience.</p>
                <div class="mt-3 flex items-center">
                  <span class="text-sm font-semibold">price</span>&nbsp;<span class="font-bold text-xl">500-800 </span>&nbsp;<span class="text-sm font-semibold">$</span>
                </div>
              </div>
              <div class="p-4 border-t border-b text-xs text-gray-700">
                <span class="flex items-center mb-1">
                  <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> Saida ,alger
                </span>
                <span class="flex items-center">
                  <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>Rating
                </span>        
              </div>
              </a>
            </div>
          </div>
        </div>
      </div> );
}
 
export default Card;