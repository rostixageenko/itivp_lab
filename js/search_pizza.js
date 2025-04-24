const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const blocks = Array.from(document.querySelectorAll('.block'));
const clearButton = document.getElementById('clear-button');

searchButton.addEventListener('click', () => {
    const trimmedValue = searchInput.value.trim();

    // const spacePattern = /^(?! )[^\s]*(\s[^\s]+)*$/;
    // const maxLength = 30;

    // if (!spacePattern.test(trimmedValue)) {
    //     alert('Ошибка: Вводите не более 1 пробела между словами');
    //     return;
    // }
    // if (trimmedValue.length > maxLength) {
    //     alert('Ошибка: Не превышайте 30 символов.');
    //     return;
    // }

    const filter = trimmedValue.toLowerCase();

    blocks.forEach(block => {
        const title = block.querySelector('.textic.textmain').textContent.toLowerCase();
        if (title.includes(filter)) {
            block.style.display = '';
        } else {
            block.style.display = 'none';
        }
    });
});

clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.style.display = 'none';
    blocks.forEach(block => {
        block.style.display = '';
    });
});

searchInput.addEventListener('input', () => {
    const alertLength = 30;

    searchInput.value = searchInput.value.replace(/[^а-яА-Яa-zA-ZёЁ\s]/g, '');

    if (searchInput.value.startsWith(' ')) {
        searchInput.value = searchInput.value.trim();
        alert('Ошибка: Ввод не должен начинаться с пробела.');
    }

    searchInput.value = searchInput.value.replace(/\s+/g, ' ');

    if (searchInput.value.length > alertLength) {
        searchInput.value = searchInput.value.slice(0,alertLength );
        alert('Ошибка: Длина ввода не должна превышать 30 символов.');
    }


    if (searchInput.value) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
});