'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';

export default function BounceHouses() {
  useEffect(() => {
    const splide1 = new Splide('.splide.articles', {
      type: 'loop',
      perPage: 3,
      focus: 0,
      gap: "2rem",
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        768: {
          perPage: 1,
          focus: 1,
        }
      }
    });

    splide1.mount();

    return () => {
      splide1.destroy();
    };
  }, []);
  return (
    <section className="bg-white">
      <div className="overlay py-10">
        <div className="container flex flex-col gap-2 text-center">
          <h3 className="text-[var(--primary)]">BOUNCE HOUSES</h3>
          <h1 className="font-bold text-4xl">Bounce Houses For Unlimited Fun!</h1>
          <div className="py-1" />
          <div className="splide articles" role="group">
            <div className="splide__track px-4 py-5 pb-10">
              <ul className="splide__list align-items-center text-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li className="splide__slide" key={i}>
                    <div className="bg-[var(--yellow)] rounded-2xl overflow-hidden">
                      <div className="p-5">
                        <h1 className="mb-4">Bounce Houses</h1>
                        <div>
                          Jump into fun with our classic bounce houses! Perfect for
                          kids&apos; parties and family gatherings, these inflatable play
                          spaces provide endless entertainment with their vibrant
                          colors and safe. bouncy surfaces.
                        </div>
                      </div>
                      <div className="">
                        <img
                          loading="lazy"
                          className="w-full"
                          src="/images/article-image.png"
                          alt="Article Image"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}