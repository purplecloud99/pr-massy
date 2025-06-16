export function changeCityTab(index) {
  const sections = document.querySelectorAll('.city-tab');
  sections.forEach((section) => {
    section.classList.add('hidden');
  });
  sections[index].classList.remove('hidden');
}

export function showTab(tab_id) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tab_id).classList.remove("hidden");
}

export function showQuickTab(index, tab_class) {
  const tabs = document.querySelectorAll(`.${tab_class}`);
  tabs.forEach(tab => tab.classList.add("hidden"));
  tabs[parseInt(index)].classList.remove("hidden");
}

export function toggleMute(button, video_id) {
  const video = document.getElementById(video_id);
  video.muted = !video.muted;
  const muteIcon = button.querySelector('.mute-icon');
  const soundIcon = button.querySelector('.sound-icon');
  muteIcon.classList.toggle('hidden');
  soundIcon.classList.toggle('hidden');
}
