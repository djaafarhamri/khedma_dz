import Rating from "./Rating";

const Comment = () => {
    return ( 
        <div class="w-full shadow-md bg-white rounded-md">
            <div className="flex flex-col divide-y divide-gray-300">
               <form action="" class="w-full p-4">
                <div class="mb-2">
                   <label for="comment" class="text-lg text-gray-600">Add a comment</label>
                   <textarea class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                     name="comment" placeholder=""></textarea>
                </div>
                <div className="flex space-x-2">
                <button class="px-3 py-2 text-sm text-blue-100 bg-green-cyan rounded">Comment</button>
                <Rating/>
                </div>
                
                </form>

                <div>
                <div class="my-2 mx-1 max-w-lg flex gap-3 rounded-md bg-white p-2 text-black shadow">
            
              <div class="mt-2">
                <img class="w-56 rounded-full shadow" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" srcset="" />
              </div>
              
              <div>
                
                <div class="flex items-center justify-between py-1 pr-2">
                  
                  <div>
                    <a href="#" class="text-dark-blue hover:underline">Alex Friedner</a>
                    
                  </div>
                  
                  <div>
                    <div class="flex items-center gap-1">
                      <svg class="inline-block h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> 4
                    </div>
                  </div>
                </div>
               
                <div class="p-1">
                  <p class="text-gray-900 border-l-2 px-1 border-green-cyan bg-gray-100 rounded">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quo, luptas illo nisi sit non! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus qui at eum praesentium quod perspiciatis vitae nihil velit quaerat repellendus?</p>
                </div>
              </div>
            </div>
                </div>
            </div>
          
        </div>
     );
}
 
export default Comment;
