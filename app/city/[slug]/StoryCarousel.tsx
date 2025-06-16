'use client';

import { useEffect } from 'react';
import Splide from '@splidejs/splide';

export default function StoryCarousel() {

  let story_slider: Splide | null = null;
  let carousel: HTMLElement | null = null;

  function closeStory() {
    stopAll();
    carousel?.classList.remove('active');
    document.body.style.overflow = 'auto';
    story_slider?.go(10);
  }

  function stopAll() {
    const cards = document.querySelectorAll('.story-card');
    for (const card of cards) {
      card.classList.remove('playing');
      const video = card.querySelector('video');
      video?.pause();
    }
  }

  useEffect(() => {

    carousel = document.querySelector('.story-carousel');
    story_slider = new Splide('.splide.stories', {
      perPage: 4,
      start: 10,
      focus: 'center',
      gap: "1rem",
      arrows: true,
      pagination: false,
      breakpoints: {
        1200: {
          perPage: 3,
        },
        768: {
          perPage: 1,
        }
      }
    });

    story_slider.mount();

    document.querySelectorAll('.story-card').forEach(card => {
      card.addEventListener('click', function (e) {
        const target = e.currentTarget as HTMLElement;
        const index = target.dataset.index;
        playStoryDebounced(parseInt(index || "0"));
      });
    });

    story_slider.on('move', function (index) {
      // do something
      if (carousel && carousel.classList.contains('active')) {
        playStoryDebounced(index);
      }
    });

    let playStoryRunning = false;
    let playingIndex = 0;

    function playStoryDebounced(index: number) {
      if (playStoryRunning) return;
      playStoryRunning = true;

      playStory(index);

      setTimeout(() => {
        playStoryRunning = false;
      }, 250); // 300ms block time, adjust as needed
    }

    function playStory(index: number) {

      console.log("story playing at", index);

      const cur_index = parseInt(String(index) || "0", 10);
      const card = document.querySelector(`.story-card[data-index="${index}"]`);
      const video = card ? card.querySelector('video') : null;

      if (carousel && !carousel.classList.contains('active')) {
        carousel.classList.add('active');
        story_slider?.refresh();
      }

      stopAll();
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        story_slider?.go(cur_index);
      }, 200);

      card?.classList.add('playing');

      if (playingIndex === cur_index) {

        if (card) {
          card.querySelector(".play-icon")?.classList.toggle("hidden");
          card.querySelector(".pause-icon")?.classList.toggle("hidden");
        }

        if (video) {
          if (video.classList.contains('playing')) {
            video.pause();
            video.classList.remove('playing');
          } else {
            video.play();
            video.classList.add('playing');
          }
        }


      } else {

        card?.querySelector(".play-icon")?.classList.add("hidden");
        card?.querySelector(".pause-icon")?.classList.remove("hidden");
        video?.play();
        video?.classList.add('playing');

      }

      playingIndex = cur_index;

    }

    return () => {
      story_slider?.destroy();
    };
  })
  return (
    <div className="story-carousel">
      <button
        className="close-btn reset-input absolute top-0 right-0 p-2 clickable z-50"
        onClick={() => closeStory()}
      >
        <img
          loading="lazy"
          src="/images/icons-cross.png"
          alt=""
          height={25}
        />
      </button>
      <div className="splide stories w-full" role="group">
        <div className="splide__track">
          <ul id="story-list" className="splide__list text-center w-full">
            {...Array(30).map((_, i) => (
              <li className="splide__slide flex items-center" key={i}>
                <div className="story-card mx-auto" data-index={i}>
                  <div className="overlay" />
                  <div className="options flex gap-2">
                    <div>
                      <div className="fw-bold">Amazing bounce house</div>
                      at La Mirada
                    </div>
                    <div className="ms-auto p-3">
                      <img
                        loading="lazy"
                        className="play-icon"
                        src="/images/icon-play.png"
                        alt=""
                        width={20}
                      />
                      <img
                        loading="lazy"
                        className="pause-icon hidden"
                        src="/images/icon-pause.png"
                        alt=""
                        width={20}
                      />
                    </div>
                  </div>
                  <video className="w-full h-full object-cover" loop={true}>
                    <source
                      src="/videos/sample-short.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="avatar">
                    <img
                      loading="lazy"
                      src="/images/product-image.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}