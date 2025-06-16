'use client';

import { useEffect } from 'react';
import { toggle } from '../utils/globals';
import { initCollections, products } from '../lib/collectionGallery';
import { openDrawer } from '../lib/drawer';
import Drawer from './Drawer';
import Link from 'next/link';

export default function CollectionGallery() {
  useEffect(() => {
    initCollections();
  })
  return (
    <section className="py-5">
      <div className="overlay py-5">
        <div className="container flex flex-col gap-2">
          <div className="flex flex-col md:flex-row items-start justify-between gap-5">
            <div className="flex-none w-[300px] mx-auto">
              <div className="fixed bottom-0 left-0 md:hidden m-4" style={{ zIndex: '95' }}>
                <div className="mb-3 hidden scroll-up-visible slide-up">
                  <Link href="#" className="flex items-center justify-center theme-btn w-1">
                    <img loading="lazy" src="/images/icon-up.png" alt="icon up" width="30" />
                  </Link>
                </div>
                <button className="theme-btn py-2 px-5  mb-4 inline-flex items-center gap-3" onClick={() => toggle('#filters')}>
                  <img loading="lazy" src="/images/bounce-house-icon.png" alt="house icon" width="40" />
                  <div className="text-xl">
                    Filters
                  </div>
                </button>
              </div>
              <div id="filters" className="hidden md:block filters-drawer">
                <div className="text-end block md:hidden">
                  <button className="thumb-btn bg-[var(--red)]" onClick={() => toggle('#filters')}>
                    <img loading="lazy" src="/images/icons-cross.png" alt="icon cross" height="20" />
                  </button>
                </div>
                <h1 className="px-4 mb-3">Inflatable Type</h1>
                <div className="flex flex-col gap-2 px-4 category-options">
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '1' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Standard Jumpers
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '2' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Combo Jumpers
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '3' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Water Combos
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '4' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Water Slides
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '5' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Obstacle Courses
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '6' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Interactive Games
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '7' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Canopies
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '8' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Tables & Chairs
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '9' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Concessions
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '10' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Extras
                  </label>
                </div>
                <div className="py-3"></div>
                <h1 className="px-4 mb-3">Theme</h1>
                <div className="flex flex-col gap-2 px-4 options category-options">
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '15' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Blue
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '16' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Pink
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '17' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Tropical
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '18' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Castle
                  </label>
                </div>
                <div className="py-3"></div>
                <h1 className="px-4 mb-3">Dry or Wet</h1>
                <div className="flex flex-col gap-2 px-4 options category-options">
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '23' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Dry
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '24' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Wet
                  </label>
                </div>
                <div className="py-3"></div>
                <h1 className="px-4 mb-3">Art Panel</h1>
                <div className="flex flex-col gap-2 px-4 options category-options">
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '30' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 clickable" style={{ '--i': '31' } as React.CSSProperties}>
                    <input type="checkbox" className="form-checkbox" />
                    No
                  </label>
                </div>
                <div className="md:hidden h-[100px]"></div>
                <div className="md:hidden fixed bottom-0 left-0 right-0 text-white text-center p-3">
                  <button className="theme-btn w-full py-2 text-lg font-semibold">
                    Apply Theme
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-auto mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product, i) => (
                  <div
                    className="product-card flex flex-col gap-3"
                    data-category="standard-jumper"
                    key={i}
                  >
                    <div className="overflow-hidden rounded-xl relative">
                      <img
                        loading="lazy"
                        id={`product-thumb-${i}`}
                        src="/images/product-image2.png"
                        alt="product image"
                        className="product-image-hover"
                        data-base="/images/product-image2.png"
                        data-show="/images/products/product1/image1.png"
                      />
                      <div className="product-view absolute bottom-0 p-2 py-3 w-full text-white">
                        <Link href={`/product/${product.slug}`} className='mb-3'>
                          <h3 className="">{product.name}</h3>
                        </Link>
                        <div className="flex gap-2 mb-2">
                          <button
                            className="thumb-btn justify-center w-full bg-[var(--primary)] text-white text-xs"
                            onClick={() => openDrawer()}
                          >
                            <img
                              loading="lazy"
                              src="/images/icon-eye.png"
                              alt="quick view"
                              width={15}
                            />
                            Quick View
                          </button>
                          <button className="thumb-btn justify-center w-full bg-[var(--greener)] text-white text-xs">
                            <img
                              loading="lazy"
                              src="/images/icon-cart.png"
                              alt="add to cart"
                              width={15}
                            />
                            Add to Cart
                          </button>
                        </div>
                        <Link
                          href={`/product/${product.slug}`}
                          className="thumb-btn w-full bg-[var(--info2)] text-white justify-center mb-2"
                        >
                          More Information
                          <img
                            loading="lazy"
                            src="/images/icon-pp.png"
                            alt="icon up"
                            width={15}
                          />
                        </Link>
                        <div className="flex gap-3">
                          <img
                            loading="lazy"
                            src="/images/icon-ruler-white.png"
                            alt="ruler icon"
                            width={20}
                          />
                          24&apos;L x 15&apos;W x 14&apos;H
                        </div>
                      </div>
                    </div>
                    <div className="product-info flex flex-col gap-2">
                      <Link href={`/product/${product.slug}`}>
                        <h3 className="text-[var(--info2)]">{product.name}</h3>
                      </Link>
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          src="/images/icon-ruler.png"
                          alt="ruler icon"
                          width={20}
                        />
                        24&apos;L x 15&apos;W x 14&apos;H
                      </div>
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          src="/images/icon-sun.png"
                          alt="sun icon"
                          width={20}
                        />
                        Dry unit
                      </div>
                    </div>
                    <div className="product-thumbs">
                      <div className="grid grid-cols-4 gap-2">
                        <div className="">
                          <img
                            loading="lazy"
                            src="/images/products/product1/image1.png"
                            alt="product image"
                            className="product-thumb"
                            data-target={`product-thumb-${i}`}
                            width={70}
                          />
                        </div>
                        <div className="">
                          <img
                            loading="lazy"
                            src="/images/products/product1/image2.png"
                            alt="product image"
                            className="product-thumb"
                            data-target={`product-thumb-${i}`}
                            width={70}
                          />
                        </div>
                        <div className="">
                          <img
                            loading="lazy"
                            src="/images/products/product1/image3.png"
                            alt="product image"
                            className="product-thumb"
                            data-target={`product-thumb-${i}`}
                            width={70}
                          />
                        </div>
                        <div className="relative">
                          <Link
                            href={`/product/${product.slug}`}
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-overlay rounded-xl"
                          >
                            <span className="text-white">4+</span>
                          </Link>
                          <img
                            loading="lazy"
                            src="/images/products/product1/image4.png"
                            alt="product image"
                            className="product-thumb"
                            width={70}
                          />
                        </div>
                      </div>
                      <div className="py-1" />
                      <div className="flex gap-3 text-red font-bold items-center">
                        <img
                          loading="lazy"
                          src="/images/icon-capacity.png"
                          alt="capacity icon"
                          width={20}
                        />
                        Capacity: 5-7 Kids
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer />
    </section>
  )
}