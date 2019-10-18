export default (image, callback) => {
  const htmlImageTemp = document.createElement('img');

  htmlImageTemp.addEventListener('load', () => {
    callback(true);
  });

  htmlImageTemp.addEventListener('error', () => {
    callback(false);
  });

  htmlImageTemp.src = image;
};
