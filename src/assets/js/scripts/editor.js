import mark from 'markdown-it'
import highlight from 'highlight.js';


{

    const $previewModeToggle = document.querySelector('.show-btn')
    const $editorContainer = document.querySelector('.editor')


    let isPreviewMode = false;
    $previewModeToggle.addEventListener('click', () => {
        isPreviewMode = !isPreviewMode;

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