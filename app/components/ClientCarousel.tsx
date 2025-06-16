'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const ClientCarousel = () => {
  useEffect(() => {
    const splide1 = new Splide('.splide.clients', {
      type: 'loop',
      focus: 'center',
      gap: 30,
      autoScroll: {
        speed: 0.5,
      },
      arrows: false,
      pagination: false,
      autoWidth: true
    });

    const splide2 = new Splide('.splide.clients2', {
      type: 'loop',
      focus: 'center',
      direction: 'rtl',
      gap: 20,
      autoScroll: {
        speed: 0.5,
      },
      arrows: false,
      pagination: false,
      autoWidth: true,
    });

    splide1.mount({ AutoScroll });
    splide2.mount({ AutoScroll });

    return () => {
      splide1.destroy();
      splide2.destroy();
    };
  }, []);

  return (
    <section className="bg-[var(--light)]">
      <div className="overlay py-10">
        <div className="container flex flex-col gap-2 text-center mb-5">
          <h3 className="text-[var(--primary)]">PARTNERS</h3>
          <h1 className="font-bold text-4xl mb-5">We&apos;re Proud to Partner with the Best</h1>
          <div className='py-1'></div>
        </div>
        <div className="splide clients w-full mb-5 pointer-none" role="group">
          <div className="splide__track">
            <ul className="splide__list text-center w-full">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="splide__slide bg-white rounded-xl p-5">
                  <img loading="lazy" src="/images/client-logo.png" alt="client logo" width="200" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="splide clients2 w-full pointer-none" role="group">
          <div className="splide__track">
            <ul className="splide__list text-center w-full">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="splide__slide bg-white rounded-xl p-5">
                  <img loading="lazy" src="/images/client-logo.png" alt="client logo" width="200" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-3"></div>
        <div>
          <img loading="lazy" src="/images/clients-section-image.png" alt="Image decoration" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
