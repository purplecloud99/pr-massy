'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function ClientCarousel2() {
  useEffect(() => {
    const splide1 = new Splide('.splide.reivews', {
      type: 'loop',
      focus: 'center',
      gap: 30,
      autoScroll: {
        speed: 0.5,
      },
      arrows: true,
      pagination: false,
      autoWidth: true
    });

    splide1.mount({ AutoScroll });

    return () => {
      splide1.destroy();
    };
  }, []);

  return (
    <section className="bg-secondary bg-jigshaw">
      <div className="overlay py-10">
        <div className="container flex flex-col gap-2">
          <h3 className="">HAPPY CLIENTS</h3>
          <h1 className="font-bold text-4xl mb-3">
            What Our Happy <br />
            Customers Are Saying
          </h1>
          <div className="md:w-[50%]">
            Discover what our satisfied customers have to say about their
            unforgettable experiences with our inflatables and party equipment.
          </div>
        </div>
        <div className="py-5" />
        <div className="splide reivews w-full mb-5" role="group">
          <div className="splide__track">
            <ul className="splide__list text-start w-full">
              {[...Array(4)].map((_, i) => (
                <li key={i} className="splide__slide rounded-xl p-5 px-10 w-[400px] space-y-4 relative">
                  <img
                    loading="lazy"
                    className="chat-bubble"
                    src="/images/chat-bubble.png"
                    alt="chat bubble icon"
                  />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        loading="lazy"
                        src="/images/star.png"
                        alt="Star icon"
                        width={25}
                        key={i}
                      />
                    ))}
                  </div>
                  <div>
                    &quot;Our summer party was transformed into an amazing event thanks to
                    the fantastic water slide we rented. The entire process, from
                    booking to setup, was seamless.&quot;
                  </div>
                  <div className="flex gap-3">
                    <div className="">
                      <img
                        loading="lazy"
                        className="avatar"
                        src="/images/avatar.png"
                        alt="star icon"
                      />
                    </div>
                    <div>
                      <h1>MARK</h1>
                      <div>5/1/2025</div>
                    </div>
                  </div>
                  <div className="py-5" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};