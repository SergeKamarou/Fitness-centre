const tabContainer = document.querySelector('[data-tab-container]');
const tabButtons = document.querySelectorAll('[data-tab-button]');
const tabItemElements = document.querySelectorAll('[data-tab]');

const tabClickHandler = (item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();

    let currentButton = item;
    let tabId = currentButton.getAttribute('href').replace('#', '');
    let currentTab = document.getElementById(tabId);

    if (!currentButton.classList.contains('is-current')) {
      tabButtons.forEach((button) => {
        button.classList.remove('is-current');
      });

      tabItemElements.forEach((tabItem) => {
        tabItem.classList.remove('is-active');
      });

      currentButton.classList.add('is-current');
      currentTab.classList.add('is-active');
    }
  });
};

const initTabs = () => {
  if (tabContainer) {
    tabButtons[0].classList.add('is-current');
    tabItemElements[0].classList.add('is-active');
    tabButtons.forEach(tabClickHandler);
  }
};

export {initTabs};
