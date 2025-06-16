'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function RelatedProducts() {
  useEffect(() => {
    const splide1 = new Splide('.splide.products2', {
      ype: 'loop',
      drag: 'free',
      gap: 30,
      focus: 'center',
      autoWidth: true,
      autoScroll: {
        speed: 0.5,
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
    <section className="py-5">
      <div className="overlay py-5">
        <div className="container flex flex-col gap-2 text-center gap-4">
          <h3 className="mb-3 text-[var(--primary)]">Related Products</h3>
        </div>
        <div className="splide products2" role="group">
          <div className="splide__track px-4 py-5">
            <ul className="splide__list align-items-center text-center">
              {[...Array(5)].map((_, i) => (
                <li className="splide__slide" key={i}>
                  <div className="bg-white p-3 rounded-3">
                    <div className="mb-3 flex justify-center">
                      <img
                        loading="lazy"
                        src="/images/related-product.png"
                        alt="related product icon"
                        width={200}
                      />
                    </div>
                    <div className="font-bold text-[var(--primary)]">
                      Pink Galaxy Dual Lane Fun Combo
                    </div>
                    <div className="text-sm">
                      Bouncing area, pop-ups, basketball hoop, dual lane slide
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3" />
        </div>
      </div>
    </section>
  )
}