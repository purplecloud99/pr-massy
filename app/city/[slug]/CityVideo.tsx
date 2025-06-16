'use client';
import { toggleMute } from "@/app/utils/city";
export default function CityVideo() {
  return (
    <section className="">
      <div className="overlay py-5">
        <div className="flex flex-col gap-2 text-center md:text-start">
          <div className="bg-[var(--info2)] p-5 md:p-10 mb-5 text-center">
            <h1 className="font-bold text-white mb-5 text-3xl">
              La Mirada Party Rentals- Clean &amp; Insured
            </h1>
            <div className="flex justify-center">
              <div className="w-full relative">
                <video
                  id="hero-video"
                  className="w-full h-[550px] rounded-2xl bg-[var(--dark)] object-cover"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                >
                  <source src="/videos/demo-video.mp4" type="video/mp4" />
                </video>
                <button
                  className="reset-input absolute bottom-0 right-0 m-5 p-2 clickable"
                  onClick={(e) => toggleMute(e.currentTarget, 'hero-video')}
                >
                  <img
                    loading="lazy"
                    className="mute-icon"
                    src="/images/icon-mute.png"
                    alt=""
                    width={25}
                  />
                  <img
                    loading="lazy"
                    className="sound-icon hidden"
                    src="/images/icon-sound.png"
                    alt=""
                    width={25}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}