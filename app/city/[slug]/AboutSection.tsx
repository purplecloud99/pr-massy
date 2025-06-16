'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function AboutSection() {
  useEffect(() => {

    const splide1 = new Splide('.splide.sections', {
      type: 'loop',
      perPage: 3,
      focus: 0,
      gap: "1rem",
      autoScroll: {
        speed: 0.5,
      },
      arrows: true,
      pagination: true,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        768: {
          perPage: 1,
          focus: 1,
        }
      }
    });

    splide1.mount({ AutoScroll });

    const images = document.querySelectorAll(".observe");
    const texts = document.querySelectorAll(".text-box");
    let currentIndex = 0;

    function onScroll() {

      const threshold = 60; // pixel offset from viewport top; you can increase if you want a margin

      let activeIndex = 0;
      let maxTop = -Infinity; // to find image with top <= threshold but closest to threshold

      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const top = rect.top;

        if (top <= threshold && top > maxTop) {
          maxTop = top;
          activeIndex = parseInt(img.getAttribute("data-index") || "0", 10);
        }
      });

      // If none have top <= threshold, fallback to first image
      if (activeIndex === null && images.length > 0) {
        activeIndex = parseInt(images[0].getAttribute("data-index") || "0", 10);
      }

      if (activeIndex !== currentIndex) {
        currentIndex = activeIndex;
        texts.forEach((text) => text.classList.add("hidden"));
        const activeText = document.querySelector(`.text-box[data-index="${currentIndex}"]`);
        if (activeText) activeText.classList.remove("hidden");
      }
    }

    // Initialize
    /* onScroll(); */

    // Listen on scroll, throttled for performance
    /* window.addEventListener("scroll", onScroll); */
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      splide1.destroy();
    };
  }, []);
  return (
    <section>

      <div className="md:hidden">
        <div className="overlay py-5">
          <div className="container flex flex-col gap-2 text-center md:text-start">
            <div className="splide sections" role="group">
              <div className="splide__track py-5">
                <ul className="splide__list align-items-center text-center">
                  {[...Array(5)].map((_, i) => (
                    <li className="splide__slide" key={i}>
                      <div className="d-flex flex-column bg-white shadow rounded-4 p-4 h-100">
                        <div className="mb-4">
                          <img
                            loading="lazy"
                            src="/images/hero-bg.png"
                            alt=""
                            className="w-full rounded-xl"
                          />
                        </div>
                        <div>
                          <strong className="text-2xl text-[var(--primary)]">
                            At Amazing Party Rental,
                          </strong>{" "}
                          <br />
                          we’ve proudly delivered bounce houses and inflatables to
                          families all over La Mirada for years. From birthdays in
                          residential neighborhoods to school fundraisers and church
                          gatherings, our team is trusted by local parents, teachers,
                          and event coordinators alike.
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="hidden md:block bg-[var(--light)]">
          <div className="py-10">
            {/* Removed overlay here */}
            <div className="container mx-auto relative">
              {/* Removed overlay class here too */}
              <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
                <div className="flex-1 flex flex-col gap-10">
                  <div data-index={1} className="observe" data-aos="flip-left">
                    <img
                      loading="lazy"
                      src="/images/hero-bg.png"
                      alt=""
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div
                    data-index={2}
                    className="observe"
                    data-aos="flip-right"
                    data-aos-offset={500}
                  >
                    <img
                      loading="lazy"
                      src="/images/map-image2.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div
                    data-index={3}
                    className="observe "
                    data-aos="flip-left"
                    data-aos-offset={500}
                  >
                    <img
                      loading="lazy"
                      src="/images/sign-up-bg.png"
                      alt=""
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div
                    data-index={4}
                    className="observe "
                    data-aos="flip-right"
                    data-aos-offset={500}
                  >
                    <img
                      loading="lazy"
                      src="/images/bg-screen3.png"
                      alt=""
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div
                    data-index={5}
                    className="observe "
                    data-aos="flip-left"
                    data-aos-offset={500}
                  >
                    <img
                      loading="lazy"
                      src="/images/faq-image.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div
                    data-index={6}
                    className="py-10 observe "
                    data-aos="flip-right"
                    data-aos-offset={500}
                  >
                    <img
                      loading="lazy"
                      src="/images/bounce-house.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex-1 text-lg py-20 self-start sticky top-0">
                  <div data-index={1} className="text-box fade-in">
                    <strong className="text-2xl text-[var(--primary)]">
                      At Amazing Party Rental,
                    </strong>{" "}
                    <br />
                    we’ve proudly delivered bounce houses and inflatables to families
                    all over La Mirada for years. From birthdays in residential
                    neighborhoods to school fundraisers and church gatherings, our
                    team is trusted by local parents, teachers, and event coordinators
                    alike.
                  </div>
                  <div data-index={2} className="text-box hidden fade-in">
                    <strong className="text-2xl text-[var(--info2)]">
                      Some of our most popular delivery
                    </strong>{" "}
                    <br />
                    spots include Creek Park, Windermere Park, and La Mirada Regional
                    Park — all of which permit inflatables with a reservation and city
                    approval. Whether it’s a sunny weekend party at a public park or a
                    private event in your backyard, we bring the fun right to your
                    location with safe, clean, and exciting units.
                  </div>
                  <div data-index={3} className="hidden text-box fade-in">
                    <strong className="text-2xl text-[var(--greener)]">
                      We also frequently service events
                    </strong>{" "}
                    <br />
                    hosted by La Mirada High School, Biola University, and other
                    nearby schools and churches. We understand the logistics of
                    delivering and anchoring units at public venues and always
                    coordinate with your schedule to ensure setup is seamless and on
                    time.
                  </div>
                  <div data-index={4} className="hidden text-box fade-in">
                    <strong className="text-2xl text-[var(--greener)]">
                      Delivery is available
                    </strong>{" "}
                    <br />
                    across all La Mirada ZIP codes, including 90638, 90639, and
                    surrounding areas. Once you book, our team will confirm setup
                    details, access requirements, and power sources to ensure
                    everything is ready well before your guests arrive.
                  </div>
                  <div data-index={5} className="hidden text-box fade-in">
                    <strong className="text-2xl text-[var(--info2)]">
                      “The bounce house was a hit at my son’s party at Creek Park! It
                      was spotless, on time, and the crew was so professional.”
                    </strong>
                    <div>— Rachel M., La Mirada</div>
                  </div>
                  <div data-index={6} className="hidden text-box fade-in">
                    Whether you&apos;re planning a backyard birthday bash, school carnival,
                    or neighborhood block party, Amazing Party Rental is your go-to
                    provider for inflatable{" "}
                    <strong className="text-2xl text-[var(--primary)]">
                      fun in La Mirada
                    </strong>
                    !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden md:block bg-[var(--light)]">
        <div className="py-10">
          {/* Removed overlay here */}
          <div className="container mx-auto relative">
            {/* Removed overlay class here too */}
            <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
              <div className="flex-1 flex flex-col gap-10">
                <div data-index={1} className="observe" data-aos="flip-left">
                  <img
                    loading="lazy"
                    src="/images/hero-bg.png"
                    alt=""
                    className="w-full rounded-xl"
                  />
                </div>
                <div
                  data-index={2}
                  className="observe"
                  data-aos="flip-right"
                  data-aos-offset={500}
                >
                  <img
                    loading="lazy"
                    src="/images/map-image2.png"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div
                  data-index={3}
                  className="observe "
                  data-aos="flip-left"
                  data-aos-offset={500}
                >
                  <img
                    loading="lazy"
                    src="/images/sign-up-bg.png"
                    alt=""
                    className="w-full rounded-xl"
                  />
                </div>
                <div
                  data-index={4}
                  className="observe "
                  data-aos="flip-right"
                  data-aos-offset={500}
                >
                  <img
                    loading="lazy"
                    src="/images/bg-screen3.png"
                    alt=""
                    className="w-full rounded-xl"
                  />
                </div>
                <div
                  data-index={5}
                  className="observe "
                  data-aos="flip-left"
                  data-aos-offset={500}
                >
                  <img
                    loading="lazy"
                    src="/images/faq-image.png"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div
                  data-index={6}
                  className="py-10 observe "
                  data-aos="flip-right"
                  data-aos-offset={500}
                >
                  <img
                    loading="lazy"
                    src="/images/bounce-house.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex-1 text-lg py-20 self-start sticky top-0">
                <div data-index={1} className="text-box fade-in">
                  <strong className="text-2xl text-[var(--primary)]">
                    At Amazing Party Rental,
                  </strong>{" "}
                  <br />
                  we’ve proudly delivered bounce houses and inflatables to families
                  all over La Mirada for years. From birthdays in residential
                  neighborhoods to school fundraisers and church gatherings, our team
                  is trusted by local parents, teachers, and event coordinators alike.
                </div>
                <div data-index={2} className="text-box hidden fade-in">
                  <strong className="text-2xl text-[var(--info2)]">
                    Some of our most popular delivery
                  </strong>{" "}
                  <br />
                  spots include Creek Park, Windermere Park, and La Mirada Regional
                  Park — all of which permit inflatables with a reservation and city
                  approval. Whether it’s a sunny weekend party at a public park or a
                  private event in your backyard, we bring the fun right to your
                  location with safe, clean, and exciting units.
                </div>
                <div data-index={3} className="hidden text-box fade-in">
                  <strong className="text-2xl text-[var(--greener)]">
                    We also frequently service events
                  </strong>{" "}
                  <br />
                  hosted by La Mirada High School, Biola University, and other nearby
                  schools and churches. We understand the logistics of delivering and
                  anchoring units at public venues and always coordinate with your
                  schedule to ensure setup is seamless and on time.
                </div>
                <div data-index={4} className="hidden text-box fade-in">
                  <strong className="text-2xl text-[var(--greener)]">
                    Delivery is available
                  </strong>{" "}
                  <br />
                  across all La Mirada ZIP codes, including 90638, 90639, and
                  surrounding areas. Once you book, our team will confirm setup
                  details, access requirements, and power sources to ensure everything
                  is ready well before your guests arrive.
                </div>
                <div data-index={5} className="hidden text-box fade-in">
                  <strong className="text-2xl text-[var(--info2)]">
                    “The bounce house was a hit at my son’s party at Creek Park! It
                    was spotless, on time, and the crew was so professional.”
                  </strong>
                  <div>— Rachel M., La Mirada</div>
                </div>
                <div data-index={6} className="hidden text-box fade-in">
                  Whether you&apos;re planning a backyard birthday bash, school carnival,
                  or neighborhood block party, Amazing Party Rental is your go-to
                  provider for inflatable{" "}
                  <strong className="text-2xl text-[var(--primary)]">fun in La Mirada</strong>!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}