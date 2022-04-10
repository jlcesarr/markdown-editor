{
    let isLightTheme = false;

    const $themeSliderToggle = document.querySelector('.theme-switcher input[type="checkbox"]');
    const $lightThemeIcon = document.querySelector('.light-icon');
    const $darkThemeIcon = document.querySelector('.dark-icon');


    const handleThemeChange = () => {
        isLightTheme = !isLightTheme;
        document.body.classList.toggle('light-theme');

        $lightThemeIcon.classList.toggle('active-theme')
        $darkThemeIcon.classList.toggle('active-theme')
    }

    $themeSliderToggle.addEventListener('change', handleThemeChange)
}