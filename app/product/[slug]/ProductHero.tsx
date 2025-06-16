'use client';

import { toggle, activeGroup, showTab, showQuickTab } from "@/app/utils/globals";
import { useEffect } from "react";

export interface Product {
  name: string;
  slug: string;
  /* description: string;
  images: string[];
  price: number;
  features: string[];
  details: string;
  policy: string;
  category: string;
  subcategory: string; */
}

export default function ProductHero({ product }: { product: Product }) {

  useEffect(() => {
    activeGroup(".info-tab");
  }, []);

  return (
    <section className="mb-5">
      <div className="overlay py-5">
        <div className="container flex flex-col gap-2 text-center md:text-start">
          <h1 className="text-3xl font-bold text-[var(--info2)]">
            {product.name}
          </h1>
          <div className="flex flex-col lg:flex-row justify-between gap-4 py-5">
            <div className="flex-none lg:w-[65%] flex flex-col md:flex-row gap-3 text-center">
              <div className="hidden md:flex flex-col gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <div className="flex justify-center">
                      <img
                        loading="lazy"
                        src="/images/icon-size.png"
                        alt="size icon"
                        width={40}
                        className="mb-2"
                      />
                    </div>
                    <h4 className="text-[var(--info2)]">SIZE</h4>
                    <div className="text-sm">22&apos;L x 13&apos;W x 12&apos;H</div>
                    <div />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="">
                  <img
                    loading="lazy"
                    src="/images/product-image-1.png"
                    alt="product image"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {[...Array(5)].map((_, i) => (
                    <div className="clickable" key={i}>
                      <img
                        loading="lazy"
                        src="/images/product-image-1.png"
                        alt="product image"
                        width={70}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-auto">
              <h3 className="mb-3 text-[var(--info2)]">PRICING &amp; AVAILABILITY</h3>
              <div>
                Please select an event location, date and time to obtain a real-time
                quote.
              </div>
              <form
                action="/contact"
                method="POST"
                className="space-y-1 theme-form form-design p-2 my-3"
              >
                <div className="flex-1">
                  <label htmlFor="rental-start-date" className="block">
                    Select Rental Start Date
                  </label>
                  <input
                    type="date"
                    name="rental-date"
                    id="rental-start-date"
                    className="cursor-pointer"
                    required={true}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="rental-end-date" className="block">
                    Time SELECTION
                  </label>
                  <div className="input">
                    <select
                      className="reset-input w-full cursor-pointer"
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
                  <button
                    type="button"
                    className="btn-light w-full mt-3 block md:hidden"
                    onClick={() => toggle('#product-specifications')}
                  >
                    Product Specifications
                  </button>
                </div>
              </form>
              <div
                id="product-specifications"
                className="hidden flex flex-wrap justify-between gap-5 expand-animation pb-5"
              >
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <div className="flex justify-center">
                      <img
                        loading="lazy"
                        src="/images/icon-size.png"
                        alt="size icon"
                        width={40}
                      />
                    </div>
                    <h4 className="text-[var(--info2)]">SIZE</h4>
                    <div className="text-sm">22&apos;L x 13&apos;W x 12&apos;H</div>
                    <div />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {[...Array(4)].map((_, i) => (
                  <div className="col" key={i}>
                    <div className="p-1">
                      <div className="flex justify-center mb-3">
                        <div
                          className="bg-[var(--info3)] rounded-xl p-3 sonar-animation"
                          onClick={() => showQuickTab(i, 'info')}
                        >
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
              <div className="bg-[var(--info3)] p-3 rounded-2xl">
                <div className="info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt, beatae cumque! Nesciunt molestias impedit labore id
                  corrupti cumque nisi facere quia tempore. Numquam inventore
                  soluta, laboriosam minima eius id qui.
                </div>
                <div className="info hidden">
                  corrupti cumque nisi facere quia tempore. Numquam inventore
                  soluta, laboriosam minima eius id qui.
                </div>
                <div className="info hidden">
                  elit. Deserunt, beatae cumque! Nesciunt molestias impedit labore
                  id corrupti cumque nisi facere quia tempore. Numquam inventore
                  soluta, laboriosam minima eius id qui.
                </div>
                <div className="info hidden">
                  Eum cumque autem, eos id expedita unde cupiditate delectus! Quia
                  corporis facere nisi quidem?
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-3 md:w-[250px]">
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
              <div id="product-info" className="flex-auto flex flex-col gap-3 tab">
                <h2 className="text-[var(--info2)]">PRODUCT INFO</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur provident cupiditate repudiandae fuga eum tenetur esse
                  atque culpa mollitia accusamus, illum molestiae ipsam praesentium{" "}
                  <span className="bg-[var(--secondary)]">
                    incidunt consequuntur? Soluta quis reiciendis dignissimos
                  </span>
                  .
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur provident cupiditate repudiandae fuga eum tenetur esse
                  atque culpa mollitia accusamus, illum molestiae ipsam praesentium
                  incidunt consequuntur? Soluta quis reiciendis dignissimos.
                </div>
              </div>
              <div
                id="fine-print"
                className="flex-auto flex flex-col gap-3 tab hidden"
              >
                <h2 className="text-[var(--info2)]">FINE PRINT</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur provident cupiditate repudiandae fuga eum tenetur esse
                  atque culpa mollitia accusamus, illum molestiae ipsam praesentium
                  incidunt consequuntur? Soluta quis reiciendis dignissimos.
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
        </div>
      </div>
    </section>
  )

}