export const disablePageScroll = () => {
  document.body.classList.add('disable-scrolling');
};

export const enablePageScroll = () => {
  document.body.classList.remove('disable-scrolling');
};

export const openModal = setIsModalOpen => {
  setIsModalOpen(true);
  disablePageScroll();
};

export const closeModal = (event, setIsModalOpen) => {
  if (event.target === event.currentTarget) {
    setIsModalOpen(false);
    enablePageScroll();
  }
};
