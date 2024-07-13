const timeoutId = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.body.classList.add("loaded");
    clearTimeout(timeoutId);

    
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'For you, Linta';
}, 1000);
