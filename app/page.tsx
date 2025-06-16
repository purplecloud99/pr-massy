import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Testimonial from "@/app/components/Testimonial";
import '@/app/styles/splide.min.css';
import '@/app/styles/splide-core.min.css';
import CategoryGallery from "@/app/components/CategoryGallery";
import DeliveryMap from "@/app/components/DeliveryMap";
import Products from "@/app/components/Products";
import BounceHouses from "@/app/components/BounceHouses";
import PlayStripe from "@/app/components/PlayStripe";
import FAQ from "@/app/components/FAQ";
import Category from "@/app/components/Category";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img loading="lazy" src="/images/hero-bg.png" alt="Hero Background" className="hero-bg" />
        <Header relative={false} />
        <div className="container px-5">
          <div className="hero-content">
      <p className="hero-subtitle">
        We deliver party fun across Orange County, Los Angeles County,
        Riverside County & San Bernardino County!
      </p>
            <h2 className="hero-title">BOUNCE <br /> INTO FUN!</h2>
          <p className="hero-description">
            Experience top-rated bounce house, water slide &amp; tent rentals with same-day delivery across Orange County, Los Angeles County, Riverside County &amp; San Bernardino County!
          </p>            <Link href="#" className="hero-btn tilted">Book Now</Link>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1920 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f9f9f9" fillOpacity="1" d="M0,0 C320,140 640,-40 960,100 C1280,240 1600,0 1920,100 L1920,200 L0,200 Z">
            </path>
          </svg>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="delivery-highlight">
            <h2>EXPLORE OUR <span className="text-[var(--primary)]">EXCITING</span> INFLATABLE CATEGORIES</h2>
            <p>
              Whether you&apos;re hosting a birthday party, school event, or backyard celebration, our inflatable rentals — including bounce houses, water slides, combo jumpers, and obstacle courses — are guaranteed to bring the fun and make your party unforgettable.
            </p>
            <p>
              We proudly deliver party rentals across <strong>Orange County</strong>, <strong>Los Angeles County</strong>, <strong>Riverside County</strong> We proudly deliver to all of <strong>Orange County</strong> and most cities across <strong>Los Angeles, San Bernardino, and Riverside County</strong>amp; <strong>San Bernardino County</strong>, bringing the party straight to your doorstep!
            </p>
          </div>
        </div>
      </section>
      <CategoryGallery />
      <DeliveryMap />
      <section className="bg-[var(--info)] bg-jigshaw text-white">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="">PARTY TYPES</h3>
            <h1 className="font-bold text-4xl mb-3">Exciting Party Events</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="col">
                  <div className="p-3">
                    <div className="mb-5 flex justify-center">
                      <img loading="lazy" src="/images/icon-cake.png" alt="cake icon" height="60" />
                    </div>
                    <h4 className="mb-3">Birthday Party</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Testimonial />
      <section className="bg-[var(--light)]">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="text-[var(--primary)]">FEATURED</h3>
            <h1 className="font-bold text-4xl">The Best Inflatable Rentals</h1>
            <div className="py-1" />
          </div>
          <Products />
        </div>
      </section>
      <section className="bg-white">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="text-[var(--primary)]">OUR PRINCIPLES</h3>
            <h1 className="font-bold text-4xl mb-4">Why Choose Us</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="col" key={i}>
                  <div className="p-3">
                    <div className="flex justify-center mb-5">
                      <div className="bg-[var(--info3)] rounded-xl p-4">
                        <img loading="lazy" src="/images/icon-fast-delivery.png" alt="icon for fast delivery" width="80" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-[var(--info2)]">
                      Always Clean & Sanitized
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BounceHouses />
      <section className="bg-[var(--primary)] text-white">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="">OUR MISSION</h3>
            <h1 className="font-bold text-4xl">We Deliver Fun</h1>
            <div className="md:w-[50%] mx-auto">
              High quality, safe and clean party games and supplies Wrth informative. fast
              and convenient help for all events and occasions.
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="text-[var(--primary)]">OUR ETHICS</h3>
            <h1 className="font-bold text-4xl mb-3">Our Commitment to You</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="col" key={i}>
                  <div className="p-3">
                    <div className="mb-5 flex justify-center">
                      <img loading="lazy" src="/images/icon-heart.png" alt="heart icon" width="60" />
                    </div>
                    <h4 className="mb-3 text-[var(--primary)]">HONESTY</h4>
                    <div className="mb-3">
                      We believe honesty is the key to any
                      retationship. therefore. we are honest
                      zmJt our and anything we do.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PlayStripe />
      <section className="bg-[var(--light)] py-10 pb-0">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl mb-1">
                Frequently Asked <br /> Questions
              </h1>
              <div className="opacity-70 md:w-[70%]">
                Got questions? We’ve got answers. From delivery windows to setup and safety—here’s what people ask most about Anjoma Zone Party Rentals.
              </div>              <div>
                <button className="btn">Contact Us</button>
              </div>
              <div>
                <img
                  loading="lazy"
                  src="/images/faq-image.png"
                  alt="faq image"
                  className="w-full"
                />
              </div>
            </div>
            <FAQ />
          </div>
        </div>
      </section>
      <Category />
      <section className="bg-[var(--secondary)] text-white py-10 pb-0">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <div className="flex-1 space-y-4 h-full">
              <h1 className="text-4xl mb-1">
                Ready to make your <br /> Event Amazing?
              </h1>
              <div className="opacity-70 md:w-[70%]">
                Got questions? We’ve got answers. From delivery windows to setup and safety—here’s what people ask most about Anjoma Zone Party Rentals.
              </div>              <div className="mt-auto">
                <img loading="lazy" src="/images/baloon-image.png" alt="baloon image" className="w-full" />
              </div>
            </div>
            <div className="flex-1 pb-10">
              <form action="/contact" method="POST" className="space-y-4 theme-form p-8 text-[var(--dark)]">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="first-name" className="block">First Name</label>
                    <input type="text" name="first-name" id="first-name" placeholder="Enter your first name" required />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="last-name" className="block">Last Name</label>
                    <input type="text" name="last-name" id="last-name" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="email" className="block">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="block">Phone</label>
                    <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="event-details" className="block">Event Details</label>
                  <textarea name="event-details" id="event-details" rows={4} placeholder="Enter the details of the event" required></textarea>
                </div>
                <div>
                  <label htmlFor="bounce-houses" className="block">Select Bounce Houses</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="small-category-card bg-[var(--light)] text-black rounded-2xl p-3">
                        <div className="mb-1 flex justify-center">
                          <img loading="lazy" src="/images/icon-category-anim.gif" alt="category anim" height="40" />
                        </div>
                        <h5 className="">Interactive Games</h5>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <button type="submit" className="btn w-full">
                    Confirm Your Fun!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
