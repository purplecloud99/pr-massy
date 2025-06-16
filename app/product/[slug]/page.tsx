import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import '@/app/styles/splide.min.css';
import '@/app/styles/splide-core.min.css';
import Products from "@/app/components/Products";
import Category from "@/app/components/Category";
import Image from "next/image";
import ProductHero from "./ProductHero";
import { products } from "@/app/lib/collectionGallery";
import Link from "next/link";
import ClientCarousel2 from "@/app/components/ClientCarousel2";
import RelatedProducts from "@/app/components/RelatedProducts";

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Product({ params }: Props) {

  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--info2)] text-white">
        <div className="flex justify-center mb-4">
          <img src="/images/bounce-house-icon.png" alt="bounce house icon" width={100} />
        </div>
        <div className="mb-3">
          <h1 className="font-bold text-4xl">Product not found :(</h1>
        </div>
        <p className="text-center md:w-[440px]">
          The product you are looking for does not exist. Please check the URL and try again.
        </p>
        <Link href="/" className="mt-5 px-5 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)] hover:text-white">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">

      <Header relative={true} />

      <div className="py-10"></div>

      <ProductHero product={product} />

      <section className="mb-5">
        <div className="overlay py-5">
          <div className="container flex flex-col gap-2 text-center md:text-start">
            <div className="text-center">
              <h3 className="text-[var(--primary)]">RENTAL TERMS</h3>
              <h1 className="font-bold text-4xl mb-3">Before You Rent</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="flex-1 flex flex-col gap-3">
                <div>
                  Delivery and pickup times are scheduled based on your event. Select
                  a delivery time at least I hour before your event start time. Next
                  morning pickup is for late events, and available with an additional
                  fee. Next morning pickups are generally done between 8am and 12pm.
                </div>
                <div className="font-bold">
                  Delivery and pickup times are scheduled based on your event. Select
                  a delivery time at least I hour before your event start time.
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div>
                  Delivery and pickup times are scheduled based on your event. Select
                  a delivery time at least I hour before your event start time. Next
                  morning pickup is for late events, and available with an additional
                  fee. Next morning pickups are generally done between 8am and 12pm.
                </div>
                <div className="font-bold">
                  Delivery and pickup times are scheduled based on your event. Select
                  a delivery time at least I hour before your event start time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="overlay py-5">
          <div className="container flex flex-col gap-2 text-center md:text-start">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-[var(--primary)] mb-3">VIDEO</h3>
                <iframe
                  className="w-full"
                  height={400}
                  src="https://www.youtube.com/embed/yE02lQOg8Lc?si=9levq-7mp4_uv6ym"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[var(--primary)] mb-3">DETAILS</h3>
                <div className="rounded-md border-2 border-solid border-[var(--primary)] bg-[var(--light)] p-4 flex flex-col gap-3 text-start">
                  <div className="flex items-center gap-3">
                    <img
                      loading="lazy"
                      src="/images/icon-list-circle.png"
                      alt="icon for list in circle"
                      width={35}
                    />
                    <div className="">X 1 SW X 14&apos;H</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      loading="lazy"
                      src="/images/icon-list-circle.png"
                      alt="icon for list in circle"
                      width={35}
                    />
                    <div className="">5 (or manufacturer recommendation)</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      loading="lazy"
                      src="/images/icon-list-circle.png"
                      alt="icon for list in circle"
                      width={35}
                    />
                    <div className="">5 (or manufacturer recommendation)</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      loading="lazy"
                      src="/images/icon-list-circle.png"
                      alt="icon for list in circle"
                      width={35}
                    />
                    <div className="">
                      Dual Lane Outside Slide, Pop-Ups, Jumping Area, Optional Theme
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      loading="lazy"
                      src="/images/icon-list-circle.png"
                      alt="icon for list in circle"
                      width={35}
                    />
                    <div className="">
                      Dual Lane Outside Slide, Pop-Ups, Jumping Area, Optional Theme
                    </div>
                  </div>
                </div>
                <div className="text-center p-4">
                  <div className="flex justify-center">
                    <img
                      loading="lazy"
                      src="/images/icons8-truck.gif"
                      alt="truck icon"
                      width={70}
                    />
                  </div>
                  <h1 className="text-[var(--info2)] mb-2">FREE DELIVERY. NO HASSLE.</h1>
                  <div className="opacity-50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
                    ipsum porro quod, tempore saepe laboriosam vel molestias expedita
                    sunt distinctio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientCarousel2 />

      <section className="bg-[var(--light)]">
        <div className="overlay py-10">
          <div className="container flex flex-col gap-2 text-center">
            <h3 className="text-[var(--primary)]">POPULAR PRODUCTS</h3>
            <h1 className="font-bold text-4xl">People Also Book</h1>
            <div className="py-1" />
          </div>
          <Products />
        </div>
      </section>

      <Category />

      <section className="bg-pat py-5">
        <div className="overlay py-5">
          <div className="container flex flex-col gap-2 text-center gap-4">
            <h3 className="text-[var(--primary)]">@amazingpartyrental</h3>
            <h1 className="font-bold text-4xl mb-3">Be Part of The Fun!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="flex flex-col gap-3">
                <img
                  loading="lazy"
                  className="gimage h1"
                  src="/images/games.png"
                  alt="gallery image 1"
                />
                <img
                  loading="lazy"
                  className="gimage h2"
                  src="/images/games.png"
                  alt="gallery image 2"
                />
              </div>
              <div className="flex flex-col gap-3">
                <img
                  loading="lazy"
                  className="gimage h2"
                  src="/images/games.png"
                  alt="gallery image 2"
                />
                <img
                  loading="lazy"
                  className="gimage h1"
                  src="/images/games.png"
                  alt="gallery image 1"
                />
              </div>
              <div className="flex flex-col gap-3">
                <img
                  loading="lazy"
                  className="gimage h1"
                  src="/images/games.png"
                  alt="gallery image 1"
                />
                <img
                  loading="lazy"
                  className="gimage h2"
                  src="/images/games.png"
                  alt="gallery image 2"
                />
              </div>
              <div className="flex flex-col gap-3">
                <img
                  loading="lazy"
                  className="gimage h2"
                  src="/images/games.png"
                  alt="gallery image 2"
                />
                <img
                  loading="lazy"
                  className="gimage h1"
                  src="/images/games.png"
                  alt="gallery image 1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts />

      <section className="bg-[var(--dark)] text-white py-10">
        <div className="overlay py-5">
          <div className="container flex flex-col gap-2 text-center">
            <div className="md:w-1/2 mx-auto flex flex-col gap-4">
              <h1 className="font-bold text-4xl mb-1 text-[var(--primary)]">
                Sign up and get 10% off
              </h1>
              <h3 className="mb-3 font-normal">
                Sign up for early sale access, new in. promotions and more
              </h3>
              <form
                className="flex flex-col md:flex-row gap-3 w-full"
                action="/newsletter"
                method="POST"
              >
                <div className="bg-white text-[var(--dark)] w-full rounded-full py-2 px-3 flex items-center">
                  <input
                    className="reset-input"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required={true}
                  />
                </div>
                <button type="submit" className="p-3 rounded-full bg-[var(--primary)] cursor-pointer">
                  <Image
                    src="/images/icon-newsletter.png"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
