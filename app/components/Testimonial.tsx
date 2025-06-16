'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function Testimonial() {
  useEffect(() => {
    const splide1 = new Splide('.splide.reivews', {
      type: 'loop',
      focus: 'center',
      gap: 30,
      autoScroll: {
        speed: 0.5,
      },
      arrows: false,
      pagination: false,
      autoWidth: true
    })

    const splide2 = new Splide('.splide.reivews2', {
      type: 'loop',
      focus: 'center',
      direction: 'rtl',
      gap: 20,
      autoScroll: {
        speed: 0.5,
      },
      arrows: false,
      pagination: false,
      autoWidth: true
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
        <div className="container flex flex-col gap-2 text-center">
          <h3 className="text-[var(--primary)]">CLIENT REVIEWS</h3>
          <h1 className="font-bold text-4xl mb-3">Unforgettable Moments</h1>
          <div className="md:w-[50%] mx-auto">
            Discover what our satisfied customers have to say about their unforgettable experiences with
            our inflatables and party equipment.
          </div>
        </div>
        <div className="py-5"></div>
        <div className="splide reivews w-full mb-5" role="group">
          <div className="splide__track">
            <ul className="splide__list text-start w-full">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="splide__slide rounded-xl p-5 px-10 w-[400px] space-y-4 relative">
                  <img loading="lazy" className="chat-bubble" src="/images/chat-bubble.png" alt="Star" />
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img key={i} loading="lazy" src="/images/star.png" alt="Star" width="25" />
                    ))}
                  </div>
                  <div>
                    &quot;Our summer party was transformed into an
                    amazing event thanks to the fantastic water
                    slide we rented. The entire process, from
                    booking to setup, was seamless.&quot;
                  </div>
                  <div className="flex gap-3">
                    <div className="">
                      <img loading="lazy" className="avatar" src="/images/avatar.png" alt="avatar icon" />
                    </div>
                    <div>
                      <h1>MARK</h1>
                      <div>5/1/2025</div>
                    </div>
                  </div>
                  <div className="py-5"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="splide reivews2 w-full mb-5" role="group">
          <div className="splide__track">
            <ul className="splide__list text-end w-full">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="splide__slide rounded-xl p-5 px-10 w-[400px] space-y-4 relative" style={{ direction: "ltr" }}>
                  <img loading="lazy" className="chat-bubble" src="/images/chat-bubble.png" alt="Star" />
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img key={i} loading="lazy" src="/images/star.png" alt="Star" width="25" />
                    ))}
                  </div>
                  <div>
                    &quot;Our summer party was transformed into an
                    amazing event thanks to the fantastic water
                    slide we rented. The entire process, from
                    booking to setup, was seamless.&quot;
                  </div>
                  <div className="flex gap-3">
                    <div className="">
                      <img loading="lazy" className="avatar" src="/images/avatar.png" alt="avatar icon" />
                    </div>
                    <div>
                      <h1>MARK</h1>
                      <div>5/1/2025</div>
                    </div>
                  </div>
                  <div className="py-5"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
