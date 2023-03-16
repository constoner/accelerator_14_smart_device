function initSpoiler() {
  const spoilerontainer = document.querySelector('[data-spoiler="container"]');
  const spoilerButton = document.querySelector('[data-spoiler="button"]');

  const toggleSpoiler = () => {
    if (spoilerontainer.classList.contains('is-shown')) {
      spoilerButton.textContent = 'Подробнее';
    } else {
      spoilerButton.textContent = 'Свернуть';
    }

    spoilerontainer.classList.toggle('is-shown');
  };

  spoilerButton.addEventListener('click', toggleSpoiler);

}

export {initSpoiler};
