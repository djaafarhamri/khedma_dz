import { useState, useRef, useEffect } from 'react';

// Data

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const data = [
    {
      id: 1,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: 2,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/2/200/300',
    },
    {
      id: 3,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/3/200/300',
    },
    
    {
      id: 4,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/4/200/300',
    },
    {
      id: 5,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/5/200/300',
    },
    {
      id: 6,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/6/200/300',
    },
    {
      id: 7,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/7/200/300',
    },
    {
      id: 8,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/8/200/300',
    },
    {
      id: 9,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/9/200/300',
    },
    {
      id: 10,
      title: 'Профиль',
      description: 'Описание профиля',
      image: 'https://picsum.photos/id/10/200/300',
    },
  ];


  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Services
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        > 
          {/*{data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-80 h-64 snap-center"
              >
                <p
                  className="h-56 w-80 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.image || ''})` }}
                >
                  <img
                    src={resource.image || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </p>
                <p
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </p>
            </div>
            );
          })}*/}
          <div
                
                className="carousel-item text-center relative w-80 h-2/5 snap-center"
              >
                <div
                  className="h-56 w-80 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${ 'https://flowbite.com/docs/images/blog/image-1.jpg'})` }}
                >
                  <img
                    src='https://flowbite.com/docs/images/blog/image-1.jpg'
                    alt=''
                    className="w-full aspect-square hidden"
                  />
                </div>
                <div
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-40 bg-gray-100 z-0"
                >
                </div>
                <div className='flex flex-col space-y-3 mt-1 bg-white'>
                  <div>
                 <p className='text-center font-inter text-dark-blue text-2xl '>
                    website
                 </p>

                 <p className=''>
                     create website that suit you, with language and outils you like just click here too see offers
                 </p>
                 </div>
                </div>
                
            </div>

        </div>
      </div>
    </div>
  );
};

export default Carousel;