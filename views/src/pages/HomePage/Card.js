import img from '../../assets/O.jpg'

const Card = ({key, professional}) => {
   
    return ( 
        <div key={key} className="antialiased  text-dark-blue  p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a href="" className=" block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div className="md:flex md:justify-center">
                <div className="relative pb-48 md:rounded-full md:w-7/12 lg:w-2/5 xl:w-8/12 overflow-hidden">
                  <img className="absolute inset-0 h-full w-full object-cover ease-in-out duration-300  hover:scale-105" src={`http://localhost:40000/${professional.profile_image}`} alt=""/>
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none  text-dark-blue rounded-full font-semibold uppercase tracking-wide text-base">{professional.first_name} {professional.last_name} </span>
                <h2 className="mt-2 mb-2  font-bold">{professional.job}</h2>
                {/* <h2 className="mt-2 mb-2  font-bold">{service.title}</h2> */}
                <p className="text-sm">Description: {professional.description}</p>
                {/* <p className="text-sm">Description: {service.description}</p> */}
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">ab</span>&nbsp;<span className="font-bold text-xl">45,00</span>&nbsp;<span className="text-sm font-semibold">€</span>
                  {/* <span className="text-sm font-semibold">ab</span>&nbsp;<span className="font-bold text-xl">{service.price}</span>&nbsp;<span className="text-sm font-semibold">€</span> */}
                </div>
              </div>
              <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center mb-1">
                  <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> {professional.address}
                </span>
                <span className="flex items-center">
                  <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>Rating
                </span>  
                <span>
                 <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{professional.reviews[0].rating}</p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{professional.reviews.length}</a>
                 </div>
                </span>      
              </div>
              </a>
            </div>
          </div>
        </div>
      </div> );
}
 
export default Card;