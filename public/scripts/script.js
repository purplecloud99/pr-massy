
document.addEventListener("scroll", function() {
  const scrollUpElements = document.querySelectorAll('.scroll-up-visible');
  const scrollDown = window.scrollY > this.beforeScrollTop;
  this.beforeScrollTop = window.scrollY;
  if (scrollDown) {
    scrollUpElements.forEach(el => el.classList.add('hidden'));
  } else {
    scrollUpElements.forEach(el => el.classList.remove('hidden'));
  }
});


activeGroup('.faq')

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('show');
}

function toggleDropdown(element) {
  if (window.innerWidth <= 768) {
    element.classList.toggle('open');
  }
}
// Data for county cities
const cityData = {
  orange: ['Anaheim', 'Santa Ana', 'Irvine', 'Garden Grove', 'Huntington Beach'],
  la: ['Los Angeles', 'Long Beach', 'Pasadena', 'Glendale', 'Torrance'],
  sb: ['San Bernardino', 'Fontana', 'Ontario', 'Rancho Cucamonga', 'Redlands'],
  rv: ['Riverside', 'Corona', 'Moreno Valley', 'Temecula', 'Murrieta']
};

// Get elements for truck animations
const truck = document.getElementById("truck");
const mapContainer = document.getElementById("delivery-map-container");
const truckPath = document.getElementById("truckPath");
// (We will create smoke puffs dynamically; the static "smoke" element is unused.)

const truckPositions = {
  orange: {
    left: "40%",
    top: "30%"
  },
  la: {
    left: "19%",
    top: "47%"
  },
  sb: {
    left: "65%",
    top: "17%"
  },
  rv: {
    left: "60%",
    top: "66%"
  }
};

let currentCounty = null;
// Stores the truck's last position for trail effects
let lastPosition = {
  left: null,
  top: null
};


function showCities(block, county) {

  const panel = document.getElementById('cityListPanel');
  const title = document.getElementById('cityPanelTitle');
  const list = document.getElementById('cityList');

  if (currentCounty === county) {
    panel.classList.remove('open');
    currentCounty = null;
    return;
  }

  title.textContent = county.toUpperCase() + " County Cities";
  const cities = cityData[county] || [];
  list.innerHTML = cities.map(city => `<li>${city}</li>`).join('');
  panel.classList.add('open');
  currentCounty = county;

  const rect = block.getBoundingClientRect();
  const button_x = rect.left;
  const button_y = rect.top;

  const pos = truckPositions[county];
  if (pos) {
    // Start continuous smoke puffs during movement (every 100ms over 0.8 seconds)
    let smokeInterval = setInterval(() => {
      const rect = truck.getBoundingClientRect();
      const contRect = mapContainer.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - contRect.left;
      const y = rect.top + rect.height / 2 - contRect.top;
      createSmokePuff(x + "px", y + "px");
    }, 100);
    setTimeout(() => clearInterval(smokeInterval), 800);

    // Compute truck rotation based on previous horizontal percentage 
    let angle = 0;
    if (lastPosition.left) {
      const oldLeft = parseFloat(lastPosition.left);
      const newLeft = parseFloat(pos.left);
      angle = newLeft > oldLeft ? 45 : newLeft < oldLeft ? -45 : 0;
    }

    // If there's a previous position, draw the back dotted trail
    if (lastPosition.left && lastPosition.top) {
      /* createBackDottedTrail(lastPosition, pos); */
      makeTrail(truck, block);
    }

    // Animate the truck movement and rotation
    if(button_x > parseFloat(truck.style.left)){
      truck.style.transform = "translateX(-50%) rotateY(180deg)";
    } else {
      truck.style.transform = "translateX(-50%) rotateY(0deg)";
    }
    truck.style.transition = "all 1.5s ease-out";
    const contRect = mapContainer.getBoundingClientRect();
    truck.style.left = (button_x - contRect.left) + "px";
    truck.style.top = (button_y - contRect.top) + "px";

    // Save the current position for subsequent moves
    lastPosition.left = pos.left;
    lastPosition.top = pos.top;
  }

  // (Optional truck path animation code can go here)
  truckPath.classList.add("active");
  setTimeout(() => {
    truckPath.classList.remove("active");
  }, 1000);
}

