document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const switchButton = document.getElementById('switch');

    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        switchButton.innerHTML = "Claro";
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        switchButton.innerHTML = "Oscuro";
    }

    switchButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            switchButton.innerHTML = "Oscuro";
            localStorage.setItem('mode', 'light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            switchButton.innerHTML = "Claro";
            localStorage.setItem('mode', 'dark');
        }
    });
});