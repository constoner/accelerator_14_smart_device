function initSpoiler() {
  const spoilerButton = document.querySelector('.spoiler-btn');
  const spoilerontainer = document.querySelector('.spoiler-container');

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
