// {
//     let documents = [{
//         id: Math.floor(Math.random() * 9999) + 1000,
//         name: 'welcome.md',
//         date: new Date().getTime(),
//         userId: Math.floor(Math.random() * 9999) + 1000,
//         content: "TESTE"
//     }];

//     const $activeFileName = document.querySelector('.document-filename');
//     const $documentsList = document.querySelector('.documents-list');


//     function renderDocumentsList(documents) {
//         let mountedList = '';
//         documents.map(document => {
//             mountedList += `
//             <li class="document-item">
//                 <img class="document-icon" src="assets/svg/icon-document.svg" alt="File Icon">
//                 <div class="document-details">
//                     <span class="document-date">${new Date(document.date)}</span>
//                     <span class="document-filename">${document.name}</span>
//                 </div>
//             </li>
//             `
//         })
//         $documentsList.innerHTML = mountedList
//     }


//     renderDocumentsList(documents)
// }