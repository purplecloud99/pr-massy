let isMobile = null;
let productCards = null;

export let products = [
  {
    name: "RAINBOW DUAL LANE FUN COMBO",
    slug: "rainbow-dual-lane-fun-combo",
  },
  {
    name: "SUPER SLIDE",
    slug: "super-slide",
  },
  {
    name: "MEGA BOUNCE HOUSE",
    slug: "mega-bounce-house",
  },
  {
    name: "GIANT WATER SLIDE",
    slug: "giant-water-slide",
  },
  {
    name: "TROPICAL OBSTACLE COURSE",
    slug: "tropical-obstacle-course",
  },
  {
    name: "FUN HOUSE",
    slug: "fun-house",
  },
  {
    name: "ADVENTURE CASTLE",
    slug: "adventure-castle",
  },
  {
    name: "JUNGLE SAFARI",
    slug: "jungle-safari",
  },
  {
    name: "PIRATE BAY",
    slug: "pirate-bay",
  }
]

export function initCollections() {

  if (!document) return;

  productCards = document.querySelectorAll(".product-card");

  document.querySelectorAll(".product-card").forEach(el => {
    el.addEventListener("mouseover", () => {
      const productImage = el.querySelector(".product-image-hover");
      productImage.src = productImage.getAttribute("data-show");
    });
    el.addEventListener("mouseout", () => {
      const startingSrc = el.querySelector(".product-image-hover").getAttribute("data-base");
      const productImage = el.querySelector(".product-image-hover");
      productImage.src = startingSrc;
    });
  });

  document.querySelectorAll(".product-thumb").forEach(el => {
    el.addEventListener("mouseover", () => {
      const targetId = el.getAttribute("data-target");
      const targetImg = document.getElementById(targetId);
      targetImg.setAttribute("data-show", el.src);
    });
  });

  window.addEventListener("resize", checkDeviceType);
  window.addEventListener("DOMContentLoaded", () => {
    productCards = document.querySelectorAll(".product-card"); // Requery in case of dynamic content
    checkDeviceType();
  });

}

function handleScroll() {
  productCards.forEach(el => {
    const productImage = el.querySelector(".product-image-hover");
    const bounding = el.getBoundingClientRect();
    if (
      bounding.top <= window.innerHeight / 2 &&
      bounding.bottom >= window.innerHeight / 2
    ) {
      el.classList.add("active");
      productImage.src = productImage.getAttribute("data-show");
    } else {
      el.classList.remove("active");
      productImage.src = productImage.getAttribute("data-base");
    }
  });
}

function checkDeviceType() {
  const nowMobile = window.innerWidth <= 768;
  if (nowMobile !== isMobile) {
    isMobile = nowMobile;

    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // trigger on load
    } else {
      window.removeEventListener("scroll", handleScroll);
      productCards.forEach(el => {
        el.classList.remove("active");
        const productImage = el.querySelector(".product-image-hover");
        productImage.src = productImage.getAttribute("data-base");
      });
    }
  }
}