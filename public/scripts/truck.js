gsap.registerPlugin(MotionPathPlugin);

const truck = document.getElementById('truck');
const pathsContainer = document.querySelector('.paths');
let currentLocation = 'start';
let isAnimating = false;
let smokeInterval;
let currentPath = null;

// County button positions
const locations = {
  'start': {
    x: 580,
    y: 600
  },
  'la': {
    x: 200,
    y: 300
  },
  'sb': {
    x: 800,
    y: 200
  },
  'riverside': {
    x: 650,
    y: 320
  },
  'orange': {
    x: 500,
    y: 460
  }
};

// Setup county buttons
document.querySelectorAll('.county-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (isAnimating || currentLocation === btn.id) return;
    driveTruck(btn.id);
  });
});

function createPath(from, to) {
  // Get the positions
  const fromPos = locations[from];
  const toPos = locations[to];

  // Calculate control points for a curved path
  const midX = (fromPos.x + toPos.x) / 2;
  const midY = (fromPos.y + toPos.y) / 2;

  // Add some randomness to control point
  const ctrlX = midX + (Math.random() * 100 - 50);
  const ctrlY = midY - Math.abs(Math.random() * 100);

  // Create the SVG path element
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.id = `path-${from}-to-${to}`;
  path.setAttribute('class', 'path');
  path.setAttribute('d', `M${fromPos.x},${fromPos.y} Q${ctrlX},${ctrlY} ${toPos.x},${toPos.y}`);

  // Remove old path if it exists
  if (currentPath) {
    currentPath.remove();
  }

  // Add the new path to the SVG and return it
  pathsContainer.appendChild(path);
  currentPath = path;
  return path;
}

function driveTruck(destination) {
  if (isAnimating) return;
  isAnimating = true;

  // Create dynamic path from current location to destination
  const path = createPath(currentLocation, destination);

  gsap.to(path, {
    opacity: 1,
    duration: 0.5
  });

  // Animate truck along path
  const tl = gsap.timeline({
    onComplete: () => {
      currentLocation = destination;
      isAnimating = false;

      // Hide path after animation
      gsap.to(path, {
        opacity: 0,
        duration: 1,
        delay: 1
      });
    }
  });

  tl.to(truck, {
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
    },
    duration: 3,
    ease: "power1.inOut"
  });


  // Compute truck rotation based on previous horizontal percentage
  tl.to(truck, {
    scaleX: currentLocation < destination ? -1 : 1,
    duration: 0.5,
    ease: "power1.inOut"
  }, 0);

}

function startSmokeEffect() {
  smokeInterval = setInterval(createSmokeParticle, 100);
}

function clearSmoke() {
  clearInterval(smokeInterval);
  document.querySelectorAll('.smoke-particle').forEach(el => el.remove());
}

function createSmokeParticle() {
  const truckRect = truck.getBoundingClientRect();
  const smokeParticle = document.createElement('div');
  smokeParticle.className = 'smoke-particle';

  // Position particle at the truck's rear
  const angle = (truck._gsTransform ? -truck._gsTransform.rotation * Math.PI / 180 : 0);
  const offsetX = -20 * Math.cos(angle);
  const offsetY = -20 * Math.sin(angle);

  smokeParticle.style.left = (truckRect.left + truckRect.width / 2 + offsetX) + 'px';
  smokeParticle.style.top = (truckRect.top + truckRect.height / 2 + offsetY) + 'px';
  document.body.appendChild(smokeParticle);

  // Animate the smoke particle
  gsap.to(smokeParticle, {
    scale: 2,
    opacity: 0,
    x: gsap.utils.random(-30, 30),
    y: gsap.utils.random(-30, 30),
    duration: 1.5,
    onComplete: () => smokeParticle.remove()
  });
}