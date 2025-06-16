'use client';

import Splide from '@splidejs/splide';
import { useEffect } from 'react';
import { activeGroup } from '../utils/globals';
import {
  initDrawer,
  openDrawer,
  closeIfClickOutside,
  enLargeImage,
  showTab
} from '../lib/drawer';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  "/images/products/product1/image1.png",
  "/images/products/product1/image2.png",
  "/images/products/product1/image3.png",
  "/images/products/product1/image4.png"
]

let product_thumbs_slide: Splide | null = null;

export default function Drawer() {
  useEffect(() => {

    initDrawer();

    product_thumbs_slide = new Splide('.splide.product-thumbs', {
      type: 'loop',
      perPage: 1,
      focus: 0,
      gap: "1rem",
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      arrows: true,
      pagination: false
    });

    product_thumbs_slide.mount();
    activeGroup('.info-tab');

    return () => {
      if (product_thumbs_slide) {
        product_thumbs_slide.destroy();
      }
    };

  })
  return (
    <div
      id="drawer"
      className="hidden fixed drawer-top-pad w-full h-full flex flex-col gap-4 top-0 bg-[var(--dark)]-opacity p-4"
      style={{ zIndex: 110 }}
      onClick={(e) => closeIfClickOutside(e.currentTarget as HTMLElement)}
    >
      <div className="drawer-body w-full h-full rounded-xl md:w-1/2 md:ms-auto offcanvas-right bg-white text-[var(--dark)] p-4 flex flex-col gap-3 overflow-hidden relative">
        <div className="text-end">
          <button className="thumb-btn bg-[var(--red)]" onClick={() => openDrawer(false)}>
            <img
              loading="lazy"
              src="/images/icons-cross.png"
              alt="cross icon"
              width={20}
            />
          </button>
        </div>
        <div
          id="project"
          className="drawer-content w-full hidden flex flex-col lg:flex-row gap-5 overflow-y-auto relative"
        >
          <div className="flex-none md:w-[300px] text-center flex flex-col gap-3">
            <div className="splide product-thumbs md:hidden" role="group">
              <div className="splide__track">
                <ul className="splide__list align-items-center text-center">
                  {images.map((image, i) => (
                    <li className="splide__slide" key={i}>
                      <img
                        loading="lazy"
                        src={image}
                        alt="product image"
                        className="product-image-hover2 mx-auto"
                        onClick={(e) => enLargeImage(e.currentTarget as HTMLElement)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              {images.map((image, i) => (
                <li className="splide__slide" key={i}>
                  <img
                    loading="lazy"
                    id={`product-thumb-drawer-${i + 1}`}
                    src={image}
                    alt="product image"
                    className="product-image-hover2 mx-auto"
                    onClick={(e) => enLargeImage(e.currentTarget as HTMLElement)}
                  />
                </li>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 bg-white py-3">
              <div className="font-bold">Quick View</div>
              <Link href="/product/rainbow-dual-lane-fun-combo">
                <h2 className="text-[var(--info2)] text-2xl">Jurassic 4 in Combo</h2>
              </Link>
              <div className="flex flex-wrap gap-2 mb-1">
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
              <div className="hidden md:block product-thumbs">
                <div className="flex flex-wrap gap-2">
                  {images.slice(0, 3).map((image, i) => (
                    <div className="" key={i}>
                      <Image
                        loading="lazy"
                        src={image}
                        alt="product image"
                        className="product-thumb thumb-scroll cursor-pointer"
                        data-target={`product-thumb-drawer-${i + 1}`}
                        width={30}
                        height={60}
                      />
                    </div>
                  ))}
                  <div className="relative">
                    <Link
                      href="/product/rainbow-dual-lane-fun-combo"
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-overlay rounded-xl"
                    >
                      <span className="text-white">4+</span>
                    </Link>
                    <Image
                      loading="lazy"
                      src={images[3]}
                      alt="product image"
                      className="product-thumb"
                      data-target="product-thumb-drawer"
                      height={60}
                      width={30}
                    />
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <div className="flex flex-wrap gap-2">
                  {images.slice(0, 3).map((image, i) => (
                    <div className="" key={i}>
                      <img
                        loading="lazy"
                        src={image}
                        alt="product image"
                        className="product-thumb cursor-pointer"
                        onClick={() => product_thumbs_slide?.go(i)}
                        height={60}
                        width={30}
                      />
                    </div>
                  ))}
                  <div className="relative">
                    <Link
                      href="/product/rainbow-dual-lane-fun-combo"
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-overlay rounded-xl"
                    >
                      4+
                    </Link>
                    <img
                      loading="lazy"
                      src={images[3]}
                      alt="product image"
                      className="product-thumb"
                      data-target="product-thumb-drawer"
                      height={60}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {[...Array(4)].map((_, i) => (
                  <div className="col" key={i}>
                    <div className="p-1">
                      <div className="flex justify-center mb-3">
                        <div className="rounded-xl p-1">
                          <img
                            loading="lazy"
                            src="/images/icon-fast-delivery.png"
                            alt="fast delivery icon"
                            width={50}
                          />
                        </div>
                      </div>
                      <h5 className="mb-3 text-[var(--info2)] text-xs">
                        Always Clean &amp; Sanitized
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-wrap gap-3">
                <button
                  className="info-tab btn-light active tilted"
                  onClick={() => showTab('product-info')}
                >
                  Product Info
                </button>
                <button
                  className="info-tab btn-light tilted"
                  onClick={() => showTab('fine-print')}
                >
                  FINE PRINT
                </button>
                <button
                  className="info-tab btn-light tilted"
                  onClick={() => showTab('faq')}
                >
                  FAQ
                </button>
              </div>
              <div className="flex-1">
                <div
                  id="product-info"
                  className="flex-auto flex flex-col gap-3 tab"
                >
                  <h2 className="text-[var(--info2)]">PRODUCT INFO</h2>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur provident cupiditate repudiandae fuga eum tenetur
                    esse atque culpa mollitia accusamus, illum molestiae ipsam
                    praesentium{" "}
                    <span className="bg-[var(--secondary)]">
                      incidunt consequuntur? Soluta quis reiciendis dignissimos
                    </span>
                    .
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur provident cupiditate repudiandae fuga eum tenetur
                    esse atque culpa mollitia accusamus, illum molestiae ipsam
                    praesentium incidunt consequuntur? Soluta quis reiciendis
                    dignissimos.
                  </div>
                </div>
                <div
                  id="fine-print"
                  className="flex-auto flex flex-col gap-3 tab hidden"
                >
                  <h2 className="text-[var(--info2)]">FINE PRINT</h2>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur provident cupiditate repudiandae fuga eum tenetur
                    esse atque culpa mollitia accusamus, illum molestiae ipsam
                    praesentium incidunt consequuntur? Soluta quis reiciendis
                    dignissimos.
                  </div>
                </div>
                <div
                  id="faq"
                  className="flex-auto flex flex-col gap-3 tab hidden text-start"
                >
                  <h2 className="text-[var(--info2)]">FAQ</h2>
                  <div className="space-y-2">
                    {[...Array(2)].map((_, i) => (
                      <div key={i}>
                        <details className="bg-[var(--info3)] p-3 rounded-2xl">
                          <summary>What is the minimum age for a rider?</summary>
                          <p>Minimum age for riders is 5 years old.</p>
                        </details>
                        <details className="bg-[var(--primary)] text-white p-3 rounded-2xl">
                          <summary>How many riders can fit in each inflatable?</summary>
                          <p>
                            The number of riders that can fit in each inflatable depends
                            on the size of the inflatable and the size of the riders.
                            Please check the product description or contact us for more
                            information.
                          </p>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <form
              action="/contact"
              method="POST"
              className="space-y-1 theme-form p-3 mb-3"
            >
              <div className="flex-1">
                <label htmlFor="rental-start-date" className="block text-lg">
                  Select Rental Start Date
                </label>
                <input
                  type="date"
                  name="rental-date"
                  id="rental-start-date"
                  className="font-bold"
                  required={true}
                />
              </div>
              <div className="flex-1 font-bold">
                <label htmlFor="rental-end-date" className="block text-lg">
                  Time SELECTION
                </label>
                <div className="input">
                  <select
                    className="reset-input w-full"
                    name="rental-time"
                    id="rental-time"
                    required={true}
                  >
                    <option defaultValue="">
                      Select an option...
                    </option>
                    <option value="9:00 AM - 4:00 PM">9:00 AM - 4:00 PM</option>
                    <option value="9:30 AM - 4:30 PM">9:30 AM - 4:30 PM</option>
                    <option value="10:00 AM 5:00 PM">10:00 AM 5:00 PM</option>
                    <option value="10:30 AM - 5:30 PM">10:30 AM - 5:30 PM</option>
                    <option value="11:00 AM - 6:00 PM">11:00 AM - 6:00 PM</option>
                    <option value="11:30 AM - 6:30 PM">11:30 AM - 6:30 PM</option>
                    <option value="12:00 PM - 7:00 PM">12:00 PM - 7:00 PM</option>
                    <option value="12:30 PM - 7:30 PM">12:30 PM - 7:30 PM</option>
                    <option value="1:00 PM - 8:00 PM">1:00 PM - 8:00 PM</option>
                    <option value="9:00 AM - 4:00 PM">9:00 AM - 4:00 PM</option>
                    <option value="End After 9:00 PM — Next Day Pickup">
                      End After 9:00 PM — Next Day Pickup
                    </option>
                    <option value="Earliar then 9">
                      Deliver Earlier then 9:00 PM
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <button type="submit" className="btn w-full tilted">
                  ADD TO CART
                </button>
              </div>
            </form>
            <div className="flex gap-3 mb-3">
              <Link
                href="#"
                className="thumb-btn bg-[var(--dark-yellow)] text-white justify-center p-3 w-full"
              >
                <img
                  loading="lazy"
                  src="/images/icon-call.png"
                  alt="call icon"
                  width={25}
                />
                Call Now
              </Link>
              <Link
                href="#"
                className="thumb-btn bg-[var(--dark-yellow)] text-white bg-bubble justify-center p-3 w-full"
              >
                <img
                  loading="lazy"
                  src="/images/icon-chat.png"
                  alt="live chat icon"
                  width={25}
                />
                Live Chat
              </Link>
            </div>
            <Link
              href="/product/rainbow-dual-lane-fun-combo"
              className="thumb-btn bg-[var(--info2)] p-3 justify-center"
              style={{ padding: "10px 0" }}
            >
              <img
                loading="lazy"
                src="/images/icon-pp.png"
                alt="icon plane"
                width={15}
              />
              <span className='text-white'>View Full Details</span>
            </Link>
            <div className="py-5" />
          </div>
        </div>
      </div>
    </div>
  )
}