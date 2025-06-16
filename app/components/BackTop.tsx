'use client';
import { useEffect } from "react";

export default function BackTop() {
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const showArrowAt = 1000; // adjust to your needs
        const upArrow = document.getElementById("scroll-to-top");
        if (!upArrow) return; // prevents null error
        if (scrollPosition > showArrowAt) {
          upArrow.classList.remove("hidden");
        } else {
          upArrow.classList.add("hidden");
        }
      });
    }
  })
  return (
    <div
      id="scroll-to-top"
      className="fixed bottom-0 left-0 m-5 hidden slide-bottom"
      style={{ zIndex: 1 }}
    >
      <a href="#">
        <img
          loading="lazy"
          src="/images/go-up.png"
          alt=""
          className="clickable"
          width={70}
        />
      </a>
    </div>
  )
}