function makeTrail(from, to) {
  const fromRect = from.getBoundingClientRect();
  const toRect = to.getBoundingClientRect();
  const contRect = mapContainer.getBoundingClientRect();

  const x1 = fromRect.left + fromRect.width / 2 - contRect.left;
  const y1 = fromRect.top + fromRect.height / 2 - contRect.top;
  const x2 = toRect.left + toRect.width / 2 - contRect.left;
  const y2 = toRect.top + toRect.height / 2 - contRect.top;

  const dx = x2 - x1, dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI);

  const trail = document.createElement('div');
  trail.style.position = "absolute";
  trail.style.left = x1 + "px";
  trail.style.top = y1 + "px";
  trail.style.width = "0px";
  trail.style.height = "4px";
  trail.style.backgroundImage = "repeating-linear-gradient(90deg, transparent, transparent 4px, green 4px, green 12px)";
  trail.style.transformOrigin = "left center";
  trail.style.transform = "rotate(" + angleDeg + "deg)";
  
  mapContainer.appendChild(trail);

  setTimeout(() => {
    trail.style.transition = "width 0.8s linear";
    trail.style.width = length + "px";
  }, 0);

  setTimeout(() => {
    trail.remove();
  }, 3000);

}

// Dynamically creates continuous smoke puffs at the given coordinates
function createSmokePuff(left, top) {
  const puff = document.createElement('div');
  puff.classList.add('smoke-puff');
  puff.style.left = left;
  puff.style.top = top;
  mapContainer.appendChild(puff);
  puff.addEventListener('animationend', () => {
    puff.remove();
  });
}

// Creates a gradual green dotted "back" trail from oldPos to newPos
function createBackDottedTrail(oldPos, newPos) {
  const cw = mapContainer.offsetWidth;
  const ch = mapContainer.offsetHeight;
  const x1 = parseFloat(oldPos.left) / 100 * cw;
  const y1 = parseFloat(oldPos.top) / 100 * ch;
  const x2 = parseFloat(newPos.left) / 100 * cw;
  const y2 = parseFloat(newPos.top) / 100 * ch;
  const dx = x2 - x1, dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI);
  const trail = document.createElement('div');
  trail.style.position = "absolute";
  trail.style.left = x1 + "px";
  trail.style.top = y1 + "px";
  trail.style.width = "0px";
  trail.style.height = "2px";
  // Use a repeating linear gradient for a dotted effect in green
  trail.style.backgroundImage = "repeating-linear-gradient(90deg, transparent, transparent 4px, green 4px, green 8px)";
  trail.style.transformOrigin = "left center";
  trail.style.transform = "rotate(" + angleDeg + "deg)";
  mapContainer.appendChild(trail);
  // Animate width from 0 to full length over 0.8 seconds
  setTimeout(() => {
    trail.style.transition = "width 0.5s linear";
    trail.style.width = length + "px";
  }, 0);
  setTimeout(() => {
    trail.remove();
  }, 3000);
}

// Creates a gradual red dotted "front" trail at the truck's new position
function createFrontDottedTrail(pos, angle) {
  const cw = mapContainer.offsetWidth;
  const ch = mapContainer.offsetHeight;
  const x = parseFloat(pos.left) / 100 * cw;
  const y = parseFloat(pos.top) / 100 * ch;
  const trail = document.createElement('div');
  trail.style.position = "absolute";
  trail.style.left = x + "px";
  trail.style.top = y + "px";
  trail.style.width = "0px";
  trail.style.height = "2px";
  trail.style.backgroundImage = "repeating-linear-gradient(90deg, transparent, transparent 4px, red 4px, red 8px)";
  trail.style.transformOrigin = "left center";
  // Rotate the front trail by the same angle as the truck
  trail.style.transform = "rotate(" + angle + "deg)";
  mapContainer.appendChild(trail);
  // Animate width to 50px (front trail length) over 0.8 seconds
  setTimeout(() => {
    trail.style.transition = "width 0.8s linear";
    trail.style.width = "50px";
  }, 0);
  setTimeout(() => {
    trail.remove();
  }, 3000);
}

function closeCityPanel() {
  const panel = document.getElementById('cityListPanel');
  panel.classList.remove('open');
  currentCounty = null;
}


function toggle(...selectors) {
  for (const selector of selectors) {
    document.querySelector(selector).classList.toggle('hidden');
  }
}