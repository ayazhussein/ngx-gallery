import {
  ImageSize,
  GalleryAction,
  ThumbnailsMode,
  LoadingStrategy,
  SlidingDirection,
  ThumbnailsPosition,
  ImageLoaderMode,
  DotsPosition,
  CounterPosition
} from '../models/constants';
import { GalleryState } from '../models/gallery.model';
import { GalleryConfig } from '../models/config.model';

/** Initial state */
export const defaultState: GalleryState = {
  action: GalleryAction.INITIALIZED,
  isPlaying: false,
  hasNext: false,
  hasPrev: false,
  currIndex: 0,
  items: []
};

export const defaultConfig: GalleryConfig = {
  nav: true,
  loop: true,
  zoomOut: 0,
  dots: false,
  thumb: true,
  dotsSize: 30,
  counter: true,
  gestures: true,
  autoPlay: false,
  thumbWidth: 120,
  thumbHeight: 90,
  panSensitivity: 25,
  disableThumb: false,
  playerInterval: 3000,
  imageSize: ImageSize.Contain,
  thumbMode: ThumbnailsMode.Strict,
  dotsPosition: DotsPosition.Bottom,
  counterPosition: CounterPosition.Top,
  thumbPosition: ThumbnailsPosition.Bottom,
  loadingMode: ImageLoaderMode.Determinate,
  loadingStrategy: LoadingStrategy.Default,
  slidingDirection: SlidingDirection.Horizontal,
  navIcon: `<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 240.823 240.823" version="1.1" viewBox="0 0 240.823 240.823" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z" fill="#fff"/></svg>`,
};
