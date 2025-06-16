export function activeGroup(selector) {

  let elements = document.querySelectorAll(selector);
  elements.forEach(elem => {
    elem.addEventListener('click', () => {
      elements.forEach(el => el.classList.remove('active'));
      elem.classList.add('active');
    });
  });

}

export function toggle(...selectors) {
  for (const selector of selectors) {
    document.querySelector(selector).classList.toggle('hidden');
  }
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