const videoContainer = document.querySelector('[data-video]');

const initVideo = () => {
  if (videoContainer) {
    setupVideo(videoContainer);
  }
};

function setupVideo(video) {
  let link = video.querySelector('[data-video-link]');
  let button = video.querySelector('[data-video-button]');
  let id = video.getAttribute('data-video-id');

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
    iframe.style.width = video.offsetWidth;
    iframe.style.height = video.offsetHeight;
  });

  link.removeAttribute('href');
  video.classList.add('is-active');
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('promo__video');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export {initVideo};
