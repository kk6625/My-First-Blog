document.addEventListener('DOMContentLoaded', function() {
    // Function to handle click event on "Back" button
    function handleBackButtonClick() {
        console.log("Back button clicked"); 
        window.history.back(); 
    }

    // Add event listener to the "Back" button
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', handleBackButtonClick);
    } else {
        console.error("Back button not found");
    }

    // Function to handle theme toggle
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    // Event listener for theme toggle switch
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme);
    } else {
        console.error("Theme switch not found");
    }

    // Check localStorage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    } else {
        console.error("Theme preference not found in localStorage");
    }
});
