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

    const $modalOverlay = document.querySelector('.modal-overlay');
    const $fileNameModal = $modalOverlay.querySelector('.document-current');
    const $closeModalButton = $modalOverlay.querySelector('.modal-close ')
    const $confirmDeleteButton = $modalOverlay.querySelector('.close-modal-btn');

    const handleDeleteModal = (event) => {
        let currentFileName = $fileName.value;

        $fileNameModal.textContent = currentFileName;

        $modalOverlay.classList.add('is-active');
    }

    $deleteButton.addEventListener('click', handleDeleteModal);

    // DELETE THE CURRENT DOCUMENT
    // $confirmDeleteButton.addEventListener('click', () => $modalOverlay.classList.remove('is-active'))
    $closeModalButton.addEventListener('click', () => $modalOverlay.classList.remove('is-active'))
}