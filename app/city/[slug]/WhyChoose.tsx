'use client';
import { changeCityTab } from "@/app/utils/city";
export default function WhyChoose() {
  return (
    <section className="bg-pat2">
      <div className="overlay py-10">
        <div className="container flex flex-col gap-2 text-center md:text-start">
          <h1 className="my-5 text-[var(--info)] text-4xl font-bold">
            Why Choose <br />
            Anjoma Zone Party Rental?
          </h1>
          <div className="flex flex-col md:flex-row gap-5 items-start text-lg md:text-2xl">
            <div className="bg-[var(--yellow)] rounded-full flex flex-row md:flex-col p-1 gap-5 mx-auto">
              {[...Array(3)].map((_, i) => (
                <div
                  className={`p-1 rounded-full circle-tab ${i == 0 ? 'active' : ''} clickable flex items-center justify-center`}
                  style={{ width: 60, height: 60 }}
                  onClick={() => changeCityTab(i)}
                  key={i}
                >
                  <img
                    loading="lazy"
                    src={`/images/tab-icon${i+1}.png`}
                    alt="tab icon"
                    width={30}
                  />
                </div>
              ))}
            </div>
            <div className="city-tab bg-[var(--info4)] text-white p-8 rounded-2xl fade-in">
              <div className="mb-5">
                At Anjoma Zone, we’re dedicated to offering the best jumper rental
                experience in La Mirada — blending fun, safety, and unbeatable
                customer care.Our inflatables add excitement to all kinds of
                gatherings, from backyard birthdays to school functions and
                everything in between.
              </div>
              <div>
                <img
                  loading="lazy"
                  src="/images/bounce-house.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="city-tab bg-[var(--info4)] text-white p-8 rounded-2xl hidden fade-in">
              <div className=" mb-5">
                We proudly provide a wide selection of water slides, bounce house
                combos, inflatable games, obstacle courses, and more — all
                meticulously cleaned and delivered on time. Whether you’re planning
                a small get-together or a large community event, we have the right
                rental to match your needs.
              </div>
              <div>
                <img
                  loading="lazy"
                  src="/images/product-image2.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="city-tab bg-[var(--info4)] text-white p-8 rounded-2xl hidden fade-in">
              <div className="mb-5">
                Our team is committed to delivering the highest level of service and
                satisfaction. Ready to reserve your rental? Call us today at (951)
                498-0377 and let’s bring the party to life!
              </div>
              <div>
                <img
                  loading="lazy"
                  src="/images/bounce-house.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}