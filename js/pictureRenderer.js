const renderPictures = (picturesData) => {
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  const template = document.getElementById('picture').content;

  const picturesCollection = document.querySelectorAll('.picture');
  if (picturesCollection !== undefined) {
    picturesCollection.forEach((picture) => {
      picture.remove();
    });
  }

  picturesData.forEach((picture) => {
    const pictureElement = template.cloneNode(true);
    const img = pictureElement.querySelector('.picture__img');
    const likesNumber = pictureElement.querySelector('.picture__likes');
    const commentsNumber = pictureElement.querySelector('.picture__comments');

    pictureElement.querySelector('.picture').setAttribute('data-id', picture.id);

    img.src = picture.url;
    img.alt = picture.description;
    likesNumber.textContent = picture.likes;
    commentsNumber.textContent = picture.comments.length;
    fragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(fragment);
};
export {renderPictures};
