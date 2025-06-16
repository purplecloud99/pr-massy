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
      <section className="bg-[var(--primary)] text-white">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="">OUR MISSION</h3>
            <h1 className="font-bold text-4xl">We Deliver Fun & Safety</h1>
            <p className="mx-auto max-w-2xl">
              To provide clean, reliable, and entertaining party rental experiences—
              delivering smiles, safety, and seamless service to your doorstep, every time.
            </p>
          </div>
        </div>
      </section>