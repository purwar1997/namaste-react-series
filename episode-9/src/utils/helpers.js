export const disablePageScroll = () => {
  document.body.classList.add('disable-scrolling');
};

export const enablePageScroll = () => {
  document.body.classList.remove('disable-scrolling');
};
