
export function initDrawer() {
  if (!document) return;
  document.querySelectorAll(".thumb-scroll").forEach(el => {
    el.addEventListener("click", () => {
      const targetId = el.getAttribute("data-target");
      const targetImg = document.getElementById(targetId);
      targetImg.setAttribute("data-show", el.src);
      targetImg.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

export function openDrawer(open = true, content_id = 'project') {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  let drawer_contents = document.querySelectorAll('.drawer-content');
  if (open) {
    document.querySelector('#drawer').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    drawer_contents.forEach(e => {
      e.classList.add("hidden");
    })
    setTimeout(() => {
      document.getElementById(content_id).classList.remove("hidden");
      document.querySelector('#drawer').classList.add('in-view');
      document.querySelector('.drawer-body').classList.add('in-view');
    }, 100);
  } else {
    document.querySelector('.drawer-body').classList.remove('in-view');
    setTimeout(() => {
      document.querySelector('#drawer').classList.remove('in-view');
      drawer_contents.forEach(e => {
        e.classList.add("hidden");
      })
    }, 100);
    setTimeout(() => {
      document.querySelector('#drawer').classList.add('hidden');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }, 300);
  }
}

export function closeIfClickOutside(element) {
  if (event.target === element) {
    openDrawer(false);
  }
}

export function showTab(tab_id) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tab_id).classList.remove("hidden");
}

export function enLargeImage(imageElement) {
  const src = imageElement.src;

  // Create overlay div
  const overlay = document.createElement('div');
  overlay.className = 'enlarged-image-overlay';

  // Create container
  const container = document.createElement('div');
  container.className = 'enlarged-image-container';

  // Create enlarged image
  const img = document.createElement('img');
  img.loading = 'lazy';
  img.src = src;
  img.alt = 'Enlarged Image';

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'reset-input close-btn cursor-pointer';

  // Add image to button
  const closeIcon = document.createElement('img');
  closeIcon.src = '/images/icons-cross.png';
  closeIcon.alt = 'cross icon';
  closeIcon.width = 30;

  closeBtn.appendChild(closeIcon);

  // Close logic
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  // Append everything
  container.appendChild(img);
  container.appendChild(closeBtn);
  overlay.appendChild(container);
  document.body.appendChild(overlay);
}

export function closeEnlargedImage() {
  const overlay = document.querySelector('.enlarged-image-overlay');
  if (overlay) {
    document.body.removeChild(overlay);
  }
}