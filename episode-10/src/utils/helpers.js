export const openModal = setIsModalOpen => {
  setIsModalOpen(true);
  document.body.classList.add('disable-scrolling');
};

export const closeModal = (event, setIsModalOpen) => {
  if (event.target === event.currentTarget) {
    setIsModalOpen(false);
    document.body.classList.remove('disable-scrolling');
  }
};

export const scrollCarouselLeft = carousel => {
  carousel.scrollLeft = carousel.scrollLeft - carousel.clientWidth / 2;
};

export const scrollCarouselRight = carousel => {
  carousel.scrollLeft = carousel.scrollLeft + carousel.clientWidth / 2;
};
