'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function PlayStripe() {
  useEffect(() => {
    const splide1 = new Splide('.splide.play', {
      type: 'loop',
      drag: 'free',
      gap: 30,
      focus: 'center',
      autoWidth: true,
      autoScroll: {
        speed: 1,
      },
      arrows: false,
      pagination: false,
    });

    splide1.mount({ AutoScroll });

    return () => {
      splide1.destroy();
    };
  }, []);
  return (
    <section className="bg-[var(--info)] text-white">
      <div className="overlay py-5">
        <div className="splide play pointer-none" role="group">
          <div className="splide__track">
            <ul className="splide__list align-items-center text-center">
              {[...Array(3)].map((_, i) => (
                <li className="splide__slide" key={i}>
                  <h1 className="text-3xl flex gap-4 items-center">
                    FUN
                    <img
                      loading="lazy"
                      src="/images/circle.png"
                      alt="Circle"
                      width={30}
                    />
                    PLAY
                    <img
                      loading="lazy"
                      src="/images/circle.png"
                      alt="Circle"
                      width={30}
                    />
                    JUMP
                    <img
                      loading="lazy"
                      src="/images/circle.png"
                      alt="Circle"
                      width={30}
                    />
                  </h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}