import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import '@/app/styles/splide.min.css';
import '@/app/styles/splide-core.min.css';
import Link from "next/link";
import AboutSection from "./AboutSection";
import CategoryGallery from "@/app/components/CategoryGallery";
import DeliveryMap from "@/app/components/DeliveryMap";
import PlayStripe from "@/app/components/PlayStripe";
import FAQ from "@/app/components/FAQ";
import Testimonial from "@/app/components/Testimonial";
import CityVideo from "./CityVideo";
import InitCityPage from "./initCityPage";
import UseAOS from "@/app/components/UseAOS";
import WhyChoose from "./WhyChoose";
import StoryCarousel from "./StoryCarousel";

const cities = [
  {
    name: "La Mirada",
    slug: "la-mirada-party-rentals"
  }
]

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Product({ params }: Props) {

  const { slug } = await params;
  const city = cities.find(p => p.slug === slug);

  if (!city) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--info2)] text-white">
        <div className="flex justify-center mb-4">
          <img src="/images/bounce-house-icon.png" alt="bounce house icon" width={100} />
        </div>
        <div className="mb-3">
          <h1 className="font-bold text-4xl">City not found :(</h1>
        </div>
        <p className="text-center md:w-[440px]">
          The city you are looking for does not exist. Please check the URL and try again.
        </p>
        <Link href="/" className="mt-5 px-5 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)] hover:text-white">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">

      <UseAOS />
      <InitCityPage />

      <Header relative={true} />

      <div className="py-10"></div>

      <CityVideo />

      <section className="">
        <div className="overlay py-5">
          <div className="container flex flex-col gap-2 text-center md:text-start">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="flex-none md:w-[65%] flex flex-col gap-5">
                <div className="bg-[var(--info3)] rounded-2xl p-5">
                  <h1 className="text-[var(--info2)] mb-3 text-2xl">
                    🏡 La Mirada’s Favorite Choice for Backyard Fun
                  </h1>
                  <div className="text-lg">
                    Looking to make your next party unforgettable? Our bounce house
                    and inflatable rentals are a hit at homes, schools, and parks
                    throughout La Mirada. Whether you’re planning a birthday bash, a
                    school event, or a church gathering, our team delivers clean,
                    safe, and exciting inflatables right to your door. We proudly
                    serve neighborhoods near Biola University, Creek Park, and
                    Windermere Park — bringing joy to families across the city!
                  </div>
                </div>
                <StoryCarousel />
              </div>
              <div className="flex-1 bg-[var(--orange)] p-5 rounded-2xl">
                <h1 className="text-[var(--greener)] mb-3 text-2xl">About La Mirada</h1>
                <div className="flex flex-col gap-3 text-start">
                  {[...Array(7)].map((_, i) => (
                    <div className="flex gap-3" key={i}>
                      <div className="">
                        <img
                          loading="lazy"
                          src="/images/icon-capacity.png"
                          alt=""
                          width={50}
                        />
                      </div>
                      <div className="">
                        La Mirada incorporated on March 23, 1960, and ranked fifth
                        safest city in California by measures.
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <CategoryGallery />

      <section className="">
        <div className="overlay py-5">
          <div className="container flex flex-col gap-2 text-center md:text-start">
            <h1 className="text-center my-5 text-[var(--info)] text-4xl">
              Anjoma Zone Also Delivers Fun to...
            </h1>
            <DeliveryMap />
          </div>
        </div>
      </section>

      <WhyChoose />

      <section className="">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center md:text-start">
            <div className="container text-center">
              <h3 className="text-[var(--primary)]">FIND US</h3>
              <h1 className="font-bold text-4xl mb-3">OUR LOCATION</h1>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.646531144407!2d-117.99565568455542!3d33.90149548084469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c5a7e8d7f1bf%3A0x4c9c1e8c6a5e9b8c!2sLa%20Mirada%2C%20CA%2090628%2C%20USA!5e0!3m2!1sen!2sus!4v1644445511157!5m2!1sen!2sus"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden">
        <div className="py-10 relative">
          <div className="overlay">
            <div className="container flex flex-col gap-2 text-center md:text-start screen1 rounded-2xl">
              <div className="h-[70px]" />
              <div className="flex gap-5 items-center">
                <div data-aos="fade-right">
                  <img
                    loading="lazy"
                    src="/images/badge1.png"
                    alt=""
                    className="w-[100px] md:w-[150px]"
                  />
                </div>
                <h1
                  className="text-lg md:text-5xl font-bold text-[var(--info)]-stroke text-[var(--primary)]"
                  data-aos="fade-up"
                >
                  Order Your Party <br />
                  in a Few Clicks
                </h1>
                <div data-aos="fade-up">
                  <img
                    loading="lazy"
                    src="/images/click-icon.png"
                    alt=""
                    className="w-[50px] md:w-[100px]"
                  />
                </div>
              </div>
              <div className="h-[30px]" />
              <div
                className="text-center text-4xl text-white font-bold mb-10"
                data-aos="fade-up"
              >
                Lock in the fun — book online or <br />
                call us now to get started!
              </div>
              <div className="h-[30px]" />
              <div className="text-center" data-aos="fade-up">
                <a
                  href="/la-mirada-party-rentals"
                  className="bg-[var(--info3)] text-[var(--dark)] font-bold py-5 px-10 rounded-2xl"
                >
                  Book Now
                </a>
              </div>
              <div className="h-[300px]" />
              <div
                className="absolute right-0 bottom-0 md:w-[40%]"
                style={{ zIndex: 0 }}
                data-aos="fade-up"
              >
                <img
                  loading="lazy"
                  src="/images/desktop.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 relative bg-[var(--light)]">
          <div className="overlay">
            <div className="container flex flex-col gap-2 text-center md:text-start screen2 rounded-2xl">
              <div className="h-[70px]" />
              <div className="flex gap-5 items-center justify-center">
                <h1
                  className="text-xl md:text-5xl font-bold text-[var(--info)]-stroke text-[var(--primary)]"
                  data-aos="fade-up"
                >
                  We’ll follow up <br />
                  with the details
                </h1>
                <div data-aos="fade-left">
                  <img
                    loading="lazy"
                    src="/images/badge2.png"
                    alt=""
                    className="w-[100px] md:w-[150px]"
                  />
                </div>
              </div>
              <div className="h-[30px]" />
              <div
                className="text-center text-4xl text-white font-bold"
                data-aos="fade-up"
              >
                Our team will reach out to confirm your <br />
                reservation and event details.
              </div>
              <div className="h-[30px]" />
              <div className="text-center" data-aos="fade-up">
                <img
                  loading="lazy"
                  src="/images/call-center.png"
                  alt=""
                  className="w-full md:w-[450px]"
                />
              </div>
              <div className="h-[70px]" />
            </div>
          </div>
        </div>
        <div className="py-10 relative">
          <div className="overlay">
            <div className="container flex flex-col gap-2 text-center md:text-start screen3  rounded-2xl">
              <div className="h-[70px]" />
              <div className="flex gap-5 items-center justify-end">
                <h1
                  className="text-xl md:text-5xl font-bold text-[var(--info)]-stroke text-[var(--primary)]"
                  data-aos="fade-up"
                >
                  Get Ready, We’re <br />
                  Bringing the Fun!🎉
                </h1>
                <div data-aos="fade-left">
                  <img
                    loading="lazy"
                    src="/images/badge3.png"
                    alt=""
                    className="w-[100px] md:w-[150px]"
                  />
                </div>
              </div>
              <div className="h-[20px]" />
              <div
                className="text-center text-4xl text-white font-bold"
                data-aos="fade-up"
              >
                Sit back and relax — we’ll deliver everything <br />
                right to your event on the big day!
              </div>
              <div className="h-[30px]" />
              <div className="h-[350px]" />
            </div>
          </div>
        </div>
      </section>

      <PlayStripe />

      <section className="bg-[var(--light)] py-10 pb-0 faq-bg">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="md:w-[50%] space-y-4">
              <h1 className="text-5xl mb-1 text-[var(--info)]-stroke text-[var(--primary)]">
                Frequently Asked <br /> Questions
              </h1>
              <div className="text-lg">
                Planning your first rental? Don’t worry — we’ve got you covered. Below
                are answers to the most common questions we get from customers. Still
                curious about something? Reach out anytime — we’re happy to help!
              </div>
              <div className="py-1" />
              <div><FAQ /></div>
              <div className="py-5" />
            </div>
            <div className="md:w-[500px]">
              <img
                loading="lazy"
                src="/images/child-thinking.png"
                alt=""
                className="w-full"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex-1 space-y-4 h-full">
              <h1 className="text-4xl mb-1 text-[var(--info2)]">
                Ready to make your <br /> Event Amazing?
              </h1>
              <div className="">
                We understand that planning an event can be overwhelming. That&apos;s why
                we&apos;re committed to providing you with the best possible experience.
                From our wide selection of party equipment to our top-notch customer
                service, we&apos;ll take care of all the details so you can focus on what
                really matters: making unforgettable memories.
              </div>
              <div className="mt-auto">
                <img
                  loading="lazy"
                  src="/images/product-image2.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <form action="/contact" method="POST" className="space-y-4 theme-form">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="first-name" className="block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Enter your first name"
                      required={true}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="last-name" className="block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="Enter your last name"
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="email" className="block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required={true}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="event-details" className="block">
                    Event Details
                  </label>
                  <textarea
                    name="event-details"
                    id="event-details"
                    rows={4}
                    placeholder="Enter the details of the event"
                    required={true}
                    defaultValue={""}
                  />
                </div>
                <div>
                  <label htmlFor="bounce-houses" className="block">
                    Select Bounce Houses
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="small-category-card bg-[var(--light)] text-[var(--dark)] rounded-2xl p-3">
                        <div className="mb-1 flex justify-center">
                          <img
                            loading="lazy"
                            src="/images/icon-category-anim.gif"
                            alt=""
                            width={40}
                          />
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

      <section className="social-bg relative">
        <div className="social-overlay text-white py-20">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="text-[var(--primary)]" data-aos="fade-up">
              FOLLOW US
            </h3>
            <h1 className="font-bold text-4xl my-2" data-aos="zoom-in-up">
              Stay In the Loop with Anjoma
            </h1>
            <div className="md:w-[50%] mx-auto text-xl" data-aos="fade-up">
              Follow us on social media for thelatest inflatable setups,
              behind-the-scenes fun, and exclusive party rental deals. We love seeing
              how you celebrate — don’t forget to tag us in your party pics!
            </div>
            <div className="h-[150px]" />
            <div className="flex flex-wrap gap-3 justify-between">
              {[...Array(6)].map((_, i) => (
                <div key={i} data-aos="zoom-in-up" data-aos-delay={i*100}>
                  <a href="#" className="social-icon-hover">
                    <img
                      loading="lazy"
                      src={`/images/social-icon${i+1}.png`}
                      alt="social image"
                      className="h-[100px]"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sign-up-bg relative">
        <div className="wave-divider top-0" style={{ pointerEvents: "none" }}>
          <svg viewBox="0 0 1920 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#fff"
              fillOpacity={1}
              d="M0,200 C384,180 768,140 1152,80 C1536,40 1728,60 1920,100 L1920,0 L0,0 Z"
            />
          </svg>
        </div>
        <div className="glass-overlay py-20">
          <div className="h-[100px]" />
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="">SIGN UP</h3>
            <h1 className="font-bold text-4xl my-2">Sign up and get 10% off</h1>
            <div className="md:w-[50%] mx-auto text-xl mb-3">
              Sign up for early rental access, new inventory, promotions and much
              more!
            </div>
            <div className="md:w-[450px] mx-auto">
              <form className="" action="/newsletter" method="POST">
                <div className="flex gap-3 w-full">
                  <div className="bg-white text-[var(--dark)] w-full rounded-full py-2 px-3 flex items-center">
                    <input
                      className="reset-input w-full"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required={true}
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-3 btn rounded-full cursor-pointer flex gap-3 items-center"
                  >
                    <img
                      loading="lazy"
                      src="/images/icon-newsletter.png"
                      alt="newsletter"
                      width={20}
                    />
                    <div>Subscribe</div>
                  </button>
                </div>
                <div className="py-3" />
                <div>
                  <div className="flex items-center mt-2 font-bold justify-center opacity-50">
                    <input
                      type="checkbox"
                      className="form-checkbox mr-2"
                      id="consent"
                      name="consent"
                      defaultChecked={true}
                      required={true}
                    />
                    <label className="text-sm" htmlFor="consent">
                      I agree to the consent rules.
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-[50px]" />
        </div>
      </section>


      <Footer />

    </main>
  );
}
