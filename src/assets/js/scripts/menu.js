{


    // MENU - OPEN/CLOSE
    const $wrapper = document.querySelector('.grid-wrapper');
    const $menuToggle = document.querySelector('.menu-btn');



    let isMenuOpen = false;
    const handleMenu = (event) => {
        isMenuOpen = !isMenuOpen
        $wrapper.classList.toggle('menu-active', isMenuOpen)
    }

    $menuToggle.addEventListener('click', handleMenu);
}

{
    // MENU - DELETE DOCUMENT

    const $deleteButton = document.querySelector('.delete-btn');
    const $fileName = document.querySelector('input.document-filename');

    const $modalConfirm = document.querySelector('.modal-overlay');
    const $fileNameModal = $modalConfirm.querySelector('.document-current');
    const $confirmButton = $modalConfirm.querySelector('.close-modal-btn');

    const handleDelete = (event) => {
        let currentFileName = $fileName.value;

        $fileNameModal.textContent = currentFileName;

        $modalConfirm.classList.add('is-active');
    }

    $deleteButton.addEventListener('click', handleDelete);
    $confirmButton.addEventListener('click', () => $modalConfirm.classList.remove('is-active'))
}