import mark from 'markdown-it'
import highlight from 'highlight.js';


{
    // PREVIEW MODE
    const $previewModeToggle = document.querySelector('.show-btn')
    const $editorContainer = document.querySelector('.editor')
    const $showPreviewIcon = document.querySelector('.show-preview-icon')
    const $hidePreviewIcon = document.querySelector('.hide-preview-icon')


    let isPreviewMode = false;
    $previewModeToggle.addEventListener('click', () => {
        isPreviewMode = !isPreviewMode;
        console.log($showPreviewIcon, $hidePreviewIcon)

        $showPreviewIcon.classList.toggle('is-active');
        $hidePreviewIcon.classList.toggle('is-active');

        $editorContainer.classList.toggle('preview-mode')
    })
}



{
    // MARKDOWN PARSER
    const $inputArea = document.querySelector('.markdown-content')
    const $outputArea = document.querySelector('.markdown-preview');
    const $markdownSliderToggle = document.querySelector('.markdown-toggle input')

    const md = new mark({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true
    });

    $inputArea.addEventListener('keyup', () => {
        const inputValue = $inputArea.value;

        let shouldParseMarkDown = $markdownSliderToggle.checked;

        if (shouldParseMarkDown) {
            $outputArea.innerHTML = md.render(inputValue);

            $outputArea.querySelectorAll('pre code')
                .forEach(el => highlight.highlightElement(el));
            return;
        };

        $outputArea.innerHTML = inputValue;
    })

}

{
    // TO TOP BUTTON
    const $topScrollButton = document.querySelector('.to-top-btn');


    const scrollToTop = () => {
        console.log(window)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    $topScrollButton.addEventListener('click', scrollToTop);
}