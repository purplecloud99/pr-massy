import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <footer className="bg-[var(--info)] text-white py-10 relative overflow-hidden">
        <div className="footer-overlay">
          AMAZING PARTY RENTAL
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-5xl mb-2">
                AMAZING <br /> PARTY RENTAL
              </h1>
              <div className="opacity-70 w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non alias ut asperiores quibusdam minus fuga minima modi placeat nobis consequatur.
              </div>
            </div>
            <div className="">
              <div className='mb-2'>
                <h5 className="font-bold">QUICK LINKS</h5>
              </div>
              <ul className="list-none m-0 p-0 opacity-70 space-y-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/collections">Rentals</Link></li>
                <li><Link href="/party-packages">Party Packages</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/delivery-area">Delivery Area</Link></li>
                <li><Link href="/info">Info</Link></li>
              </ul>
            </div>
            <div className="">
              <div className='mb-2'>
                <h5 className="font-bold">CONTACT</h5>
              </div>
              <div className="space-y-3">
                <div className="opacity-70 ">
                  <Link href="mailto:youremail@example.com">youremail@example.com</Link>
                </div>
                <div className="opacity-70">
                  <Link href="tel:+11234567890">+1 (123) 456-7890</Link>
                </div>
                <div className="opacity-70">
                  Subscribe to our newsletter
                </div>
                <form className="flex gap-3 w-full" action="/newsletter" method="POST">
                  <div className="bg-white text-[var(--dark)] w-full rounded-full py-2 px-3 flex items-center">
                    <input className="reset-input" type="email" name="email" placeholder="Email address" required />
                  </div>
                  <div>
                    <button type="submit" className="bg-[var(--primary)] rounded-full cursor-pointer flex justify-center items-center p-3 w-[50px]">
                      <Image
                        src="/images/icon-newsletter.png"
                        alt="newsletter"
                        width={40}
                        height={40}
                        className="block"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="py-3">
            <hr />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-3 opacity-70">
            <div className="">2024 Amazing Party Rentals. All Rights Reserved.</div>
            <div className="">
              <Link href="#">Privacy Policy</Link> |
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
          <div style={{ height: '6rem' }}></div>
        </div>
      </footer>
    </>
  )
}