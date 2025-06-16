'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function Products() {
  useEffect(() => {
    const splide1 = new Splide('.splide.products', {
      type: 'loop',
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
    <div className="splide products" role="group">
      <div className="splide__track px-4 py-5">
        <ul className="splide__list align-items-center text-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <li className="splide__slide" key={i}>
              <div className="bg-white p-3 rounded-xl">
                <div className="mb-5 p-4">
                  <img
                    loading="lazy"
                    src="/images/product-image.png"
                    alt="Product"
                    width={200}
                  />
                </div>
                <div>
                  <h3 className="text-[var(--primary)] mb-3">Warrior 4&amp;1 Combo</h3>
                  <strong>Starting at $219.00 for 7 hours</strong>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-3" />
    </div>

  )
}