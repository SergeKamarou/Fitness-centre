import {iosVhFix} from './utils/ios-vh-fix';
import {initVideo} from './modules/video';
import {initTabs} from './modules/tabs';
import {initSliders} from './modules/slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initVideo();
  initTabs();
  initSliders();

  window.addEventListener('load', () => {
  });
});
