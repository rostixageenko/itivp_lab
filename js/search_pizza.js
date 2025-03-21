const seacrhInput= document.getElementById('search-input');
const seacrhButton= document.getElementById('search-button');
const blocks = Array.from(document.querySelectorAll('.block'));

seacrhButton.addEventListener('click', ()=>{
    const filter = seacrhInput.value.toLowerCase();

    blocks.forEach(block => {
        const title = block.querySelector('.textic.textmain').textContent.toLowerCase();
        if(title.includes(filter)){
            block.style.display = '';
        } else {
            block.style.display= 'none';
        }
    });

    // searchInput.addEventListener('input', () => {
    //     const filter = searchInput.value.toLowerCase();
    //     const menuItems = menu.getElementsByClassName('menu-item');

    //     for (let i = 0; i < menuItems.length; i++) {
    //         const item = menuItems[i];
    //         if (item.textContent.toLowerCase().includes(filter)) {
    //             item.style.display = '';
    //         } else {
    //             item.style.display = 'none';
    //         }
    //     }
    // });
})
