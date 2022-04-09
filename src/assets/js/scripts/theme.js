{
    window.onload = () => {
        let isLightTheme = false;

        const $themeSliderToggle = document.querySelector('.theme-switcher input[type="checkbox"]');
        const $lightThemeIcon = document.querySelector('.light-icon');
        const $darkThemeIcon = document.querySelector('.dark-icon');

        console.log($themeSliderToggle)


        const handleThemeChange = () => {
            if ($themeSliderToggle.checked) {
                isLightTheme = true;

                document.body.classList.add('light-theme')


                console.log($lightThemeIcon, $darkThemeIcon)


                $lightThemeIcon.classList.add('active-theme')
                $darkThemeIcon.classList.remove('active-theme')
                return;
            }

            isLightTheme = false;
            document.body.classList.remove('light-theme')
            $lightThemeIcon.classList.remove('active-theme')
            $darkThemeIcon.classList.add('active-theme')
        }

        $themeSliderToggle.addEventListener('change', handleThemeChange)
    }
}