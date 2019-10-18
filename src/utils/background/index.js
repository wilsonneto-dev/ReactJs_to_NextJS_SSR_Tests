import preloadImage from '../preloadImage';

const background = {
  set(imageBackground) {
    preloadImage(imageBackground, success => {
      if (success) {
        const elmBackground = document.getElementById(
          'body-fix-background-layer'
        );
        elmBackground.style.backgroundImage = `url('${imageBackground}')`;
        elmBackground.style.opacity = '1';
      }
    });
  },

  clear() {
    const elmBackground = document.getElementById('body-fix-background-layer');
    // elmBackground.style.backgroundImage = '';
    elmBackground.style.opacity = '0';
  }
};

export default background;
